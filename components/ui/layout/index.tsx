import React from "react";
import Navbar from "./nav";
import Footer from "./footer";

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
