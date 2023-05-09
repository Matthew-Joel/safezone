import { NextPage } from "next";
import Head from "next/head";
import ProductpageTemplate from "../../components/templates/productpage";

const ProductPage: NextPage = () => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
            </Head>
            <ProductpageTemplate />
        </>
    );
};
export default ProductPage;