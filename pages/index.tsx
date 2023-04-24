import { NextPage } from "next";
import Head from "next/head";
import HomepageTemplate from "../components/templates/homepage";

const HomePage: NextPage = () => {
	return (
		<>
		<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
		</Head>
			<HomepageTemplate />
		</>
	);
};
export default HomePage;
