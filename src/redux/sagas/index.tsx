import { watchCryptoDetail, watchCryptoList } from "./handlers/api";
import { all } from "redux-saga/effects";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchCryptoDetail() ,watchCryptoList()]);
}
