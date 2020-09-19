import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"

export default function NotFound() {
  return (
    <Layout>
      <Head title="404:Error" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head back home</Link>
      </p>
    </Layout>
  )
}
