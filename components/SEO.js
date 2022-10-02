import Head from "next/head";

const SEO = ({ title, description, keywords, image }) => {
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="https://www.briannelson.dev" />
                <meta property="og:image" content={image} />
            </Head>
        </>
    );
}
 
export default SEO;