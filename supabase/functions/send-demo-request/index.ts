import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DemoRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Demo request received");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message }: DemoRequest = await req.json();
    console.log("Processing demo request for:", email);

    const emailResponse = await resend.emails.send({
      from: "Glimps Demo <onboarding@resend.dev>",
      to: ["info@glimps.be"],
      replyTo: email,
      subject: `Nieuwe demo aanvraag van ${name} - ${company}`,
      html: `
        <h2>Nieuwe demo aanvraag</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bedrijf:</strong> ${company}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        ${message ? `<p><strong>Bericht:</strong> ${message}</p>` : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">Verzonden via Glimps demo aanvraag formulier</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-demo-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
