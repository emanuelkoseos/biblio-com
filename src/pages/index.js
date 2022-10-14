import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"
import About from "../components/about"
import Pricing from "../components/pricing"
import CalltoAction from "../components/call-to-action"
import Screenshots from "../components/screenshots"
import Testimonials from "../components/testimonials"
import Subscribe from "../components/subscribe"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata()
  const availableSections = {
    "hero": Hero,
    "about": About,
    "pricing": Pricing,
    "call-to-action": CalltoAction,
    "screenshots": Screenshots,
    "testimonials": Testimonials,
    "subscribe": Subscribe
  }

  return(
    <>
      <Layout>
        { sections.map(section => {
          let Tagname = availableSections[section]
          return <Tagname />
        }) }
      </Layout>
    </>
  )
}
