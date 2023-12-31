/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf -t 
Author: Blender3D (https://sketchfab.com/Blender3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-paper-clip-7b9b151a336f4edcb9163a4d4bd06607
Title: Simple Paper Clip
*/

import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_27: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
};

// type ActionName = 'Armature|Spring_Action';

export function Model(
  props: JSX.IntrinsicElements['group'] & { sliderValue: number }
) {
  console.log(`🚀 ~ props.sliderValue:`, props.sliderValue);

  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    '/simple_paper_clip/scene.gltf'
  ) as GLTFResult;
  const { mixer } = useAnimations(animations, group);
  useEffect(() => {
    const animationAction = mixer.clipAction(animations[0]);
    animationAction.play();
    animationAction.paused = true;
    animationAction.time = props.sliderValue;
  }, [animations, group, mixer, props.sliderValue]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.012}
        >
          <group name="Paper_Clipfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[0, -0.744, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_26"
                      rotation={[-Math.PI / 2, 0, -0.042]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_27.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Paper_Clip002"
                  rotation={[-Math.PI / 2, 0, -0.042]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/simple_paper_clip/scene.gltf');
