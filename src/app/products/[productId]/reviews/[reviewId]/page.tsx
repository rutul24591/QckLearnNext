import React from 'react';

import { notFound } from 'next/navigation';

// const ReviewDetails = ({
// 	params,
// }: {
// 	params: { productId: string; reviewId: string };
// }) => {
// 	if (parseInt(params.reviewId) > 1000) {
// 		notFound();
// 	}
// 	return (
// 		<>
// 			<h1>
// 				Review {params.reviewId} for product {params.productId}
// 			</h1>
// 		</>
// 	);
// };

const ReviewDetails = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	// const productId = (await params).productId;
	// const reviewId = (await params).reviewId;

	const { productId, reviewId } = await params;

	if (parseInt(reviewId) > 1000) {
		notFound();
	}
	return (
		<>
			<h1>
				Review {reviewId} for product {productId}
			</h1>
		</>
	);
};

export default ReviewDetails;
