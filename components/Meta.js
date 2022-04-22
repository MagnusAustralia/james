import Head from "next/head";
import { useState, useEffect } from "react";

const Meta = ({ title, keywords, description, favicon }) => {
	return (
		<Head>
			<link rel="icon" href={favicon} type="image/x-icon" />
			<meta name="viewport" content="width=device-width initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "James",
	keywords: "idk",
	description: "Ashish",
	favicon: "/favicon.ico",
};

export default Meta;
