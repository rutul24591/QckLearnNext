import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		absolute: 'Blog', // This will override the template in root layout for title.
	},
};

const Blog = () => {
	return <h1>My Blog</h1>;
};

export default Blog;
