// @ts-expect-error - CSS side effect import
import "../../styles/heroBtn.css";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  // eslint-disable-next-line
  const handleScrollTo = (section: string) => {};

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes("book") ? "ms-4" : undefined}`}
    >
      {name}{" "}
    </a>
  );
}
