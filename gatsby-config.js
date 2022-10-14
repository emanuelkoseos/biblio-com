/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Biblio systems web site`,
    author: {
      name: `Emanuel Koseos`,
    },
    description: `Bibliosystems web is a clean, modern, landing page site.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `about`,
      `pricing`,
      `call-to-action`,
      `screenshots`,
      `testimonials`,
      `subscribe`
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'about', label: 'About'},
      {path: 'pricing', label: 'Pricing'},
      {path: 'screenshots', label: 'Screenshots'},
      {path: 'testimonials', label: 'Testimonials'},
      {path: 'subscribe', label: 'Subscribe'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://www.linkedin.com/company/biblio-systems-inc`,
        fa: `linkedin` },
      { service: `Twitter`,
        url : `https://twitter.com/bibliosystems`,
        fa: `twitter` },
      { service: `Facebook`,
        url : `https://www.facebook.com/bibliosystems/`,
        fa: `facebook` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/footer-logo.png`,
      text: `Footer logo.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `+1 (604) 240-9170`, url: `tel:16042409170` },
      { text: `info@bibliosystems.com`, url: `mailto:info@bibliosystems.com`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
