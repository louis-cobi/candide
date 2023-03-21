import React from "react";
import { Sky } from "@react-three/drei";
import { Vector3 } from "three";

const SkyComponent = (props) => {
  return <Sky sunPosition={new Vector3(props.x, props.z, props.y)} />;
};

export default SkyComponent;
