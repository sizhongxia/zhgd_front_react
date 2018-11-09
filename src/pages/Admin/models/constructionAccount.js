import { requestList } from '@/services/constructionAccount';
import { queryAreas } from '@/services/geographic';

export default {
  namespace: 'constructionAccount',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    areas: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(requestList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchAreas(_, { call, put }) {
      const response = yield call(queryAreas);
      yield put({
        type: 'saveAreas',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    saveAreas(state, action) {
      return {
        ...state,
        areas: action.payload,
      };
    },
  },
};
