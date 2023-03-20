import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Plant = (props) => {

  const [plantPosition, setPlantPosition] = useState([]);

  useEffect(() => {
    handlePlantPosition();
  }, []);

  const handlePlantPosition = () => {
    const plantX = props.plant.x;
    const plantY = props.plant.y;
    const groundX = props.groundX / 2
    const groundY = props.groundY / 2
    let x
    let y
    const z = 0;
    groundX > plantX ? x = plantX - groundX : x = -(groundX - plantX)
    groundY > plantY ? y = plantY - groundY : y = -(groundY - plantY)
    setPlantPosition([x, z, y]);
  };

  const PlantModel = require("../models/" + `${props.plant.name}` + ".glb");

  const { scene } = useGLTF(PlantModel);

  return <primitive object={scene} position={plantPosition} />;
};

export default Plant;
