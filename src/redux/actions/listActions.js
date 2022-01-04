/*
 * action types
 */

export const UPDATE_START_LIST = "UPDATE_START_LIST";
export const UPDATE_COMPLETE = "UPDATE_COMPLETE";
export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_COMPLETE = "GET_LIST_COMPLETE";
export const GET_LIST_ERROR = "GET_LIST_ERROR";
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_COMPLETE = "GET_DETAIL_COMPLETE";
export const GET_DETAIL_ERROR = "GET_DETAIL_ERROR";
export const GET_SHOW_DETAIL = "GET_SHOW_DETAIL";
/*
 * action creators
 */

/**
 * 
 * @param {* Initial list of records } crypto 
 * @returns 
 */
export function startList(crypto) {
  return { type: UPDATE_START_LIST, payload: crypto };
}
/**
 * 
 * @param {* Id from list} crypto 
 * @returns 
 */
export function getDetail(crypto) {
  
  return { type: GET_DETAIL_REQUEST, payload: crypto };
}
/**
 * 
 * @param {* id the one that starts with } crypto 
 * @returns 
 */
export function getList(crypto) {
  return { type: GET_LIST_REQUEST, payload: crypto };
}