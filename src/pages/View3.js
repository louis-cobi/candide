import React, { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds, Loader } from "@react-three/drei";
import Header from "../components/Header";
import SkyComponent from "../components/SkyComponent";
import Ground from "../components/Ground";
import Plant from "../components/Plant";
import Description from "../components/Description";
import Camera from "../components/Camera";

const View = (props) => {
  const meshRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const [description, setDescription] = useState(null);

  const setShown = (event) => {
    // toggle shown state
    setIsShown((current) => !current);
  };

  const setPlantDescription = (value) => {
    setDescription(value);
  };

  const handleCloseDescription = () => {
    setIsShown(false);
  };

  return (
    <div style={{ width: "60%", height: "100%", float: "left" }}>
      <Header />
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <Suspense fallback={null}>
          <SkyComponent
            x={props.mydata.env.light.var1}
            y={props.mydata.env.light.var2}
            z={props.mydata.env.light.var3}
          />
          <group>
            {/* All these are in the same group */}
            <Camera x={props.mydata.env.x} y={props.mydata.env.y} />
            <OrbitControls makeDefault autoRotate autoRotateSpeed={1}/>
            <Ground x={props.mydata.env.x} y={props.mydata.env.y} type={props.mydata.env.type} />
            <ambientLight intensity={0.7} />
            <directionalLight />
            <Bounds>
              <SelectToZoom>
                {props.mydata.plants.map((item, i) => (
                  <Plant
                    key={i}
                    plant={item}
                    groundX={props.mydata.env.x}
                    groundY={props.mydata.env.y}
                    setIsShown={setShown}
                    setDescription={setPlantDescription}
                    isShown={isShown}
                    onClose={handleCloseDescription}
                  />
                ))}
              </SelectToZoom>
            </Bounds>
          </group>
        </Suspense>
      </Canvas>
      <Loader />
      {isShown && (
        <Description plant={description} onClose={handleCloseDescription} />
      )}
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

export default View;
