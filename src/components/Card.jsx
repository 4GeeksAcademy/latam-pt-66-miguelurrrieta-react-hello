import React from "react";

const Card = (props) => {
  return (
    <div className="card h-100 text-center rounded-1">
      
      <img
        src="https://dummyimage.com/500x325/eceeef/eceeef.png"
        className="card-img-top bg-secondary-subtle"
        alt="500 x 325"
        style={{ minHeight: "180px", objectFit: "cover" }}
      />
      
      <div className="position-absolute w-100 text-muted fs-4 fw-bold d-flex justify-content-center align-items-center" style={{ height: "180px", pointerEvents: "none", color: "#6c757d" }}>
        500 x 325
      </div>

      <div className="card-body p-4">
        <h4 className="card-title fw-bold mb-3">{props.title}</h4>
        <p className="card-text text-secondary mb-0">{props.text}</p>
      </div>

      
      <div className="card-footer bg-light border-top p-3">
        <a href="#!" className="btn btn-primary px-3">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
