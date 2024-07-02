const categories = {
  starters: [
    {
      name: "Caesar Salad",
      price: 8.99,
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese"],
    },
    {
      name: "Bruschetta",
      price: 6.99,
      ingredients: ["Toasted bread", "Tomatoes", "Garlic", "Basil"],
    },
  ],
  mainCourse: [
    {
      name: "Grilled Salmon",
      price: 18.99,
      ingredients: ["Salmon", "Lemon", "Garlic", "Olive oil"],
    },
    {
      name: "Chicken Parmesan",
      price: 15.99,
      ingredients: ["Chicken breast", "Tomato sauce", "Mozzarella cheese"],
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      price: 7.99,
      ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Cocoa powder"],
    },
    {
      name: "Cheesecake",
      price: 6.99,
      ingredients: ["Cream cheese", "Graham cracker crust", "Strawberries"],
    },
  ],
};
function getMenuItemsByCategory(menu, category) {
  if (menu.hasOwnProperty(category)) {
    return menu[category];
  }
  return [];
}
