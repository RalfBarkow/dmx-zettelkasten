// This is the Vuex store module provided by your plugin.
// This file exports a Vuex store module object or a function which returns such an object.
// The function receives a "dependencies" object with 3 properties: 'dmx', 'axios', and 'Vue'.
export default ({dmx, axios, Vue}) => ({

  state: {
    buttonLabel: "Zettel",
    zettelCount: 0
  },

  actions: {
    greet ({state, dispatch}) {
      state.zettelCount++
      dmx.rpc.createTopic({
        typeUri: 'zettelkasten.zettel',
        children: {
          'zettelkasten.zettel.title': `Zettel ${state.zettelCount}`,
          'zettelkasten.zettel.content':  '<p>from <b>DMX</b>!<p>'
        }
      }).then(topic => {
        dispatch('revealTopic', {topic})
      })
    }
  }
})