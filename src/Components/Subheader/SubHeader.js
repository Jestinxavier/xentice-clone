import React from "react";
import { Container } from "react-bootstrap";
import {subHeaderData} from '../../constant/defaultvalue'
import "./subheader.css";
function SubHeader() {
  return (
    <div className="subheader d-flex align align-center ">
      <Container className="center-subheader">
          <div className="d-flex overflow-data">
       { subHeaderData.map((data,index)=>
          <div className="subheader-div"  key={index}>
            <img
              className="subheader-img"
              src={data.icon}
            ></img>
            <p className="subheader-p">{data.name}</p>
          </div>
                  
                  )}
                  </div>
      </Container>
    </div>
  );
}

export default SubHeader;
