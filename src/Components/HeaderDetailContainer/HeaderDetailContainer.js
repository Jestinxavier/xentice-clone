import React from "react";
import "./HeaderDetailContainer.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {DropDonData} from "../../constant/defaultvalue"
function HeaderDetailContainer() {
  return (
    <div className="HeaderDetailContainer">
      <Container>
        <div className="HeaderDetail-wrapper-div">
        <Card  className="card-width">
          <Card.Body>
            <Card.Title>
              <p className="HeaderDetailCard">
                Choose from 25,00+ Spaces for your Business
              </p>
            </Card.Title>

            <Card.Text>
              <p>Get inspired and find your perfect place</p>
            </Card.Text>
              {DropDonData.map((data,index)=>
            <div class="input-group mb-3">
              <select class="custom-select" id="inputGroupSelect03">
                {data.select.map(value=><option value={value}>{value}</option>)}
               
              </select>
            </div>
              )}
            <button className="HeaderDetail-color">
                Search
            </button>
          </Card.Body>
        </Card>
        </div>
      </Container>
    </div>
  );
}

export default HeaderDetailContainer;
