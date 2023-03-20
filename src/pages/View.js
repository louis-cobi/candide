import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Bounds,
  useBounds,
} from "@react-three/drei";
import {
  Vector3,
  BoxBufferGeometry,
  BoxGeometry,
  CylinderGeometry,
  TextureLoader,
} from "three";
import Header from "../components/Header";
import huaranhuay from "../models/huaranhuay.glb";
import pisonay from "../models/pisonay.glb";
import mydata from "../data.json";
import SkyComponent from "../components/SkyComponent";
import Ground from "../components/Ground";
import Plant from "../components/Plant";

const View = (props) => {
  const [jsonData, setJsonData] = useState(props.mydata);
  const [shape, setShape] = useState("cylinder");
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);
  const textureLoader = new TextureLoader();
  const [size, setSize] = useState(1);
  const [isShown, setIsShown] = useState(false);

  const changeShape = () => {
    const geometry =
      shape === "cylinder"
        ? new CylinderGeometry(1, 1, 0.3, 32)
        : new BoxBufferGeometry(1.7, 0.3, 1);
    meshRef.current.geometry.dispose();
    meshRef.current.geometry = geometry;
    setShape(shape === "cylinder" ? "box" : "cylinder");
  };

  // useEffect(() => {
  //     console.log("json ", jsonData)

  //     textureLoader.load(
  //         Texture,
  //         (loadedTexture) => {
  //             setTexture(loadedTexture);
  //         },

  //         undefined,
  //         (error) => {
  //             console.error(error);
  //         }
  //     );
  // }, []);

  useEffect(() => {
    console.log("json ", props.mydata);

    setJsonData(props.mydata);

    textureLoader.load(
      props.mydata.env.myTexture,
      (loadedTexture) => {
        setTexture(loadedTexture);
        // console.log(texture)
      },

      undefined,
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleClick = (event) => {
    // toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div style={{ width: "60%", height: "100%", float: "left" }}>
      <Header />
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <SkyComponent
          x={props.mydata.env.light.var1}
          y={props.mydata.env.light.var2}
          z={props.mydata.env.light.var3}
        />
        <group>
          {/* All these are in the same group */}
          <PerspectiveCamera
            position={props.mydata.env.camera.position}
            makeDefault
          />
          <OrbitControls makeDefault />
          <Ground x={props.mydata.env.x} y={props.mydata.env.y} />
          <ambientLight />
          <Bounds>
            <SelectToZoom>
              {props.mydata.plants.map((item) => (
                <Plant
                  key={item.name}
                  plant={item}
                  groundX={props.mydata.env.x}
                  groundY={props.mydata.env.y}
                />
              ))}
            </SelectToZoom>
          </Bounds>
        </group>
      </Canvas>
    </div>
  );
};

function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}

function Box() {
  return (
    <div className="test">
      <p>
        Les plantes sont des organismes photosynthétiques et autotrophes,
        caractérisés par des cellules végétales. Elles forment l'un des règnes
        des Eukaryota. Ce règne est un groupe monophylétique comprenant les
        plantes terrestres
      </p>
    </div>
  );
}

export default View;
