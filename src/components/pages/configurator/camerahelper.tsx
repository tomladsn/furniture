import React, { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { PerspectiveCamera, CameraHelper } from 'three';
import { useFrame } from '@react-three/fiber';

interface CameraHelperProps {
  setCameraPosition: (position: [number, number, number]) => void;
}

const CameraHelperComponent: React.FC<CameraHelperProps> = ({ setCameraPosition }) => {
  const cameraRef = useRef<PerspectiveCamera>(null);

  useHelper(cameraRef as React.MutableRefObject<PerspectiveCamera>, CameraHelper);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.updateMatrixWorld();
      // Update the camera position state
      const { x, y, z } = cameraRef.current.position;
      setCameraPosition([x, y, z]);
    }
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      fov={75}
      near={0.1}
      far={1000}
      position={[-5, 0, -4]} // Initial position
    />
  );
};

export default CameraHelperComponent;
