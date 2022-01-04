import React, { useEffect } from "react";
import Loading from "../../../components/loading/loading";
import './index.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
/**
 * Component list of coins
 * @param props to read data list
 * @returns 
 */
const ListComponent: React.FC = (props: any) => {
  useEffect(() => {
    if (!props.list) {
      props.getList(props.length)
    }
    return () => {

    }
  }, [props])

  const refresh = () => {
    window.location.reload();
  }
  const fetchData = () => {

    props.getList(props.length)
  }

  const setQRecords = (event: any) => {

    props.getList(event.target.value)
  }
  return (
    <>


      <div>
        <InfiniteScroll
          dataLength={props.list && props.list.data && props.list.data.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>It's all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593;</h3>
          }
        >
          <div id="crypto" className="container">


            <div className="select select-fullWidth2">
              <select onChange={setQRecords} value={props.length}>

                <option value={20}>Show each 20 records</option>
                <option value={40}>Show each 40 records</option>
                <option value={60}>Show each 60 records</option>
                <option value={100}>Show each 100 records</option>
              </select>
            </div>

            {props.list && props.list.data.map((x: any, i: number) => (
              <div key={"o" + i} id="crypto" className="container">
                <div className="row card">
                  <div className="prices"><div className="percent"> <p> <b> PRICE / BTC</b> ({x.price_btc})  -  <b>USD </b>({x.price_usd})</p></div> </div>
                  <div className="col"> <div className="symbol">{i + 1}.{x.symbol}</div></div>
                  <div className="col name">{x.name}</div>
                  <div className="col">
                    <Link
                      className="button button--small button--transparent"
                      to={`/detail?id=${x.id}`}

                    >DETAIL</Link>

                  </div>
                </div>
              </div>))}
          </div>
        </InfiniteScroll>
      </div>

    </>
  );
};


export default ListComponent;