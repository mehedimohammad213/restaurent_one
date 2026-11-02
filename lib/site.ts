export const restaurant = {
  name: "foodpanda",
  shortName: "foodpanda",
  tagline: "Pizza, a cold drink, and a few frames in downtown Moweaqua.",
  address: "200 S Main St, Moweaqua, IL 62550, United States",
  street: "200 S Main St",
  city: "Moweaqua, IL 62550",
  phoneDisplay: "+1 217-768-3255",
  phoneHref: "tel:+12177683255",
  mapEmbed:
    "https://maps.google.com/maps?q=200%20S%20Main%20St%2C%20Moweaqua%2C%20IL%2062550&z=16&output=embed",
};

export type Hour = {
  day: string;
  label: string;
  openMin: number;
  closeMin: number;
};

export const hours: Hour[] = [
  { day: "Monday", label: "10:30 AM - 10:00 PM", openMin: 630, closeMin: 1320 },
  { day: "Tuesday", label: "10:30 AM - 10:00 PM", openMin: 630, closeMin: 1320 },
  { day: "Wednesday", label: "10:30 AM - 10:00 PM", openMin: 630, closeMin: 1320 },
  { day: "Thursday", label: "10:30 AM - 10:00 PM", openMin: 630, closeMin: 1320 },
  { day: "Friday", label: "10:30 AM - 12:00 AM", openMin: 630, closeMin: 1440 },
  { day: "Saturday", label: "10:30 AM - 12:00 AM", openMin: 630, closeMin: 1440 },
  { day: "Sunday", label: "10:30 AM - 10:00 PM", openMin: 630, closeMin: 1320 },
];

export function chicagoClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = read("weekday");
  const minutes = Number(read("hour")) * 60 + Number(read("minute"));
  const today = hours.find((row) => row.day === weekday);
  const open = Boolean(
    today && minutes >= today.openMin && minutes < today.closeMin,
  );

  return { weekday, open };
}

export const aboutParagraphs = [
  "Nestled in the heart of Moweaqua, Illinois, foodpanda at 200 S Main St offers a delightful blend of pizza perfection and casual pub vibes that make it a go-to spot for both locals and visitors. From the moment you walk in, the welcoming atmosphere immediately sets the tone for a relaxed dining experience. Whether you’re planning a quick takeout or a leisurely evening with table service, this restaurant caters seamlessly to every preference.",
  "The menu at foodpanda is a treat for anyone craving hearty, flavorful dishes. The BBQ Chicken Salad stands out as a fresh and satisfying option, combining tender chicken with a smoky barbecue dressing that perfectly balances sweet and savory notes. For meat lovers, the Meat Specialty pizza is a must-try, generously layered with flavorful toppings that showcase the kitchen’s attention to detail and dedication to quality ingredients. Every bite feels indulgent yet thoughtfully prepared, making it easy to see why regulars rave in their reviews.",
  "Accessibility and convenience are part of the experience here. The restaurant provides wheelchair accessible parking, ensuring that everyone can enjoy a hassle-free visit. For those late-night cravings, foodpanda remains open with late-night food options, so you can satisfy hunger pangs well after the usual dinner hours. In addition, dessert selections add a sweet finish to any meal, rounding out the menu with something for everyone.",
  "Takeout services are streamlined, making it simple to enjoy foodpanda’s signature dishes at home. Meanwhile, those who prefer to linger can enjoy the friendly ambiance and attentive staff that make table service feel personal and welcoming. The combination of casual dining, flavorful food, and thoughtful amenities positions this location as more than just a pizza spot — it’s a place where meals turn into experiences.",
  "Whether you’re stopping by for a quick bite, planning a fun night out with friends, or sampling new dishes from the menu, foodpanda consistently delivers satisfying flavors in a comfortable, inviting setting. Its blend of classic favorites, attentive service, and accessible facilities ensures that every visit leaves a positive impression, making it a standout destination in Moweaqua.",
];

export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Fried Pickle Spears", price: "$5.99" },
      { name: "Fried Mozzarella Sticks", price: "$5.99" },
      { name: "Spicy Fried Green Beans", price: "$5.85" },
      { name: "Breaded Mushrooms", price: "$5.79" },
      { name: "Fried Ravioli", price: "$5.85" },
      { name: "Hot Cheese Balls", price: "$5.95" },
      { name: "Ultimate Nachos", price: "$7.25" },
      { name: "Breadsticks - 5 piece", price: "$3.99" },
      { name: "Breadsticks - 10 piece", price: "$6.99" },
      { name: "Cheese Breadsticks - 5 piece", price: "$5.89" },
      { name: "Cheese Breadsticks - 10 piece", price: "$8.99" },
    ],
  },
  {
    id: "soups-salads",
    title: "Soups & Salads",
    items: [
      { name: "Side Garden Salad", price: "$2.99" },
      { name: "Family Garden Salad", price: "$5.99" },
      { name: "Chef Salad", price: "$5.99" },
      { name: "Grilled Chicken Salad", price: "$6.99" },
      { name: "Buffalo Chicken Salad", price: "$7.25" },
      { name: "BBQ Chicken Salad", price: "$7.25" },
      { name: "Bowl of Chili/Soup of the Day", price: "$3.49" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
      { name: "Italian Meatball", price: "$5.99" },
      { name: "Chicken Bacon Ranch", price: "$5.99" },
      { name: "Buffalo Chicken", price: "$5.99" },
      { name: "Chicken Parmesan", price: "$6.49" },
      { name: "Veggie", price: "$4.99" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      { name: "Cheese", price: "$7.43" },
      { name: "Super Special", price: "$11.97" },
      { name: "Special Delight", price: "$10.02" },
      { name: "Meat Specialty", price: "$10.02" },
      { name: "1 Topping", price: "$8.34" },
      { name: "2 Toppings", price: "$8.79" },
      { name: "3 Toppings", price: "$9.30" },
      { name: "4 Toppings", price: "$9.69" },
      { name: "5 Toppings", price: "$10.02" },
      { name: "6 Toppings", price: "$10.46" },
      { name: "7 Toppings", price: "$10.59" },
      { name: "8 Toppings", price: "$10.72" },
      { name: "Extra Cheese", price: "$2.35" },
      { name: "Extra Sauce", price: "$1.25" },
      { name: "Anchovies", price: "$1.70" },
      { name: "Chicken", price: "$1.95" },
      { name: "Double Crust", price: "$1.95" },
      { name: "Thick Crust", price: "$1.50" },
      {
        name: "Super Special Delight",
        note: "Special Delight plus black olives, green olives, ham, bacon, and cheese.",
      },
      { name: '14" Buffalo Chicken Pizza', price: "$15.99" },
      { name: '14" BBQ Chicken Pizza', price: "$15.99" },
    ],
  },
  {
    id: "calzones",
    title: "Calzones",
    items: [
      { name: "Half Order", price: "$4.99" },
      { name: "Whole Order", price: "$7.44" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        name: "Burgers",
        price: "$3.99",
        note: "Free toppings: ketchup, mustard, pickle, onion, mayo.",
      },
    ],
  },
  {
    id: "wings",
    title: "Wings & More",
    items: [
      {
        name: "Wings",
        price: "$5.25",
        note: "Sauces: extra hot, hot, BBQ, sweet and spicy, garlic parmesan, spicy garlic, and spicy BBQ. Served with ranch or bleu cheese.",
      },
      { name: "Breaded Chicken Tenders (3)", price: "$4.99" },
      { name: "Mini Corn Dogs - 12", price: "$5.25" },
      { name: "Kids Mini Corn Dogs w/ Fries", price: "$3.99" },
      { name: "French Fries", price: "$1.89" },
      { name: "Cheese Fries", price: "$2.89" },
    ],
  },
  {
    id: "drinks",
    title: "Soft Drinks",
    items: [{ name: "Pepsi Products", price: "$2.09" }],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    items: [
      { name: "Chocolate, Vanilla, Strawberry", price: "$2.99" },
      {
        name: "Ice Cream (Cup or Cone)",
        price: "$1.75",
        note: "Chocolate, vanilla, or twist.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Cookie Sundae", price: "$3.99" },
      { name: "Cinnamon Breadsticks - 5", price: "$3.99" },
      { name: "Cinnamon Breadsticks - 10", price: "$6.99" },
    ],
  },
  {
    id: "bowling",
    title: "Bowling",
    items: [
      {
        name: "Early Bird",
        price: "$2.00",
        note: "Until 4pm. Price is per game.",
      },
      {
        name: "Prime Time",
        price: "$4.00",
        note: "4pm until close. Price is per game.",
      },
      {
        name: "Shoe Rental",
        price: "$2.50",
        note: "Kids under 5 get 50% off all bowling prices.",
      },
      {
        name: "Moonlight Bowling",
        price: "$15.00",
        note: "Friday and Saturday, 9pm to midnight.",
      },
    ],
  },
];

export const reviews = [
  {
    quote:
      "You're walking into a pizza pub and bowling alley. So no misconceptions here. You're getting a small town hole in the wall. That said, we had great service, a tasty sandwich / salad and a midwest throwback vibe.",
    name: "Andy Miller",
  },
  {
    quote:
      "We went here for work Christmas Party for food and bowling!! So much fun, atmosphere was good, waitress was so nice n on top of things for them being absolutely busy that evening!! Food and pizza was amazing... i actually forgot how good pizza was will def be remembering n going back for sure!!",
    name: "Jami Ross",
  },
  {
    quote:
      "I have had foodpanda food several times. But last night 10/4/24 I had the best cheeseburger. I had a single cheeseburger with grilled onions, lettuce and tomato with mayonnaise. The bun was soft and the burger was awesome. The next day I felt like ordering it again, it was that good. If you ever go to foodpanda you gotta try their cheeseburgers with grilled onions. Your mouth will definitely be happy with how it tastes.",
    name: "Cindy McDonald",
  },
];

export const photos = [
  { src: "/images/hero.jpg", alt: "Specialty pizza from foodpanda" },
  { src: "/images/gallery-4.jpg", alt: "Loaded pizza with ham and pepperoni" },
  { src: "/images/gallery-3.jpg", alt: "Chicken salad in a red bowl" },
  { src: "/images/gallery-2.jpg", alt: "BBQ chicken salad on a pub table" },
  { src: "/images/gallery-1.jpg", alt: "Bowling lanes at foodpanda" },
  { src: "/images/logo.jpg", alt: "Dining tables beside the bowling lanes" },
];

export const nav = {
  left: [
    { href: "/#info", label: "General Info", id: "info" },
    { href: "/menu", label: "Menu", id: "menu" },
  ],
  right: [
    { href: "/#reviews", label: "Reviews", id: "reviews" },
    { href: "/#photos", label: "Photos", id: "photos" },
    { href: "/#location", label: "Location & Contact", id: "location" },
  ],
};
