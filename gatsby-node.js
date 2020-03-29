/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// //adding webpack config for jQuery 
// exports.onCreateWebpackConfig = ({
//   actions,
// }) => {
//   const { setWebpackConfig } = actions;
//   setWebpackConfig({
//     externals: {
//       jquery: 'jQuery', // important: 'Q' capitalized
//     }
//   })
// }

// new webpack.ProvidePlugin({
//   $: 'jquery',
//   jQuery: 'jquery'
// })

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     // Exclude Sign-In Widget from compilation path
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: 'gatsby-browser.js',
//             use: loaders.null(),
//           }
//         ],
//       },
//     })
//   }
// };