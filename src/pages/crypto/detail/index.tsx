import React,{lazy,useEffect} from "react";
import { connect } from "react-redux";
import { getDetail } from "../../../redux/actions/listActions";
import Loading from "../../../components/loading/loading";
import { useSearchParams } from "react-router-dom";
import DetailComponent from "../components/detail";
;

const CryptoDetailPage: React.FC = (props: any) => {
 
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if(searchParams.get("id") && !props.showDetail){
      props.getDetail(searchParams.get("id"))
    }
    return () => {
    }
  }, [searchParams,props])
   
  return (
   <> 
   
   { 
    props.showDetail ?
    <DetailComponent {...props.details} />
    :
    <Loading/>
    }
   </>
  );
};

const mapStateToProps = (state: any) => {

  return {
    showDetail: state.listReducer.showDetail,
    loading: state.listReducer.loading,
    details: state.listReducer.cryptoDetail,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDetail: (idCrypto:string) => {
      dispatch(getDetail(idCrypto));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptoDetailPage);
