export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rank: body.rank,
      category: body.category,
    }),
  });

  const data = await response.blob();

  return new Response(data, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  });
}
