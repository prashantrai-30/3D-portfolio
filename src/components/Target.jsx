import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    const targetRef = useRef();
    useGSAP(() => {
        gsap.to(targetRef.current.position, {y: targetRef.current.position.y+0.5, duration: 1.5, repeat: -1, yoyo: true})
    })
  return (
    <group {...props} ref = {targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Target stand base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      {/* Target pole */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      {/* Target circles */}
      <mesh position={[0, 2, 0]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.6, 32]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
      <mesh position={[0, 2, 0.01]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 2, 0.02]} rotation={[0, 0, 0]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
    </group>
  )
}

export default Target
