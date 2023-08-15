import { Link } from 'react-router-dom';

export function Menu() {
	return <>
		<div>
			<Link to='/'>Меню</Link>
			<Link to='/cart'>Корзина</Link>
		</div>
		Menu</>;
}