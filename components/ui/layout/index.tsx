import React from "react";
import Navbar from "./nav";
import Footer from "./footer";

const Layout = ({ children }: any) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
