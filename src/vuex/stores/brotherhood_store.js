import HTTP from '../../http-common'

const BrotherhoodStore = {
  namespaced: true,
  state: {
    brotherhoods: [],
    brotherhood: {}

  },
  mutations: {
    one (state, data) {
      state.brotherhood = data
      return state
    },

    many (state, data) {
      state.brotherhoods = data
      return state
    }
  },
  actions: {
    index (context, query) {
      HTTP({
        method: 'get',
        url: '/brotherhoods/'
      })
        .then(function (response) {
          console.log(response.data)
          context.commit('many', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    show (context, id) {
      HTTP({
        method: 'get',
        url: `brotherhoods/${id}`
      })
        .then(function (response) {
          console.log('show response')
          console.log(response.data)
          context.commit('one', response.data)
        })
        .catch(function (error) {
          console.log('error oh no')
          console.log(error)
        })
    },
    create (context, form) {
      HTTP({
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
    },
    update (context, brotherhood) {
      HTTP({
        method: 'put',
        url: `brotherhoods/${brotherhood.id}/`,
        data: {
          'name': brotherhood.name,
          'contact_email': brotherhood.contact_email,
          'foundation_date': brotherhood.foundation_date
        }
      })
        .then(function (response) {
          console.log('update sucess')
          console.log('one', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

export default BrotherhoodStore
