
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'umi-zoro',
      dll: true,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    'umi-plugin-zoro',
  ],
}
