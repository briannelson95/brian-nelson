import Link from "next/link"
import Navbar from "../components/Navbar"
import { urlFor } from "../lib/modules"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  const pageData = data.pageData[0]
  console.log(pageData.hero)
  
  let navData = []
  const nav = data.navigation[0].navigation
  for (let i in nav) {
    navData.push({title: nav[i].title, href: nav[i].slug.current})
  }

  return (
    <main>
      <Navbar navigation={navData} />
      <section className="bg-slate-300 dark:bg-slate-500 h-[90vh]" style={{backgroundImage: `url(${urlFor(pageData.hero.image).url()})`}}>
        <div className="mx-10 pt-12 w-1/3">
          <h1 className="text-6xl font-bold uppercase">{pageData.hero.heading}</h1>
          <h3 className="text-3xl">{pageData.hero.tagline}</h3>
          <div className="mt-10">
            <Link href={pageData.hero.cta.link.slug.current}>
              <button className="bg-white py-4 px-5 text-black hover:bg-slate-800 hover:text-white">{pageData.hero.cta.title}</button>
            </Link>
          </div>
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
