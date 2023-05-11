import Head from "next/head";
import ContactUsTemplate from "../../components/templates/contactpage";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
	return (
		<div className="bg-#E7E6E6">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</Head>
         <ContactUsTemplate />
		</div>
	);
};

export default ContactPage;
