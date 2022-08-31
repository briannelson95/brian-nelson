import Navbar from "../components/Navbar";
import { allPages } from "../lib/queries";
import { client } from "../lib/sanity";
import BlockContent from '@sanity/block-content-to-react';

export default function Page({ data }) {
    const pageData = data.pageData;
    // console.log(pageData.body)

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: `../${nav[i].slug.current}`})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <section className="mx-9">
                <h1 className="text-2xl font-bold mb-3">{pageData.title}</h1>
                <hr className="w-1/6" />
                <div className="my-2">
                    {pageData.content
                        ? <BlockContent blocks={pageData.content} />
                        : <>No content yet</>
                    }
                </div>
            </section>
            
            
        </main>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query
    const data = await client.fetch(allPages, { slug })

    return {
        props: {
            data
        }
    }
}