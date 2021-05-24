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
            "@type": ["AutoRepairtion", "AutoBodyShop"],
            "name": "Autowerkstatt Uwe Gehring",
            "description": "Freie KFZ Werkstatt in Neuhausen (Enzkreis) für alle Marken. Reifenwechsel, Inspektion, Smart repair, Restauration und vieles mehr.",
            "openingHours":["Mo-Fr 10:00-18:00", "Sa 11:00-16:00"],
            "currenciesAccepted": "EUR",
            "priceRange": "$",
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
