import React, { lazy } from "react";
import { connect } from "react-redux";

import { getDetail, getList, startList } from "../../redux/actions/listActions";
const ListComponent = lazy(() => import('./components/list'));


const CryptoPage: React.FC = (props: any) => {
  return (
    <>
      <div className="container">
        <h1 className="App-title">  Total  {props.list && props.list.info && props.list.info.coins_num}
          <b> coins</b></h1>
        <ListComponent {...props} />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.listReducer.loading,
    start: state.listReducer.start,
    length: state.listReducer.length,
    list: state.listReducer.cryptoList,
    showDetail: state.listReducer.cryptoDetail
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDetail: (id: number) => {
      dispatch(getDetail(id));
    },
    getList: (start: number) => {
      dispatch(getList(start));
    },
    startList: (start: number) => {
      dispatch(startList(start));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoPage);
