import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
// Removed npm Resend import; using direct REST API call instead
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

    // Send email via Resend REST API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Glimps Demo <onboarding@resend.dev>",
        to: ["info@glimps.be"],
        reply_to: email,
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
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      throw new Error(`Resend API error: ${res.status}`);
    }

    const emailResponse = await res.json();

    console.log("Email sent successfully:", emailResponse);

    // Send webhook notification
    try {
      const webhookRes = await fetch("https://hook.eu2.make.com/en55sim9m2dl0w91tg1qdwgxrwl9ifws", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          message: message || "",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookRes.ok) {
        console.error("Webhook error:", webhookRes.status, await webhookRes.text());
      } else {
        console.log("Webhook sent successfully");
      }
    } catch (webhookError: any) {
      console.error("Error sending webhook:", webhookError);
      // Don't fail the whole request if webhook fails
    }

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
