import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import en from "vuetify/src/locale/en.ts";
import pt from "vuetify/src/locale/pt.ts";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#05CDDC",
        secondary: "#424242",
        terciary: "#ffe589",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
  lang: {
    locales: {
      pt,
      en,
    },
    current: "pt",
  },
});
