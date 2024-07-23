import { Item } from "./types";

const menu: { [key: string]: { [key: string]: Item[] } } = {
    Beverages: {
        Brewed: [
            { name: "Dark Roast Drip Coffee", price: 2.49 },
            { name: "Blonde Drip Coffee", price: 2.49 },
            { name: "Earl Gray Tea", price: 2.99 },
        ],
        Blended: [
            { name: "Java Chip Frappucino", price: 4.99 },
            { name: "Vanilla Bean Frappucino", price: 4.99 },
            { name: "Blended Strawberry Lemonade", price: 3.99 },
        ],
        Espresso: [
            { name: "Latte", price: 3.49 },
            { name: "Flat White", price: 3.99 },
            { name: "Shaken Espresso", price: 3.99 },
            { name: "Caramel Macchiato", price: 4.49 },
        ],
        Seasonal: [{ name: "Peppermint Mocha", price: 4.99 }],
    },
    Food: {
        Breakfast: [
            { name: "Impossible Sausage and Cheese", price: 5.99 },
            { name: "Turkey Bacon", price: 4.99 },
            { name: "Egg Bites", price: 3.99 },
        ],
        Packaged: [
            { name: "Black Bean Salad", price: 6.99 },
            { name: "Egg and Cheese Box", price: 5.99 },
        ],
        Pastries: [
            { name: "Croissant", price: 2.99 },
            { name: "Blueberry Muffin", price: 2.49 },
            { name: "Cinnamon Coffee Cake", price: 5.99 },
        ],
    },
    "Misc.": {
        Beans: [
            { name: "Dark Roast 16oz", price: 12.99 },
            { name: "Blonde Roast", price: 12.99 },
            { name: "Espresso", price: 14.99 },
        ],
        Merchandise: [
            { name: "Coffee Mug", price: 9.99 },
            { name: "Tumbler", price: 14.99 },
            { name: "Reusable Straw", price: 1.99 },
        ],
    },
};

export default menu;
