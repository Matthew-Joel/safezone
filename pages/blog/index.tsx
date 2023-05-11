import { NextPage } from "next";
import Head from "next/head";
import BlogpageTemplate from "../../components/templates/blogpage";

const BlogPage: NextPage = () => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
            </Head>
            <BlogpageTemplate />
        </>
    );
};
export default BlogPage;