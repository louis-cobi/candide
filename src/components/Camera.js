import React, { useEffect, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";

const Camera = (props) => {
  const [position, setPositon] = useState([]);
  useEffect(() => {
    const groundX = props.x;
    const groundY = props.y;
    const z = (groundX + groundY) / 2
    setPositon([z, 25, 0]);
  }, []);
  return <PerspectiveCamera position={position} makeDefault />;
};

export default Camera;
