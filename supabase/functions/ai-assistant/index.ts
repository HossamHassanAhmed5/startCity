import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AIRequest {
  action: "autocomplete" | "recommend" | "chat";
  fieldName?: string;
  fieldValue?: string;
  formData?: Record<string, string>;
  message?: string;
  conversationHistory?: Array<{ role: string; content: string }>;
}

async function generateAutocompletion(
  fieldName: string,
  fieldValue: string,
  formData: Record<string, string>
): Promise<string> {
  const context = Object.entries(formData)
    .filter(([key]) => key !== fieldName)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const prompt = `You are SMSM, an AI entrepreneur assistant. Based on the following startup information, complete the text for the "${fieldName}" field.

Current form data:
${context}

Current incomplete text: "${fieldValue}"

Provide only the completion text (not the full text), making it professional and startup-focused. Keep it concise.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Deno.env.get("ANTHROPIC_API_KEY") || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 150,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate completion");
    }

    const data = await response.json();
    return data.content[0]?.text || "";
  } catch (error) {
    console.error("Error generating completion:", error);
    return "";
  }
}

async function generateRecommendation(
  fieldName: string,
  formData: Record<string, string>
): Promise<{ recommendation: string; reasoning: string }> {
  const context = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const prompt = `You are SMSM, an AI entrepreneur assistant. Based on this startup information, recommend the best option for the "${fieldName}" field.

Startup Information:
${context}

Provide a JSON response with:
{
  "recommendation": "the recommended value",
  "reasoning": "brief explanation why this is a good fit (max 100 words)"
}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Deno.env.get("ANTHROPIC_API_KEY") || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 300,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate recommendation");
    }

    const data = await response.json();
    const content = data.content[0]?.text || "{}";
    return JSON.parse(content);
  } catch (error) {
    console.error("Error generating recommendation:", error);
    return {
      recommendation: "",
      reasoning: "Unable to generate recommendation at this time",
    };
  }
}

async function chat(
  message: string,
  formData: Record<string, string>,
  conversationHistory: Array<{ role: string; content: string }>
): Promise<string> {
  const context = Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const systemPrompt = `You are SMSM, an AI entrepreneur assistant and co-founder. You help startup builders develop their ideas, validate concepts, and build their business. Be encouraging, insightful, and practical. Reference the startup information provided when relevant.

Current Startup Information:
${context}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Deno.env.get("ANTHROPIC_API_KEY") || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 500,
        system: systemPrompt,
        messages: [
          ...conversationHistory,
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate chat response");
    }

    const data = await response.json();
    return data.content[0]?.text || "I'm having trouble responding right now.";
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "I'm having trouble responding right now. Please try again.";
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: AIRequest = await req.json();

    let result: any;

    switch (body.action) {
      case "autocomplete":
        result = await generateAutocompletion(
          body.fieldName || "",
          body.fieldValue || "",
          body.formData || {}
        );
        break;

      case "recommend":
        result = await generateRecommendation(
          body.fieldName || "",
          body.formData || {}
        );
        break;

      case "chat":
        result = await chat(
          body.message || "",
          body.formData || {},
          body.conversationHistory || []
        );
        break;

      default:
        throw new Error("Unknown action");
    }

    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
