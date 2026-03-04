type NavLink = {
  id: string;
  name: string;
  target: string;
  active?: boolean;
};

export const menu = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    price: 18,
    preview: "/assets/menu/truffle.jpg",
    category: "starters",
    ingredients: "Arborio rice, wild mushrooms, parmesan, white truffle oil",
    description:
      "Creamy risotto infused with earthy wild mushrooms and finished with aromatic white truffle oil.",
  },
  {
    id: 2,
    name: "Grilled Atlantic Salmon",
    preview: "/assets/menu/salmon.jpg",
    category: "starters",
    price: 24,
    ingredients: "Fresh salmon, lemon butter, asparagus, sea salt",
    description:
      "Perfectly grilled Atlantic salmon served with charred asparagus and a silky lemon butter sauce.",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    preview: "/assets/menu/pizza.jpg",
    category: "speciality",
    price: 14,
    ingredients: "San Marzano tomatoes, mozzarella, basil, olive oil",
    description:
      "Classic Italian pizza with rich tomato sauce, fresh mozzarella, and fragrant basil.",
  },
  {
    id: 4,
    name: "Beef Tenderloin Steak",
    preview: "/assets/menu/beef.jpg",
    category: "starters",
    price: 32,
    ingredients: "Prime beef, garlic butter, rosemary, mashed potatoes",
    description:
      "Juicy prime beef tenderloin grilled to perfection and topped with herb garlic butter.",
  },
  {
    id: 5,
    name: "Seafood Linguine",
    preview: "/assets/menu/seafood.jpg",
    category: "starters",
    price: 26,
    ingredients: "Linguine pasta, shrimp, mussels, clams, white wine sauce",
    description:
      "Fresh seafood tossed in delicate white wine sauce with perfectly cooked linguine.",
  },
  {
    id: 6,
    name: "Chicken Caesar Salad",
    preview: "/assets/menu/salad.jpg",
    category: "starters",
    price: 16,
    ingredients: "Grilled chicken, romaine lettuce, parmesan, croutons",
    description:
      "Crisp romaine lettuce with grilled chicken and creamy homemade Caesar dressing.",
  },
  {
    id: 7,
    name: "Lobster Bisque",
    preview: "/assets/menu/lobster.jpg",
    category: "speciality",
    price: 19,
    ingredients: "Lobster stock, cream, white wine, fresh herbs",
    description:
      "Rich and velvety lobster bisque with delicate herbs and a touch of white wine.",
  },
  {
    id: 8,
    name: "Vegetarian Buddha Bowl",
    preview: "/assets/menu/vegetarian.jpg",
    category: "starters",
    price: 17,
    ingredients: "Quinoa, roasted vegetables, avocado, tahini dressing",
    description:
      "Colorful bowl of roasted vegetables, creamy avocado, and nutty tahini over fluffy quinoa.",
  },
  {
    id: 9,
    name: "Classic Cheeseburger",
    preview: "/assets/menu/burger.jpg",
    category: "speciality",
    price: 15,
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, brioche bun",
    description:
      "Juicy grilled beef patty layered with melted cheddar inside a toasted brioche bun.",
  },
  {
    id: 10,
    name: "Chocolate Lava Cake",
    preview: "/assets/menu/cake.jpg",
    category: "dessert",
    price: 12,
    ingredients: "Dark chocolate, butter, eggs, vanilla ice cream",
    description:
      "Warm chocolate cake with a molten center, served with creamy vanilla ice cream.",
  },
];

export const filters = [
  { id: 1, name: "All", category: "all", active: "true" },
  { id: 2, name: "Starters", category: "starters", active: "false" },
  { id: 3, name: "Speciality", category: "speciality", active: "false" },
  { id: 4, name: "Dessert", category: "dessert", active: "false" },
];
