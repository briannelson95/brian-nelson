import Link from "next/link"
import Navbar from "../components/Navbar"
import { urlFor } from "../lib/modules"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import BlockContent from '@sanity/block-content-to-react'

export default function Home({ data }) {
  const pageData = data.pageData[0]

  const videos = data.videos[0].allVideos

  const opts = {
    height: '180',
    width: '320',
  }

  const testimonialArr = data.testimonials
  
  let navData = []
  const nav = data.navigation[0].navigation
  for (let i in nav) {
    navData.push({
      title: nav[i].title, 
      href: nav[i].slug.current,
    })
  }

  return (
    <main className="mb-12">
      <Navbar navigation={navData} />
      <section className="text-white bg-slate-300 dark:bg-slate-500 h-[75vh] md:h-[80vh]" style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`, backgroundSize: 'cover'}}>
        <div className="mx-8 pt-12 pr-6 md:w-1/3">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">{pageData.hero.heading}</h1>
          <h3 className="text-xl md:text-3xl">{pageData.hero.tagline}</h3>
          <div className="mt-10">
            <Link href={pageData.hero.cta.link.slug.current}>
              <button className="bg-white py-4 px-5 text-black hover:bg-slate-800 hover:text-white">{pageData.hero.cta.title}</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-8 mb-5">
        <h2 className="text-2xl font-bold my-2">Featured Videos</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {videos.map((item, index) => (
            <div key={index} className='w-full'>
              <YouTube key={index} videoId={getYouTubeId(item.url)} opts={opts} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-800 text-white dark:bg-slate-700 px-8 py-2">
        <h2 className="text-2xl font-bold">What people are saying</h2>
          <div className="mt-2 grid grid-cols-1 gap-4">
            {testimonialArr.map((item, index) => (
              <div key={index} className="" >
                <BlockContent blocks={item.body} />
                <h4 className="font-medium text-right">- {item.name}</h4>
              </div>
            ))}
          </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const data = await client.fetch(homepage)
  // console.log(data)

  return {
    props: {
      data
    }
  }
}
