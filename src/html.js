import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": ["AutoRepairtion", "AmusementPark"],
            "name": "Disneyland Paris",
            "description": "It's an amusement park in Marne-la-Vallée, near Paris, in France and is the most visited theme park in all of France and Europe.",
            "openingHours":["Mo-Fr 10:00-18:00", "Sa 10:00-22:00", "Su 10:00-21:00"],
            "currenciesAccepted": "EUR",
            "paymentAccepted":"Cash, Credit Card, Bank transfer",
            "url":"http://www.gehring-garage.de/"
        }
        </script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
