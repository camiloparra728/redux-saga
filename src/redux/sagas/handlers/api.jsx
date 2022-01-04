import { GET_LIST_COMPLETE,GET_LIST_REQUEST,GET_LIST_ERROR ,UPDATE_START_LIST,GET_DETAIL_REQUEST} from "../../actions/listActions";
import { call ,delay} from "typed-redux-saga";
import { put, takeLatest,select } from "redux-saga/effects";
import {fetchList,fetchDetail} from "../requests/request"
 
const getCoin = state => state.listReducer.idCrypto;
const getStart = state => state.listReducer.start;
const getLength = state => state.listReducer.length;
 
/**
 * These functions actives when we call the methos getList and getDetail
 */
export function* watchCryptoList() {
  yield takeLatest(GET_LIST_REQUEST, getList);
}
export function* watchCryptoDetail() {
  yield takeLatest(GET_DETAIL_REQUEST, getDetail);
}

/**
 * Get detail by coin
 */
export  function* getDetail() {
  try {
    
    const items = yield select(getCoin);
    
    const apiResponse = yield call(fetchDetail,items);
    
    yield put({
      type: 'GET_DETAIL_COMPLETE',
      payload: apiResponse.length ? apiResponse[0]:{},
    });
  } catch (error) {
    yield put({
      type: 'GET_DETAIL_ERROR',
      error: error
    });
  }
 
}
/**
 * Get coins
 */
export  function* getList() {
    try {

      const start = yield select(getStart);
      const length = yield select(getLength);
      yield delay(100); //Delay 
      const apiResponse = yield call(fetchList,start,length);
      
      yield put({
        type: GET_LIST_COMPLETE,
        payload: apiResponse,
      });
 
      yield put({
        type: UPDATE_START_LIST,
        payload: apiResponse ? apiResponse.data? apiResponse.data.length : 0 : 0,
      });
    } catch (error) {
      yield put({
        type: GET_LIST_ERROR,
        error: error
      });
    }
   
}

