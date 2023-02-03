import React from "react";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import Formes from "./Formes.png"
import Formes2 from "./Formes2.png"
import { Sky,Clone, useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';

// Drei is a really helpful library
// It has helpers for react-three-fiber
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import "./style.css";

// Our main React component renders a Canvas from
// react-three-fiber. The Canvas component does most
// of the hard work of setting up the scene, renderer
// and other core components of Three.js
export default function App() {
  return (
    <div>
    <div style={{ width: '60%', height: '100%', float: 'left' }}>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        {/*
          A group is used for grouping, kind og like
          groups in SVGs. The positioning of elements
          inside a group is relative to the group's
          position.
        */}
        <Sky sunPosition={new Vector3(100, 10, 100)} />
        <group>
          {/* All these are in the same group */}
          <GreenSquare />
          <Tree />
          {/* <ToolTip1 />
          <ToolTip2 /> */}
          {/* <ToolTip3 /> */}
        </group>
        {/* Let there be light! */}
        <ambientLight />
        {/*
          Use a PerspectiveCamera.
          PerspectiveCameras work like real works cameras
          and provide depth perception.
        */}
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        {/*
          This lets you rotate the camera.
          We've associated our React ref with it
          like we would do for any React component
        */}
        <OrbitControls
             enableZoom={true}
        
        />
      </Canvas>
    </div>
     <div style={{ width: '40%', height: '80%', float: 'left' }}>
     <div className="menu">
        <div className="menu-title">Formes</div>
        <div className="form-items">
          <img src={Formes} width={"40px"}></img>
          <img src={Formes2} width={"40px"}></img>
          <img src={Formes} width={"40px"}></img>
          <img src={Formes} width={"40px"}></img>
          <img src={Formes} width={"40px"}></img>
     
        </div>
        <div className="menu-title">Surface disponible</div>
        <div className="dimensions">
          <button>Longueur en cm</button>
          <button>Largeur en cm</button>
        </div>
        <div className="menu-title">Type de sol</div>
        <div className="dimensions">
          <button>Sol sableaux</button>
          <button>Sol limoneux</button>
          <button>Sol argileux</button>
          <button>Sol humidifié</button>
        </div>
        <div className="menu-title">Exposition</div>
        <div className="dimensions">
          <button>Plein soleil</button>
          <button>Ombre</button>
          <button>Mi-ombre</button>
          <button>Soleil partiel</button>
        </div>
      </div>
   </div>
    </div>
    
  );
}

// This is the thing we are interested in
// The GreenSquare component renders a mesh.
// Meshes are objects that can have a shape and
// texture.
function GreenSquare() {
  return (
    // The mesh is at the origin
    // Since it is inside a group, it is at the origin
    // of that group
    // It's rotated by 90 degrees along the X-axis
    // This is because, by default, planes are rendered
    // in the X-Y plane, where Y is the up direction
    <mesh position={[-4, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 1]}>
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <boxGeometry args={[5, 5, 0.2]} />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshBasicMaterial color="green" side={DoubleSide} />
    </mesh>
  );
}

function Plant() {
  return (
    <mesh position={[-10, 0.35, 0]} receiveShadow castShadow>
      <boxGeometry args={[0.15, 0.5, 0.2]} />
      <meshLambertMaterial color={"darkGreen"} />
    </mesh>
  );
};
// The rest of the components are just tooltips
// Drei's Html component lets you render any HTML
// inside the 3d scene. It follows the same rules
// as everything else when it comes to positioning,
// but is not actually rendered inside the canvas

// function ToolTip1() {
//   return (
//     <Html center position={[-1, 1, -1]}>
//       <div>
//         <p>Formes</p>
//         <p>Surface disponible</p>
//         <p>Type de sol</p>
//         <p>Exposition</p>
//       </div>
//     </Html>
//   );
// }

// function ToolTip2() {
//   return (
//     <Html center position={[1, -1, -1]}>
//       <p>Scroll to zoom in and out</p>
//     </Html>
//   );
// }

// function ToolTip3() {
//   return (
//     <Html center position={[-1, 1, 1]}>
//       <p>{"<== Code's on the left, with details in the comments"}</p>
//     </Html>
//   );
// }

export function Tree({ position, rotation }) {
  const tree = useGLTF('https://douges.dev/static/tree.glb');

  return (
    <group name="tree" rotation={rotation} position={[-4, 0, 0]}>
      <Clone
        receiveShadow
        castShadow
        object={tree.nodes.trunk}
        inject={<meshBasicMaterial color="black" />}
      />
      <Clone receiveShadow castShadow object={tree.nodes.foliage}/>
    </group>
  );
}
