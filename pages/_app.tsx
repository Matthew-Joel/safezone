import { AppProps } from "next/app";
import "../public/styles/globals.css";
import "../public/styles/gradient.scss";
import Layout from "../components/ui/layout";
import "animate.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
