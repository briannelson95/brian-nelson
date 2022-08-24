import Navbar from "../components/Navbar";
import { portfolioPage } from "../lib/queries"
import { client } from "../lib/sanity";
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

export default function Page({ data }) {
    const pageData = data.pageData[0];
    // console.log(data.portfolio[0].allVideos)
    const allVideos = data.portfolio[0].allVideos;

    const id = getYouTubeId(allVideos[0].url)
    console.log(id)

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <h1 className="text-2xl font-bold">{pageData.title}</h1>
            <YouTube videoId={id} width={10} />
        </main>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(portfolioPage)

    return {
        props: {
            data
        }
    }
}