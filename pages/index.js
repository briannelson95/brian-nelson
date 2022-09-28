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
    payerVars: {
      modestbranding: 1
    }
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
  // console.log(pageData.hero.tagline[0])
  return (
    <main>
      <Navbar navigation={navData} />
      <h1 className="text-6xl font-extrabold text-center mt-20">{pageData.hero.heading}</h1>
      <h3 className="text-4xl font-extrabold text-center capitalize mt-6">{pageData.hero.tagline}</h3>
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
