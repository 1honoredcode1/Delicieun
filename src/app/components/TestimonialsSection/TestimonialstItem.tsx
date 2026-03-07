import Image from "next/image";

import "../../styles/testimonialItem.css";

const TestimonialstItem = ({
  item,
}: {
  item: {
    id: number;
    content: string;
    avatar: string;
    client: string;
    position: string;
  };
}) => {
  return (
    <div className="testimonial-item">
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
        {item.content}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
      <Image
        width={200}
        height={100}
        src={item.avatar}
        alt="avatar img"
        className="testimonial-img"
      />
      <h3>{item.client} </h3>
      <h4>Ceo &amp; Founder</h4>
    </div>
  );
};

export default TestimonialstItem;
