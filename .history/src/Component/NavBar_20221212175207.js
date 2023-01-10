/** @format */

import React, { useState } from "react";
import Bag from "../Assets/Shopping Bag.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import arrow from "../Assets/asset1.png";
import arrow2 from "../Assets/asset1.jpg";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Sign from "../Assets/Sign Out.jpg";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);

  const [logout, setLogout] = useState(false);
  const [phoneNum, setPhone] = useState(false);

  const navigate = useNavigate();

  function NavigationHandler(data) {
    navigate(data);
    handleClose();
  }

  // Modal ---
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {logout ? "  Are you sure you want to Log out " : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {logout ? (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button variant="outline-dark" style={{ width: "200px" }}>
                Yes
              </Button>
              <Button
                style={{
                  border: "1px solid black",
                  background: "transparent",
                  color: "black",
                  width: "200px",
                }}
              >
                No
              </Button>
            </div>
          ) : (
            ""
          )}

          {phoneNum ? (
            <h4> 1245369870  </h4>
          ) : ""}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="MainNav">
        <div className="left">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="mid">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>
        <div className="right">
          <img
            src={Bag}
            alt="Bag"
            onClick={() => navigate("/shoppingBag")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} id="OFFC">
        <Offcanvas.Header>
          <img
            src={arrow}
            alt=""
            onClick={() => handleClose()}
            className="ArrowI"
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="OFC">
            <p style={{ marginLeft: "4%" }}>SHOP BY CATEGORY</p>
            <ul style={{ marginTop: "5%" }}>
              <li onClick={() => NavigationHandler("/second")}>
                <p>BABY & MOM</p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/per")}>
                <p>BEAUTY & COSMETICS </p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/tech")}>
                <p>GADGETS & ELECTRONICS</p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/gym")}>
                <p> HEALTH & PERSONAL CARE </p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/life")}>
                <p> LIFESTYLE & SPORTS </p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/mens")}>
                <p>MEN’S GROOMING ESSENTIALS</p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/home")}>
                <p> HOME & KITCHEN </p> <img src={arrow2} alt="" />{" "}
              </li>
            </ul>

            <p style={{ marginTop: "9%", marginLeft: "4%" }}>MY ACCOUNT</p>
            <ul style={{ marginTop: "5%" }}>
              <li onClick={() => NavigationHandler("/track")}>
                <p>Tracking</p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/allOrders")}>
                <p>Orders </p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/sta")}>
                <p>Returns & Refunds</p> <img src={arrow2} alt="" />{" "}
              </li>

              <li onClick={() => NavigationHandler("/YourAdd")}>
                <p>Saved Address</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p> Payment Methods</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/profile")}>
                <p> Profile </p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/customerService")}>
                <p> Customer Service </p> <img src={arrow2} alt="" />{" "}
              </li>

              <p className="head">DEDICATED SUPPORT</p>
              <li>
                <p>Talk to Human</p> <img src={arrow2} alt="" />{" "}
              </li>

              <div className="nav-Images">
                <div style={{cursor : 'pointer'}} onClick={() => {
                  setModalShow(true)
                  handleClose()
                }}>
                  <img src={phone} alt="" />
                  <p>PHONE</p>
                </div>
                <div style={{ borderRight: "1px solid black" }}></div>
                <div style={{ marginTop: "20px" }}>
                  <img src={Mail} alt="" />
                  <p>EMAIL US</p>
                </div>
                <div style={{ borderRight: "1px solid black" }}></div>
                <div>
                  <img src={Whatsapp} alt="" />
                  <p>WHATSAPP US</p>
                </div>
              </div>

              <li onClick={() => NavigationHandler("/FAQ")}>
                <p>About Us & FAQs</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/facial")}>
                <p>Useful Blogs & Links</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/PP")}>
                <p>Privacy policy</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/terms")}>
                <p>Terms & Conditions</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li onClick={() => NavigationHandler("/returnRefundPolicy")}>
                <p>Returns & Refunds Policy</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li style={{ marginTop: "10%" }}>
                <p
                  style={{
                    fontFamily: "Monument",
                    paddingTop: "30px",
                    paddingLeft: "40px",
                  }}
                  onClick={() => {
                    setLogout(true);
                    setModalShow(true);
                    handleClose();
                  }}
                >
                  SIGN OUT
                </p>{" "}
                <img src={Sign} alt="" style={{ paddingBottom: "10px" }} />{" "}
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* {side ? (
        <div className="sideBar" style={{ left: "100px" }}>
          <ul>
            <LinkContainer to="/" onClick={() => setSide(false)}>
              <li>HOME</li>
            </LinkContainer>
            <LinkContainer to="/second" onClick={() => setSide(false)}>
              <li>BABY & MOM</li>
            </LinkContainer>
            <LinkContainer to="/gym" onClick={() => setSide(false)}>
              <li>HEALTH & PERSONAL CARE</li>
            </LinkContainer>
            <LinkContainer to="/Per" onClick={() => setSide(false)}>
              <li>BEAUTY & COSMETICS</li>
            </LinkContainer>
            <LinkContainer to="/tech" onClick={() => setSide(false)}>
              <li>GADGETS & ELECTRONICS</li>
            </LinkContainer>
            <LinkContainer to="/home" onClick={() => setSide(false)}>
              <li>HOME & KITCHEN</li>
            </LinkContainer>
            <LinkContainer to="/mens" onClick={() => setSide(false)}>
              <li>MEN’S GROOMING ESSENTIALS</li>
            </LinkContainer>
            <LinkContainer to="/life" onClick={() => setSide(false)}>
              <li>LIFESTYLE & SPORTS</li>
            </LinkContainer>
            <LinkContainer to="/single" onClick={() => setSide(false)}>
              <li>SINGLE PRODUCT</li>
            </LinkContainer>
          </ul>
        </div>
      ) : (
        <div className="sideBar">
          <ul></ul>
        </div>
      )} */}
    </>
  );
};

export default NavBar;
