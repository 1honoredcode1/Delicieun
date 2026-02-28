// @ts-expect-error - CSS side effect import
import "../../styles/appButton.css";

const AppButton = ({ name }: { name: string }) => {
  const handleScrollTo = (section: string) => {};

  return (
    <a
      className="app-btn scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo("book-a-table")}
    >
      {name}
    </a>
  );
};

export default AppButton;
