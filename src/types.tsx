interface Item {
	name: string;
	price: number;
}

interface FoodItem extends Item {
	warmed: boolean;
}

interface DrinkItem extends Item {
	iced: boolean;
	size: "Short" | "Tall" | "Grande" | "Venti" | "Trenta";
	priceBySize: { [size: string]: number }; // dictionary where key is size and value is price
	shots: number;
	syrups: { [type: string]: number }; // dictionary where key is syrup type and value is number of pumps
	milk:
		| "2%"
		| "Skim"
		| "Whole"
		| "Half & Half"
		| "Breve"
		| "Almond"
		| "Oat"
		| "Soy"
		| "Coconut"
		| "No Milk";
}

export type { Item, FoodItem, DrinkItem };
