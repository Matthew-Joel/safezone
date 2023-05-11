import { NextPage } from "next";
import AboutPageTemplate from "../../components/templates/aboutpage";
import Head from "next/head";


const AboutPage: NextPage = () => {
	return (
		<div className="bg-#E7E6E6">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</Head>

			<AboutPageTemplate />
			
		</div>
	);
};

export default AboutPage;
