// const webpack = require('webpack');

// module.exports = {
//   webpack: {
//     configure: (webpackConfig, { env, paths }) => {
//       webpackConfig.module.rules.forEach(rule => {
//         if (String(rule.test) === String(/\.(js|mjs|jsx|ts|tsx)$/)) {
//           rule.use.forEach(u => {
//             if (u.loader && u.loader.includes('source-map-loader')) {
//               u.options = {
//                 ...u.options,
//                 exclude: ['html2pdf.js/dist/es6-promise.map'],
//               };
//             }
//           });
//         }
//       });

//       return webpackConfig;
//     },
//   },
// };
