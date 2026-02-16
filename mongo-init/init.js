db = db.getSiblingDB("restaurant-db");

db.menuitems.insertMany([
  {
    name: "Biryani",
    image: "biryani.jpg",
    description: "Aromatic basmati rice cooked with spices",
    price: 250
  },
  {
    name: "Butter Chicken",
    image: "butter_chicken.jpg",
    description: "Creamy tomato chicken curry",
    price: 300
  },
  {
    name: "Dosa",
    image: "dosa.jpg",
    description: "Crispy South Indian pancake",
    price: 120
  },
  {
    name: "Indian Thali",
    image: "indian_thali.jpg",
    description: "Full Indian meal platter",
    price: 280
  },
  {
    name: "Momos",
    image: "momos.jpg",
    description: "Steamed dumplings",
    price: 150
  },
  {
    name: "Paneer Tikka",
    image: "paneer_tikka.jpg",
    description: "Grilled paneer cubes",
    price: 220
  }
]);
