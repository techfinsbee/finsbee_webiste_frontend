export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Incoming payload:", body);

    const response = await fetch(
      "https://dashboard.finsbee.com/api/bre/website",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Finsbee API error:", error);

    return Response.json(
      { error: "Failed to call Finsbee API" },
      { status: 500 }
    );
  }
}