// This is the Vuex store module provided by your plugin.
// This file exports a Vuex store module object or a function which returns such an object.
// The function receives a "dependencies" object with 3 properties: 'dm5', 'axios', and 'Vue'.
export default ({dm5, axios, Vue}) => ({

  state: {
    buttonLabel: "Zettel"
  },

  actions: {
    greet () {
      dm5.restClient.createTopic({
        typeUri: 'zettelkasten.zettel',
        children: {
          'zettelkasten.zettel.title': {value: 'Greetings'},
          'zettelkasten.zettel.content':  {value: '<p>from <b>DMX</b>!<p>'}
        }
      })
    }
  }
})
