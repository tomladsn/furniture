import React, { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { PerspectiveCamera, CameraHelper } from 'three';
import { useFrame } from '@react-three/fiber';

const CameraHelperComponent: React.FC = () => {
  const cameraRef = useRef<PerspectiveCamera>(null);

  useHelper(cameraRef as React.MutableRefObject<PerspectiveCamera>, CameraHelper);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.updateMatrixWorld();
    }
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      fov={75}
      near={0.1}
      far={1000}
      position={[0, 0, 5]}
    />
  );
};

export default CameraHelperComponent;
