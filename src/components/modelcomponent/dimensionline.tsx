import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { ArrowHelper } from 'three';

interface DimensionLinesProps {
  position: [number, number, number];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

function DimensionLines({ position, dimensions }: DimensionLinesProps) {
  const { width, height, depth } = dimensions;

  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = groupRef.current;

    if (group) {
      const arrowColor = 0xff0000;
      const arrowHeadLength = 2;
      const arrowHeadWidth = 1;

      const arrows = [
        { direction: new THREE.Vector3(0, 1, 0), length: height, color: 0xff0000 }, // Height Arrow
        { direction: new THREE.Vector3(1, 0, 0), length: width, color: 0x00ff00 }, // Width Arrow
        { direction: new THREE.Vector3(0, 0, 1), length: depth, color: 0x0000ff }, // Depth Arrow
      ];

      arrows.forEach(({ direction, length, color }) => {
        const arrowHelper = new ArrowHelper(direction, new THREE.Vector3(0, 0, 0), length, color, arrowHeadLength, arrowHeadWidth);
        group.add(arrowHelper);
      });
    }
  }, [height, width, depth]);

  return (
    <group ref={groupRef} position={position}>
      {/* Height Line */}
      <Line
        points={[
          [0, 0, 0],
          [0, height, 0]
        ]}
        color="red"
        lineWidth={1}
      />
      {/* Width Line */}
      <Line
        points={[
          [0, 0, 0],
          [width, 0, 0]
        ]}
        color="green"
        lineWidth={1}
      />
      {/* Depth Line */}
      <Line
        points={[
          [0, 0, 0],
          [0, 0, depth]
        ]}
        color="blue"
        lineWidth={1}
      />
      {/* Labels */}
      <Html position={[width / 2, height + 10, 0]} center>
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '4px', borderRadius: '5px', fontSize: '14px', color: 'red', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
          {`Height: ${height} cm`}
        </div>
      </Html>
      <Html position={[width + 10, 0, depth / 2]} center>
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '4px', borderRadius: '5px', fontSize: '14px', color: 'green', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
          {`Width: ${width} cm`}
        </div>
      </Html>
      <Html position={[width / 2, 0, depth + 10]} center>
        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '4px', borderRadius: '5px', fontSize: '14px', color: 'blue', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
          {`Depth: ${depth} cm`}
        </div>
      </Html>
    </group>
  );
}

export default DimensionLines;
