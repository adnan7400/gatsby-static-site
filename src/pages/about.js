import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

export default function About() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me</h1>
      <h2>I'm Adnan, a web developer living in Vancouver, BC.</h2>
      <h3>
        I am a computing science graduate from Simon Fraser University. During
        my undergraduate career, I have had three years of computer programming
        experience on several languages, such as Java, JavaScript and Python,
        amongst others. I am interested in Web Development and am versed in
        Javascript libraries such as React, runtime environments such as
        Node.js, the React framework Gatsby, amongst others.{" "}
      </h3>
    </Layout>
  )
}
