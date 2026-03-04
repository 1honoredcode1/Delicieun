import Image from "next/image";
import "../../styles/menuItem.css";
import Link from "next/link";

const MenuItem = ({
  item,
}: {
  item: {
    id: number;
    name: string;
    preview: string;
    price: number;
    ingredients: string;
  };
}) => {
  return (
    <div className="col-lg-6 menu-item">
      <Image
        src={item.preview}
        className="menu-img"
        width={100}
        height={100}
        alt="food image"
      />
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name} </Link>
        <span>${item.price} </span>
      </div>
      <div className="menu-ingredients">{item.ingredients} </div>
    </div>
  );
};

export default MenuItem;
