import { useRef, useState, useEffect } from "react";
import { useTexture } from "@react-three/drei"
// grass texture 
import grassColor from "../resources/Grass004_1K_Color.jpg"
import grassAmbientOcclusion from "../resources/Grass004_1K_AmbientOcclusion.jpg"
import grassDisplacement from "../resources/Grass004_1K_Displacement.jpg"
import grassNormal from "../resources/Grass004_1K_NormalGL.jpg"
import grassRoughness from "../resources/Grass004_1K_Roughness.jpg"
//sand texture
import sandColor from "../resources/sand_Color.jpg"
import sandAmbientOcclusion from "../resources/sand_AmbientOcclusion.jpg"
import sandDisplacement from "../resources/sand_Displacement.jpg"
import sandNormal from "../resources/sand_NormalGL.jpg"
import sandRoughness from "../resources/sand_Roughness.jpg"

const Ground = (props) => {
  const [mapSize, setMapSize] = useState([]);
  const [map, setMap] = useState(grassColor);
  const [displacementMap, setDisplacementMap] = useState(grassDisplacement);
  const [normalMap, setNormalMap] = useState(grassNormal);
  const [roughnessMap, setRoughnessMap] = useState(grassRoughness);
  const [aoMap, setAoMap] = useState(grassAmbientOcclusion);


  useEffect(() => {
    if(props.type === "grass"){
      setMap(grassColor);
      setDisplacementMap(grassDisplacement);
      setNormalMap(grassNormal);
      setRoughnessMap(grassRoughness);
      setAoMap(grassAmbientOcclusion);
    }
    if(props.type === "sand"){
      setMap(sandColor);
      setDisplacementMap(sandDisplacement);
      setNormalMap(sandNormal);
      setRoughnessMap(sandRoughness);
      setAoMap(sandAmbientOcclusion);
    }
    handleMapSize();
  },[]);


  const propsMesh = useTexture({
    map: map,
    displacementMap: displacementMap,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    aoMap: aoMap,
  })
  

  const handleMapSize = () => {
    const x = props.x ;
    const y = props.y ;
    const z = 0.5;
    setMapSize([x, z, y]);
  };

  const ref = useRef();

  return (
    <mesh {...props} ref={ref} scale={1} >
      <boxGeometry args={mapSize} />
      <meshStandardMaterial
        {...propsMesh}
        displacementScale={0}
        displacementBias={0}
      />
    </mesh>
  );
};

export default Ground;
