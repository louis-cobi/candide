import { useRef, useState, useEffect } from "react";
import { useTexture } from "@react-three/drei"
// grass texture 
import grassColor from "../resources/Grass004_1K_Color.jpg"
import grassColorAmbientOcclusion from "../resources/Grass004_1K_AmbientOcclusion.jpg"
import grassColorDisplacement from "../resources/Grass004_1K_Displacement.jpg"
import grassColorNormal from "../resources/Grass004_1K_NormalDX.jpg"
import grassColorRoughness from "../resources/Grass004_1K_Roughness.jpg"

const Ground = (props) => {
  const [mapSize, setMapSize] = useState([]);

  useEffect(() => {
    handleMapSize();
  }, []);
  
  const propsMesh = useTexture({
    map: grassColor,
    displacementMap: grassColorDisplacement,
    normalMap: grassColorNormal,
    roughnessMap: grassColorRoughness,
    aoMap: grassColorAmbientOcclusion,
  })
  

  const handleMapSize = () => {
    const x = props.x ;
    const y = props.y ;
    const z = 0.5;
    setMapSize([x, z, y]);
  };

  const ref = useRef();

  return (
    <mesh {...props} ref={ref} scale={1}>
      <boxGeometry args={mapSize} />
      <meshStandardMaterial
        {...propsMesh}
      />
    </mesh>
  );
};

export default Ground;
