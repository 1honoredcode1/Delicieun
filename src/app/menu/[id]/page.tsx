import Breadcrumb from "@/app/components/MenuSection/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import { menu } from "@/app/data/data";

export default async function MenuSingle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);

  if (Number.isNaN(numericId)) notFound();

  const food = menu.find((item) => item.id === numericId);
  if (!food) notFound();

  const src = food.preview.startsWith("/") ? food.preview : `/${food.preview}`;

  return (
    <main id="main">
      <Breadcrumb page="Menu" />
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={src}
                alt={food.name}
                width={500}
                height={500}
                className="img-fluid mt-2"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="mt-3">{food.name}</h2>
              <h4 className="mt-2">
                <i>{food.ingredients}</i>
              </h4>
              <p className="mt-5">{food.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
