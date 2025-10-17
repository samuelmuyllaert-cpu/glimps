import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PRERENDER_SERVICE_URL = "https://service.prerender.io";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const userAgent = req.headers.get('user-agent') || '';
    const url = new URL(req.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) {
      return new Response(
        JSON.stringify({ error: 'Missing url parameter' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if the request is from a bot/crawler
    const crawlerUserAgents = [
      'googlebot',
      'bingbot',
      'slurp',
      'duckduckbot',
      'baiduspider',
      'yandexbot',
      'sogou',
      'exabot',
      'facebot',
      'facebookexternalhit',
      'twitterbot',
      'rogerbot',
      'linkedinbot',
      'embedly',
      'quora link preview',
      'showyoubot',
      'outbrain',
      'pinterest',
      'slackbot',
      'vkShare',
      'W3C_Validator',
      'whatsapp',
      'telegrambot'
    ];

    const isCrawler = crawlerUserAgents.some(bot => 
      userAgent.toLowerCase().includes(bot)
    );

    if (!isCrawler) {
      // Not a crawler, return normal response
      return new Response(
        JSON.stringify({ isCrawler: false, message: 'Not a crawler' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch pre-rendered content from Prerender.io
    const prerenderToken = Deno.env.get('PRERENDER_TOKEN');
    
    if (!prerenderToken) {
      console.error('PRERENDER_TOKEN not configured');
      return new Response(
        JSON.stringify({ error: 'Prerender token not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching prerendered content for: ${targetUrl}`);

    const prerenderResponse = await fetch(`${PRERENDER_SERVICE_URL}/${targetUrl}`, {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': userAgent,
      },
    });

    if (!prerenderResponse.ok) {
      console.error(`Prerender.io error: ${prerenderResponse.status}`);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch prerendered content' }),
        { status: prerenderResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await prerenderResponse.text();

    return new Response(html, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html',
        'X-Prerendered': 'true',
      },
    });

  } catch (error) {
    console.error('Error in prerender-proxy:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
