import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const index = () => {
  return (
    <footer>
      <div className="social">
        <div className="icon facebook">
          <FaFacebookF />
        </div>
        <div className="icon instagram">
          <FaInstagram />
        </div>
        <div className="icon youtube">
          <FaYoutube />
        </div>
      </div>
      <div className="copyright">
        <p>HAF &copy; 2021, All RIghts Reserved</p>
      </div>
    </footer>
  );
};

export default index;
