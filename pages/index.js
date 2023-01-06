import Link from "next/link"
import Navbar from "../components/Navbar"
import { urlFor } from "../lib/modules"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"
import getYouTubeId from 'get-youtube-id';
import BlockContent from '@sanity/block-content-to-react'
import SEO from "../components/SEO"
import Card from "../components/Card"
import ColoredText from "../components/ColoredText"

export default function Home({ data }) {
  const pageData = data.pageData[0]
  const seo = data.siteSettings[0].seo
  const siteSettings = data.siteSettings[0]
  // console.log(seo)
  
  let navData = []
  const nav = data.navigation[0].navigation
  for (let i in nav) {
    navData.push({
      title: nav[i].title, 
      href: nav[i].slug.current,
    })
  }

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={urlFor(seo.image).url()}
      />
      <main className="h-screen">
        <Navbar navigation={navData} />
        <div className="">
          <h1 className="text-6xl font-extrabold text-center mt-20">{pageData.hero.heading}</h1>
          <h3 className="text-4xl font-extrabold text-center capitalize mt-6 text-white">
            {pageData.hero.tagline.split(' ').slice(0, 2).join(' ') + ' '}  
            <ColoredText>
              {pageData.hero.tagline.split(' ').slice(2, 4).join(' ')}
            </ColoredText>
          </h3>
          </div>
          <section className="m-10">
            <Card>
              <a href={`mailto:${siteSettings.email}`}>
                <h2 className="text-2xl font-bold hover:underline">Contact Me</h2>
              </a>
            </Card>
          </section>
      </main>
    </>
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
