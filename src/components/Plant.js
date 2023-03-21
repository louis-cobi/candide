import React, { useState, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useGraph } from '@react-three/fiber'

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

  const handleClick = (event) => {
    // toggle shown state
    const { plant, setIsShown, setDescription, isShown } = props
    setDescription(plant)
    setIsShown(!isShown);
  };

  const handleBlur = (event) => {
    const { onClose } = props
    onClose()
  }


  const PlantModel = require("../models/" + `${props.plant.name}` + ".glb");

  const { scene } = useGLTF(PlantModel);

  return (<mesh onClick={handleClick} onBlur={handleBlur}><primitive object={scene} position={plantPosition} /></mesh>)
};

export default Plant;
