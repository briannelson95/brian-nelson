import Navbar from "../components/Navbar"
import { urlFor } from "../lib/modules"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  const pageData = data.pageData[0]
  console.log(urlFor(pageData.hero.image).url())
  const image = urlFor(pageData.hero.image).url()
  
  let navData = []
  const nav = data.navigation[0].navigation
  for (let i in nav) {
    navData.push({title: nav[i].title, href: nav[i].slug.current})
  }

  return (
    <main>
      <Navbar navigation={navData} />
      <section className={`bg-[url(${urlFor(pageData.hero.image).url()})]`}>
        <h1 className="text-2xl font-bold">{pageData.title}</h1>
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
