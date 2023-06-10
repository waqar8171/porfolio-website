import React from "react";
import "./footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p>Waqar Ali</p>
      <p>
        For more HTML, CSS, and coding tutorial - please click on the link below
        to subscribe to my channel:
      </p>
      <div className="social">
        <a href="">{<FacebookIcon />}</a>
        <a href="">{<TwitterIcon />}</a>
        <a href="">{<InstagramIcon />}</a>
        <a href="">{<WhatsAppIcon />}</a>
      </div>
      <p className="end">Subtitle  By Waqar ALi &Copy;</p>
    </footer>
  );
};

export default Footer;
