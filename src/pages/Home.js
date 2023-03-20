import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber"
import { Html, Sky, Clone, useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Vector3, BoxBufferGeometry, CylinderGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';

const Home = () => {
    return (
        <div>
            <Header />
            <div style={styles.container}>
                <h1 style={styles.title}>Bienvenue</h1>
                <p style={styles.paragraph}>Candide est une solution digitale très simple quivous permet de créer des compositions végétales.
                Tout cela dans le but de vous projet sur une
                personnalisation de votre/vos parcelle(s).</p>
                <Link to="/view" style={styles.button}>Commencez dès maintenant !</Link>
            </div>
            <Canvas style={{ height: "100vh", width: "100vw" }}>
                <PerspectiveCamera position={[2, 2, 2]} makeDefault />
                <OrbitControls makeDefault />
                <Sky sunPosition={new Vector3(100, 10, 100)} />
                {/* <Header /> */}
                <ambientLight />
            </Canvas>
        </div>
    )
}

const styles = {
    container: {
        position: 'absolute',
        top: '300px',
        left: '30px',
        zIndex: 11,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
    },
    title: {
        fontSize: '70px',
        margin: 0,
        fontFamily: 'Voyage-Bold'
    },
    paragraph: {
        maxWidth: '600px',
        fontSize: '25px',
        marginBottom: '20px'
    },
    button: {
        textDecoration: 'none',
        color: '#fff',
        background: '#668455',
        padding: '19px 44px',
        borderRadius: '51px',
        fontWeight: '700',
        width: '230px'
    }
}

export default Home
