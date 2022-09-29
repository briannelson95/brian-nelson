import Navbar from "../components/Navbar";
import { allPages } from "../lib/queries";
import { client } from "../lib/sanity";
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/future/image';
import { urlFor } from '../lib/modules';

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