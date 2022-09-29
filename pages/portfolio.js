import Navbar from "../components/Navbar";
import { portfolioPage } from "../lib/queries"
import { client } from "../lib/sanity";
import getYouTubeId from 'get-youtube-id';
import Video from "../components/Video";

export default function Page({ data }) {
    const pageData = data.pageData[0];
    // console.log(data.portfolio[0].allVideos)
    const allVideos = data.portfolio[0].allVideos;

    const id = getYouTubeId(allVideos[0].url)
    // console.log(id)

    const opts = {
        height: '270',
        width: '480',
    }

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <h1 className="text-2xl font-bold">{pageData.title}</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {allVideos.map((item, index) => (
                    // <YouTube key={index} id={getYouTubeId(item.url)} width={100} height={100} />
                    <div key={index} >
                        {/* {console.log(getYouTubeId(item.url))} */}
                        <Video videoUrl={getYouTubeId(item.url)} />
                    </div>
                ))}
            </div>
            {/* <YouTube videoId={id} width={10} /> */}
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