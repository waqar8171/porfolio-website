import React from "react";
import "./services.css";
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddAlertIcon from '@mui/icons-material/AddAlert';

const Services = () => {
  return (
    <div className="sercices">
      <div className="title">
        <h2>Our Services</h2>
      </div>
      <div className="box">
        <div className="card">
          {/* <i className="fas fa-bars"></i
          > */}
          <i>{<BlindsClosedIcon/>}</i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary gaols: Firstly, it
              needs to work across all devices. Secondly, it needs to e fast as
              possible.
            </p>
            <p>
              <a href="#" className="button">
                Read More
              </a>
            </p>
          </div>
        </div>
      
      <div className="card">
      <i >{<ContactPhoneIcon/>}</i>
        <h5>Web Development</h5>
        <div className="pra">
          <p>
            Every website should be built with two primary gaols: Firstly, it
            needs to work across all devices. Secondly, it needs to e fast as
            possible.
          </p>
          <p>
            <a href="#" className="button">
              Read More
            </a>
          </p>
        </div>
      </div>
      <div className="card">
          <i>{<AddAlertIcon/>}</i>
          <h5>Web Development</h5>
          <div className="pra">
            <p>
              Every website should be built with two primary gaols: Firstly, it
              needs to work across all devices. Secondly, it needs to e fast as
              possible.
            </p>
            <p >
              <a href="#" className="button">
                Read More
              </a>
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Services;
