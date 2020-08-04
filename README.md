# Webpack Demo Setup [(**Live Preview**)](https://awwmicky.github.io/webpack-demo-setup/)

Check the DevTool Sources tab. It'll all make sense when you see code smushed up into a single line of beautiful garbage. 🤢🤬🤓

## NPM DevDependencies
**Weppack**

- required
    - `webpack` - `webpack-cli`
- utilities
    - `webpack-dev-server` - `webpack-merge`
- babel
    - `@babel/core` - `@babel/preset-env` 
    - `babel-minify-webpack-plugin` 
    - `babel-loader`
- links/files
    - e.g: fonts, images, etc
    - `file-loader` - `url-loader`
- css 
    - `optimize-css-assets-webpack-plugin` - `mini-css-extract-plugin`
    - `style-loader` - `css-loader`
- html
    - `html-webpack-plugin`
    - `html-loader`

**Other**
- `rimraf`
- `gh-pages`