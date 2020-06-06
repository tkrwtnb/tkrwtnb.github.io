module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'protection'
    ? '/resume/'
    : '/',
  outputDir: 'docs'
}