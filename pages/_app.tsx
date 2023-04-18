import { AppProps } from "next/app";
import "../public/styles/globals.css";
import Layout from "../components/ui/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
};

export default MyApp;
