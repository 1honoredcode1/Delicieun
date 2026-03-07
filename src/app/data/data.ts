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

export const specials = [
  {
    id: 1,
    image: "/assets/menu/truffle.jpg",
    title: "Black Truffle Mushroom Risotto",
    subtitle:
      "Creamy Arborio rice slowly cooked with wild mushrooms and finished with shaved black truffle.",
    content:
      "Our signature risotto is prepared with imported Italian Arborio rice, sautéed forest mushrooms, and aged parmesan. Finished with aromatic black truffle and a touch of white wine, this dish delivers deep earthy flavors and a luxurious creamy texture.",
    active: true,
  },
  {
    id: 2,
    image: "/assets/menu/salmon.jpg",
    title: "Grilled Atlantic Salmon",
    subtitle:
      "Fresh Atlantic salmon served with lemon butter sauce and seasonal vegetables.",
    content:
      "Perfectly grilled salmon fillet seasoned with sea salt and fresh herbs. Served with roasted asparagus, baby potatoes, and a silky lemon butter sauce that balances richness with freshness.",
    active: false,
  },
  {
    id: 3,
    image: "/assets/menu/beef.jpg",
    title: "Prime Beef Tenderloin",
    subtitle: "Juicy grilled tenderloin steak topped with garlic herb butter.",
    content:
      "A premium cut of beef tenderloin grilled to your preferred doneness. Served with creamy mashed potatoes, roasted vegetables, and finished with melted garlic herb butter for a rich and satisfying flavor.",
    active: false,
  },
  {
    id: 4,
    image: "/assets/menu/seafood.jpg",
    title: "Seafood Linguine",
    subtitle:
      "Classic Italian pasta with shrimp, mussels, and clams in white wine sauce.",
    content:
      "Fresh linguine tossed in a delicate white wine and garlic sauce with shrimp, mussels, and clams. Finished with parsley and olive oil for a light yet flavorful seafood pasta.",
    active: false,
  },
  {
    id: 5,
    image: "/assets/menu/cake.jpg",
    title: "Chocolate Lava Cake",
    subtitle:
      "Warm chocolate cake with a molten center served with vanilla ice cream.",
    content:
      "A decadent dessert featuring rich dark chocolate cake with a flowing molten center. Served warm alongside creamy vanilla ice cream and a dusting of powdered sugar.",
    active: false,
  },
];

export const specialsFilters = [
  {
    id: 1,
    name: "Truffle Risotto",
    active: true,
  },
  {
    id: 2,
    name: "Grilled Salmon",
    active: false,
  },
  {
    id: 3,
    name: "Beef Tenderloin",
    active: false,
  },
  {
    id: 4,
    name: "Seafood Linguine",
    active: false,
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    active: false,
  },
];

export const events = [
  {
    id: 1,
    image: "/assets/events/birthday.jpg",
    title: "Birthday Celebrations",
    price: 189,
    content:
      "Celebrate your birthday with an unforgettable dining experience. Our team prepares a personalized menu, festive table setup, and a complimentary dessert for the guest of honor.",
    details: [
      "Private table or room decoration with candles and flowers.",
      "Custom birthday cake prepared by our pastry chef.",
      "Personalized multi-course dinner menu for your group.",
    ],
    summary:
      "Perfect for intimate or larger birthday celebrations with friends and family. Enjoy great food, warm service, and a memorable evening.",
  },
  {
    id: 2,
    image: "/assets/events/private.jpg",
    title: "Private Dining Experience",
    price: 290,
    content:
      "Host a private dinner in our exclusive dining room. Ideal for anniversaries, small corporate gatherings, or special evenings where privacy and exceptional cuisine matter.",
    details: [
      "Dedicated private dining space for up to 20 guests.",
      "Chef-curated seasonal tasting menu available.",
      "Dedicated service staff throughout the evening.",
    ],
    summary:
      "Enjoy an elegant private dining experience designed for meaningful gatherings and unforgettable meals.",
  },
  {
    id: 3,
    image: "/assets/events/celebration.jpg",
    title: "Custom Event & Celebration",
    price: 99,
    content:
      "Planning something special? From engagement parties to family reunions, we create tailored dining experiences to match your event.",
    details: [
      "Flexible menu options tailored to your event.",
      "Custom table arrangements and decorations.",
      "Audio and presentation setup available if needed.",
    ],
    summary:
      "Our team will work with you to design a unique celebration that matches your vision and makes your event truly special.",
  },
];

export const testimonials = [
  {
    id: 1,
    content:
      "One of the best dining experiences I've had in a long time. The truffle risotto was incredible and the service was attentive without being intrusive. We will definitely be coming back.",
    avatar: "/assets/testimonials/testimonials-1.jpg",
    client: "John Larsen",
    position: "Food Blogger",
  },
  {
    id: 2,
    content:
      "We celebrated our anniversary here and everything was perfect. The atmosphere, the wine selection, and the seafood linguine were all outstanding. Highly recommend for special occasions.",
    avatar: "/assets/testimonials/testimonials-2.jpg",
    client: "Emma Sørensen",
    position: "Architect",
  },
  {
    id: 3,
    content:
      "Amazing food and beautiful presentation. The staff was extremely welcoming and helped us choose the perfect dishes. The chocolate lava cake alone is worth the visit.",
    avatar: "/assets/testimonials/testimonials-3.jpg",
    client: "Kevin Jensen",
    position: "Restaurant Owner",
  },
  {
    id: 4,
    content:
      "The private dining experience was exceptional. Our group had a fantastic evening with a customized tasting menu. The chef even came out to explain the dishes.",
    avatar: "/assets/testimonials/testimonials-4.jpg",
    client: "Lucas Berg",
    position: "Business Consultant",
  },
  {
    id: 5,
    content:
      "A truly premium restaurant experience. From the warm welcome to the final dessert, everything was thoughtfully prepared. This place has quickly become one of my favorites.",
    avatar: "/assets/testimonials/testimonials-5.jpg",
    client: "Mathias Pedersen",
    position: "Entrepreneur",
  },
];

export const gallery = [
  {
    id: 1,
    image: "/assets/gallery/gallery-1.jpg",
  },
  {
    id: 2,
    image: "/assets/gallery/gallery-2.jpg",
  },
  {
    id: 3,
    image: "/assets/gallery/gallery-3.jpg",
  },
  {
    id: 4,
    image: "/assets/gallery/gallery-4.jpg",
  },
  {
    id: 5,
    image: "/assets/gallery/gallery-5.jpg",
  },
  {
    id: 6,
    image: "/assets/gallery/gallery-6.jpg",
  },
  {
    id: 7,
    image: "/assets/gallery/gallery-7.jpg",
  },
  {
    id: 8,
    image: "/assets/gallery/gallery-8.jpg",
  },
];

export const bookings = [
  {
    id: 1,
    details: {
      name: "Example Name",
      email: "info@example.com",
      phone: "12345678",
      date: "2026-02-06",
      time: "11:30",
      people: 3,
      message: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur`,
    },
  },
];
