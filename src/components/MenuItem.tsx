import { Item } from "../types";

interface Props {
	item: Item;
	onClick: (item: Item) => void;
}

function MenuItem({ item, onClick }: Props) {
	return <button onClick={() => onClick(item)}>{item.name}</button>;
}

export default MenuItem;
