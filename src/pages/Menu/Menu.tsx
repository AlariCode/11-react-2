import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios from 'axios';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);

	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return <>
		<div className={styles['head']}>
			<Headling>Меню</Headling>
			<Search placeholder='Введите блюдо или состав' />
		</div>
		<div>
			{products.map(p => (
				<ProductCard
					key={p.id}
					id={p.id}
					name={p.name}
					description={p.ingredients.join(', ')}
					rating={p.rating}
					price={p.price}
					image={p.image}
				/>
			))}
		</div>
	</>;
}