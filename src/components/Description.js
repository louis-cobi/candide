import React from "react";

const Description = (props) => {
  return (
    <div style={{ position: "absolute", top: "20px", right: "20px" }}>
      <div className="menu">
        <button onClick={props.onClose}>X</button>
        <div className="menu-title"><p>{props.plant.name}</p></div>
        <div className="form-items"><p>Type : </p><p>{props.plant.description.type}</p></div>
        <div className="form-items"><p>Size : </p><p>{props.plant.description.size}</p></div>
        <div className="form-items"><p>Width : </p><p>{props.plant.description.width}</p></div>
        <div className="form-items"><p>Height : </p><p>{props.plant.description.height}</p></div>
        <div className="form-items"><p>Text : </p><p>{props.plant.description.text}</p></div>
        <div className="form-items"><p>Watering : </p><p>{props.plant.description.watering}</p></div>
        <div className="form-items"> <p>Watering Amount : </p><p>{props.plant.description.wateringAmount}</p></div>
        <div className="form-items"><p>Flowering : </p><p>{props.plant.description.flowering}</p></div>
        <div className="form-items"><p>Family : </p><p>{props.plant.description.family}</p></div>
        </div>
       
      </div>
  );
};

export default Description;
