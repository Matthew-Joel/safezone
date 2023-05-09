import { AppProps } from "next/app";
import "../public/styles/globals.css";
import "../public/styles/nprogress.css";
import "../public/styles/gradient.scss";
import Layout from "../components/ui/layout";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = (url: string) => {
			setLoading(true);
			NProgress.start();
		};
		const handleStop = () => {
			setLoading(false);
			NProgress.done();
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);
	}, [router]);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
