import { useState } from "react";
import { Item } from "./types";

import MenuItem from "./components/MenuItem";
import menu from "./menuData";

function App() {
	const [itemsOrdered, setItemsOrdered] = useState<Item[]>([]);
	const [categorySelected, setCategorySelected] = useState("Beverages");
	const [subcategorySelected, setSubcategorySelected] = useState("Brewed");
	const [currentItem, setCurrentItem] = useState<Item | null>(null);
	const [editItemIndex, setEditItemIndex] = useState<number>(-1);

	let menuItems = menu[categorySelected][subcategorySelected];
	let subtotal = itemsOrdered.reduce((acc, item) => acc + item.price, 0);

	return (
		<div className="container-fluid vh-100 d-flex flex-column">
			<div className="row flex-grow-1 no-gutters">
				{/* Left Side */}
				<div className="col-4 d-flex flex-column">
					{/* Settings and Utils */}
					<div className="row bg-primary">Settings and Edit Mode</div>

					<div className="row flex-grow-1 d-flex flex-column">
						{/* Receipt Area */}
						<div className="col d-flex flex-column">
							<div className="row flex-grow-1 bg-secondary">
								{/* Items Ordered So Far */}

								{itemsOrdered.map((item, index) => (
									<div
										key={index}
										className="d-flex justify-content-between"
									>
										<div
											onClick={
												currentItem === null
													? () => {
															setCurrentItem(
																item
															);
															setEditItemIndex(
																index
															);
													  }
													: () => {}
											}
										>
											<span>{item.name}</span>
											<span>{item.price}</span>
										</div>

										<button
											onClick={() => {
												const updatedItems = [
													...itemsOrdered,
												];
												updatedItems.splice(index, 1);
												setItemsOrdered(updatedItems);
												if (editItemIndex === index) {
													setEditItemIndex(-1);
													setCurrentItem(null);
												}
											}}
										>
											Void
										</button>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="row bg-warning">
						{/* Subtotal, Tax, & Total */}
						<div className="col">
							<div className="row">
								Subtotal: {subtotal.toFixed(2)}
							</div>
							<div className="row">
								Tax: {(subtotal * 0.1).toFixed(2)}
							</div>
							<div className="row">
								Total: {(subtotal * 1.1).toFixed(2)}
							</div>
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="col-8 d-flex flex-column">
					<div className="row bg-info">
						{/* Categories Header */}
						{Object.keys(menu).map((category, index) => (
							<div className="col">
								<button
									key={index}
									onClick={() => {
										setCategorySelected(category);
										setSubcategorySelected(
											Object.keys(menu[category])[0]
										);
									}}
									className={
										category === categorySelected
											? "btn btn-primary"
											: "btn btn-secondary"
									}
								>
									{category}
								</button>
							</div>
						))}
					</div>
					<div className="row bg-success">
						{/* Subcategories Header */}
						{Object.keys(menu[categorySelected]).map(
							(subcategory, index) => (
								<div className="col">
									<button
										key={index}
										onClick={() =>
											setSubcategorySelected(subcategory)
										}
										className={
											subcategory === subcategorySelected
												? "btn btn-primary"
												: "btn btn-secondary"
										}
									>
										{subcategory}
									</button>
								</div>
							)
						)}
					</div>
					<div className="row flex-grow-1 bg-light">
						<div>
							{/* menuItems */}
							{menuItems.map((item, index) => (
								<MenuItem
									key={index}
									item={item}
									onClick={(item: Item) =>
										setCurrentItem(item)
									}
								/>
							))}
						</div>
					</div>
					{/* Customization Menu */}
					<div className="row bg-success">
						{currentItem && (
							<button
								onClick={() => {
									if (editItemIndex !== -1) {
										const updatedItems = [...itemsOrdered];
										updatedItems[editItemIndex] =
											currentItem;
										setItemsOrdered(updatedItems);
										setEditItemIndex(-1);
									} else {
										setItemsOrdered((itemsOrdered) => [
											...itemsOrdered,
											currentItem as Item,
										]);
									}
									setCurrentItem(null);
								}}
							>
								Done
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
