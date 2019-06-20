import { get } from '../request'

export default {
  namespace: 'demo',

  state: {
    text: '',
  },

  reducers: {
    update({ payload }, state) {
      return { ...state, ...payload }
    },
  },

  effects: {
    async getDemo(action, { put }) {
      const { text } = await get('/demo')
      put({ type: 'update', payload: { text } })
    },
  }
}
