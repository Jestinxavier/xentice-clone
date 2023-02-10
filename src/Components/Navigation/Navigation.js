import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navigation.css";
import {menuData} from '../../constant/defaultvalue'

 function Navigation() {
  return (
    <Navbar key={"xxl"} expand={"xxl"} >
      <Container fluid>
        <div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
          <a href="#">
            <img
              src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
              class="header_container_col_logo"
            ></img>
          </a>
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl `}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          className="offcanvas-start"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                 <img className="logo-img" src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 inner-menu-wrapper borderBottom">
              {menuData?.map((data,index)=><div key ={index} className="inner-menu-wrapper pd-l-0">
                <Nav.Link
                  href="#action1"
                  className="d-flex justify-content-between inner-menu-wrapper pd-l-0"
                >
                  <ion-icon name={data.icon}></ion-icon>
                  <span className="link pop">{data.name}</span>
                </Nav.Link>
              </div>)}
            </Nav>
              <Nav.Link
                  href="#action1"
                  className="d-flex justify-content-between inner-menu-wrapper pd-l-0"
                >
                 <ion-icon name="log-out-outline"></ion-icon>
                  <span className="link pop">Login/Sign Up</span>
                </Nav.Link>
           
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <div className=" menu-bar d-flex">
            <p className="icon-p">
              <ion-icon
                name="megaphone-outline"
                role="img"
                class="md hydrated"
                aria-label="megaphone outline"
              ></ion-icon>
              <span>
                <a href="/"> Post Ad</a>
              </span>
            </p>
            <p className="icon-p">
              <ion-icon name="location-outline"></ion-icon>
              <span>
                <a href="/"> Post Ad</a>
              </span>
            </p>
            <p className="icon-p">
              <ion-icon name="log-out-outline"></ion-icon>
              <span>
                <a href="/" className="inner-menu-wrapper-p">
                  {" "}
                  Post Ad
                </a>
              </span>
            </p>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
