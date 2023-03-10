import React, { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber"
import Formes from "../Formes.png"
import Formes2 from "../Formes2.png"
import { Html, Sky, Clone, useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Vector3, BoxBufferGeometry, CylinderGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';
import Header from "../components/Header";
import Texture from "../assets/Grass004_1K_Color.jpg"

const View = () => {
    const [shape, setShape] = useState('cylinder')
    const meshRef = useRef()
    const [texture, setTexture] = useState(null);
    const textureLoader = new TextureLoader();
    const [size, setSize] = useState(1);

    const changeShape = () => {
        const geometry = shape === 'cylinder' ? new CylinderGeometry(1, 1, 0.3, 32) : new BoxBufferGeometry(1.7, 0.3, 1)
        meshRef.current.geometry.dispose()
        meshRef.current.geometry = geometry
        setShape(shape === 'cylinder' ? 'box' : 'cylinder')
    }

    useEffect(() => {
        textureLoader.load(
            Texture,
            (loadedTexture) => {
                setTexture(loadedTexture);
            },

            undefined,
            (error) => {
                console.error(error);
            }
        );
    }, []);

    return (
        <div>
            <div style={{ width: '60%', height: '100%', float: 'left' }}>
                <Header />
                <Canvas style={{ height: "100vh", width: "100vw" }}>
                    <Sky sunPosition={new Vector3(100, 10, 100)} />
                    <group>
                        {/* All these are in the same group */}
                        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
                        <OrbitControls makeDefault />
                        <mesh ref={meshRef} scale={[size, size, size]}>
                            <meshBasicMaterial map={texture} />
                            {shape === 'cylinder' ? (
                                <cylinderGeometry
                                    args={[1, 1, 0.3, 32]}
                                />
                            ) : (
                                    <boxBufferGeometry
                                        args={[1.7, 0.3, 1]}
                                    />
                                )}
                        </mesh>
                        <ambientLight />
                    </group>
                </Canvas>
            </div>
            <div style={{ width: '40%', height: '80%', float: 'left' }}>
                <div className="menu">
                    <div className="menu-title">Formes</div>
                    <div className="form-items">
                        <img onClick={changeShape} src={Formes} width={"40px"}></img>
                        <img src={Formes2} width={"40px"}></img>
                        <img src={Formes} width={"40px"}></img>
                        <img src={Formes} width={"40px"}></img>
                        <img src={Formes} width={"40px"}></img>

                    </div>
                    <div className="menu-title">Surface disponible</div>
                    <div className="dimensions">
                        <button>Longueur en cm</button>
                        <button>Largeur en cm</button>
                        <input
                            type="range"
                            min={0.1}
                            max={2}
                            step={0.1}
                            value={size}
                            style={{ position: 'absolute', left: '150px', top: '20px' }}
                            onChange={(e) => setSize(e.target.value)}
                        />
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

export default View
