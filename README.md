# gatsby-reproduction-head-api-mdx-default-layout

Reproduction Repo for using Head API with MDX (v1) defaultLayouts

## Test for Head API and `gatsby-plugin-mdx@v1.6.22` / `defaultLayouts`

`default-layout.js` is set in the options of the plugin and is used for "/about" and "/using".
Head API \*_does not_ set HTML `<title>` as "Hello World"

`hero-layout.js` is used by "/" and Head API is exported from the MDX.
Head API **does** set HTML `<title>` as "Reproduction Head API"
