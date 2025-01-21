import React from 'react';
import { Metadata } from 'next';

/** Old 14.*.* next implementation */
// const ProductDetails = ({ params }: { params: { productId: string } }) => {
// 	return (
// 		<>
// 			<h1>Details about product {params.productId}</h1>
// 		</>
// 	);
// };

type Props = {
	params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const id = (await params).productId;
	return {
		title: `Product ${id}`,
	};
};

const ProductDetails = async ({ params }: Props) => {
	const productId = (await params).productId;

	return (
		<>
			<h1>Product Details {productId}</h1>
		</>
	);
};

export default ProductDetails;
