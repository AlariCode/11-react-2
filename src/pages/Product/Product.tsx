import { useParams } from 'react-router-dom';

export function Product() {
	const { id } = useParams();

	return <>
		Product - {id}
	</>;
}