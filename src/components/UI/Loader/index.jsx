import React from "react";
import "./Loader.css";

const Loader = ({ big }) => {
  return (
    <div className="container">
      <div className="tree">
        {big && (
          <>
            <div className="branch" style={{ "--x": 0 }}>
              <span style={{ "--i": 0 }}></span>
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
            </div>
            <div className="branch" style={{ "--x": 1 }}>
              <span style={{ "--i": 0 }}></span>
              <span style={{ "--i": 1 }}></span>
              <span style={{ "--i": 2 }}></span>
              <span style={{ "--i": 3 }}></span>
            </div>
          </>
        )}
        <div className="branch" style={{ "--x": big ? 2 : 0 }}>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="branch" style={{ "--x": big ? 3 : 0.3 }}>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <div className="stem">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        <span className="shadow"></span>
      </div>
      {/* <p className="text-smaller mt-10 font-fmed">LOADING..</p> */}
    </div>
  );
};

export default Loader;
