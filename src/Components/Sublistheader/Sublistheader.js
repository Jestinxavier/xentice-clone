import React from "react";
import { Container } from "react-bootstrap";
import {SublistheaderData} from '../../constant/defaultvalue'
import "./Sublistheader.css";
function Sublistheader() {
  return (
    <div className="sublistheader d-flex align align-center mt-3">
      <Container className="center-sublistheader">
          <div className="d-flex overflow-data">
       { SublistheaderData.map((data,index)=>
          <div className="sublistheader-div"  key={index}>
            <img
              className="sublistheader-img"
              src={data.icon}
            ></img>
            <p className="sublistheader-p">{data.label}</p>
          </div>
                  
                  )}
                  </div>
      </Container>
    </div>
  );
}

export default Sublistheader;
