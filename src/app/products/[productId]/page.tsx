import React from 'react';

/** Old 14.*.* next implementation */
// const ProductDetails = ({ params }: { params: { productId: string } }) => {
// 	return (
// 		<>
// 			<h1>Details about product {params.productId}</h1>
// 		</>
// 	);
// };

const ProductDetails = async ({
	params,
}: {
	params: Promise<{ productId: string }>;
}) => {
	const productId = (await params).productId;

	return (
		<>
			<h1>Product Details {productId}</h1>
		</>
	);
};

export default ProductDetails;
