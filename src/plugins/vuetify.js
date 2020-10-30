import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        ibsblue: '#34657F',
        ibsorange: '#AD6433',
        ibsgreen: '#7C8034',
        ibsyellow: '#D69A2D',
        ibswarmgrey: '#6E6259',
        ibsbeige: '#D5CB9F'
      },
      dark: {
        ibsblue: '#34657F',
        ibsorange: '#AD6433',
        ibsgreen: '#7C8034',
        ibsyellow: '#D69A2D',
        ibswarmgrey: '#6E6259',
        ibsbeige: '#D5CB9F'
      }
    }
  }
})
