import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
import NumberFormat from 'react-number-format';

/**
 * Component detail of info coin
 * @param props to read data detail
 * @returns 
 */
const DetailComponent: React.FC = (props: any) => {

  return (
    <>
      <div id="crypto" className="container">
      <br/>
        <div className="row card-detail">
          <div className="container">
            <div className="row">
              <div className="col"><div className="symbol">1H</div><div style={props.percent_change_1h < 0 ? { color: "red" }: {}}><NumberFormat displayType="text" type="text" allowEmptyFormatting thousandSeparator={true} prefix={'$ '} name="value" value={props.percent_change_1h}  /></div></div>
              <div className="col"><div className="symbol">24H</div><div style={props.percent_change_24h < 0 ? { color: "red" }: {}}><NumberFormat displayType="text" type="text" allowEmptyFormatting thousandSeparator={true} prefix={'$ '} name="value" value={props.percent_change_24h}  /></div></div>
              <div className="col"><div className="symbol">7D</div><div style={props.percent_change_7d < 0 ? { color: "red" }: {}}><NumberFormat displayType="text" type="text" allowEmptyFormatting thousandSeparator={true} prefix={'$ '} name="value" value={props.percent_change_7d}  /></div></div>
            </div>
            <div className="row">
              <div className="col"><div className="percent">ONE</div><div><h1 className="name-big">{props.name}</h1></div></div>
              <div className="col"><div className="symbol">In USD</div><div><NumberFormat displayType="text" type="text" allowEmptyFormatting thousandSeparator={true} prefix={'$ '} name="value" value={props.price_usd}  /></div></div>
              </div>
              <div className="row">
              <div className="col">
                <Link
                  className="button button--small button--transparent"
                  to={'/'}

                >BACK</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailComponent;