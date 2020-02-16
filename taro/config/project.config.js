const APPID_ENV = process.env.APPID_ENV

module.exports = {
  miniprogramRoot: APPID_ENV ? './dist_test' : './dist',
  projectname: APPID_ENV ? 'goddess-hat-test' : 'goddess-hat',
  description: 'taro-daka',
  appid: APPID_ENV ? 'wx38b49882b7761548' : 'wxd5e8989ce23206af',
  qqappid: '1110180763',
  setting: {
    urlCheck: false,
    es6: false,
    postcss: false,
    minified: false
  },
  compileType: 'miniprogram',
  condition: {
    search: {
      current: -1,
      list: []
    },
    conversation: {
      current: -1,
      list: []
    },
    plugin: {
      current: -1,
      list: []
    },
    game: {
      list: []
    },
  }
}
