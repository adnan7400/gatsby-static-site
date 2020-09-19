import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Adnan, a web developer living in Vancouver, BC.</h2>
      <p>
        Want to hire me? <Link to="/contact/">Reach out.</Link>
      </p>
    </Layout>
  )
}
