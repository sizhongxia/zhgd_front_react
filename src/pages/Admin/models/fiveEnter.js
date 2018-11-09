import { requestList } from '@/services/constructionAccount';


export default {
  namespace: 'fiveEnter',

  state: {
    data: {
      list: []
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(requestList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: {
            list: []
        },
      };
    },
  },
};
