export const state = () => ({
  skills: {
    frontend: [
      'HTML / CSS / SASS',
      'JavaScript / TypeScript',
      'jQuery',
      'ReactJS / ReactTS',
      'Vue.js / Nuxt.js',
      'Vuetify',
      'Bootstrap / Bootstrap-Vue',
    ],
    backend: [
      'MSSQL / MySQL',
      'PHP / Laravel',
      'Firebase',
      'SQLite',
    ],
    others: [
      'C / C++',
      'C#',
      'UX / Prototyping',
      'Java Swing / Android',
    ]
  }
})

export const getters = {
  get(state) {
      return state.skills
  }
}