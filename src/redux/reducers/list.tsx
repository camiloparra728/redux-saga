import { UPDATE_START_LIST,GET_LIST_ERROR, GET_LIST_REQUEST, GET_LIST_COMPLETE, GET_DETAIL_COMPLETE, GET_DETAIL_REQUEST, GET_DETAIL_ERROR, GET_SHOW_DETAIL } from "../actions/listActions";

const initialState = {length:20, start:0,idCrypto: 0, loading: true, cryptoList:null as any,cryptoDetail: null,showDetail:false};

export const listReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_START_LIST:
      return { ...state,loading: true,  start: action.payload };
    case GET_LIST_REQUEST:
      return { ...state, loading: true, length: action.payload };
    case GET_LIST_ERROR:
      return { ...state, loading: false };
    case GET_LIST_COMPLETE:
      var nList = state.cryptoList ? [...state.cryptoList.data,...action.payload.data] as any[] : action.payload;
      if(state.cryptoList && action.payload && action.payload.data )
      action.payload.data = nList;
      return { ...state, loading: false, cryptoList: action.payload };
    case GET_DETAIL_REQUEST:
      return { ...state, loading: true, idCrypto: action.payload };
    case GET_DETAIL_ERROR:
      return { ...state, loading: false };
    case GET_DETAIL_COMPLETE:
      return { ...state, loading: false, showDetail: true, cryptoDetail: action.payload };
    case GET_SHOW_DETAIL:
      return { ...state, loading: false, showDetail: action.payload };


    default:
      
      return state;
  }
};
