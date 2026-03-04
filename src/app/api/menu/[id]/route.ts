import { menu } from "@/app/data/data";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id: rawId } = await context.params;

  const id = Number(rawId);

  if (Number.isNaN(id)) {
    return Response.json({ message: "Invalid ID" }, { status: 400 });
  }

  const food = menu.find((item) => item.id === id);

  if (!food) {
    return Response.json({ message: "Menu item not found" }, { status: 404 });
  }

  return Response.json(food);
}
