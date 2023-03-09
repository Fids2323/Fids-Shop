import React from "react";
import api from "../api";

const Products = () => {
	const products = api.products.fetchAll();
	return (
		<>
			<div>Products:</div>
			<ul>
				{products.map((product) => (
					<li>{product.productName}</li>
				))}
			</ul>
		</>
	);
};

export default Products;
