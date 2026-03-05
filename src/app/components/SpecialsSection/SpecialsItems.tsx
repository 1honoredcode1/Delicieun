import Image from "next/image";
import "../../styles/specialsItems.css";

const SpecialsItems = ({
  item,
}: {
  item: {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    content: string;
    active: boolean;
  };
}) => {
  return (
    <div
      className={`tab-pane ${item.active ? "active show" : ""}`}
      id={`tab-${item.id.toString()}`}
    >
      <div className="row">
        <div className="col-lg-8 details order-2 order-lg-1">
          <h3>{item.title} </h3>
          <p className="fst-italic">{item.subtitle} </p>
          <p>{item.content} </p>
        </div>
        <div className="col-lg-4 text-center order-1 order-lg-2">
          <Image width={200} height={200} src={item.image} alt="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SpecialsItems;
