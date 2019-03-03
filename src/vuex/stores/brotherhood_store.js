import { HTTP } from '../../http-common'

const BrotherhoodStore = {
  namespaced: true,
  state: {
    brotherhoods: [],
    brotherhood: {}
  },
  mutations: {
    one (state, data) {
      state.brotherhood = data.brotherhood
      return state
    },

    many (state, data) {
      state.brotherhoods = data.brotherhoods
      return state
    }
  },
  actions: {
    create (context, form) {
      HTTP( {
        method: 'post',
        url: '/brotherhood/',
        data: {
          'name': form.name,
          'contact_email': form.contact_email,
          'foundation_date': form.foundation_date
        }
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        context.commit('errors', error)
        console.log(error)
      })
    }
  }
}

export default BrotherhoodStore
