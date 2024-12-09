import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, Text } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/scene.gltf");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Available actions:", actions);
  }, [actions]);

  useEffect(() => {
    const element = group.current; // Get the Three.js group

    if (element) {
      // Play animation when scrolling with scrubbing
      const scrollTrigger = ScrollTrigger.create({
        trigger: props.triggerRef.current,
        start: "center center",
        end: "top center",
        onEnter: () => {
          if (actions["Animation"]) {
            actions["Animation"].reset().setLoop(false).play(); // Ensure actions exist and set loop to false
          } else {
            console.warn("Animation action not found");
          }
        },
        onLeave: () => {
          if (actions["Animation"]) {
            actions["Animation"].reset().paused(); // Ensure actions exist
          } else {
            console.warn("Animation action not found");
          }
        },
      });

      return () => {
        scrollTrigger.kill(); // Clean up the ScrollTrigger instance
      };
    }
  }, [actions, props.triggerRef]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.2}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group>
                <Text fontSize={0.4} position={[0, 0, 0]}>
                  Follow Me😊
                </Text>
              </group>
              <group name="Cube_cell_0" position={[-0.699, -0.87, 0.857]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell002_1" position={[0.578, -0.34, 0.885]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell004_2" position={[0.888, -0.966, 0.529]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell005_3" position={[0.81, -0.68, 0.744]}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell006_4" position={[0.96, 0.306, 0.377]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell007_5" position={[-0.995, -0.99, 0.979]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell008_6" position={[0.198, -0.142, 0.328]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell009_7" position={[0.989, -0.439, -0.805]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell010_8" position={[0.658, -0.464, 0.417]}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell011_9" position={[-0.365, -0.055, 0.808]}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell012_10" position={[-0.53, 0.256, -0.437]}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell013_11" position={[0.284, 0.647, -0.964]}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell014_12" position={[0.677, 0.912, 0.737]}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell015_13" position={[-0.975, 0.993, 0.028]}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell016_14" position={[-0.937, -0.371, 0.246]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell017_15" position={[-0.623, 0.736, -0.106]}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell018_16" position={[0.447, 0.601, 0.924]}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell019_17" position={[0.281, -0.758, 0.84]}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell021_18" position={[0.092, 0.683, -0.024]}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell022_19" position={[-0.107, 0.671, 0.564]}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell023_20" position={[0.612, 0.75, -0.676]}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell024_21" position={[0.644, -0.006, -0.865]}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell025_22" position={[-0.813, 0.864, 0.235]}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell026_23" position={[0.82, 0.706, 0.496]}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell027_24" position={[-0.735, 0.913, 0.83]}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell028_25" position={[-0.361, -0.34, 0.873]}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell029_26" position={[0.865, -0.352, 0.405]}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell030_27" position={[0.958, -0.936, -0.881]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell031_28" position={[0.86, -0.785, 0.322]}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell032_29" position={[0.468, 0.839, 0.233]}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell033_30" position={[-0.4, -0.429, -0.747]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell034_31" position={[-0.962, 0.933, -0.157]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell035_32" position={[0.146, 0.15, 0.882]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell036_33" position={[0.819, -0.682, -0.499]}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell037_34" position={[-0.85, 0.03, 0.892]}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell038_35" position={[0.159, -0.766, -0.721]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell039_36" position={[0.673, 0.106, 0.671]}>
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell040_37" position={[0.183, 0.973, 0.545]}>
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell041_38" position={[0.486, 0.237, -0.141]}>
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell042_39" position={[0.006, 0.763, -0.711]}>
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell043_40" position={[-0.957, 0.879, -0.748]}>
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell044_41" position={[-0.792, 0.848, 0.995]}>
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell045_42" position={[-0.818, -0.397, 0.749]}>
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell046_43" position={[-0.396, -0.572, 0.111]}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell047_44" position={[0.955, 0.98, -0.977]}>
                <mesh
                  name="Object_92"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_92.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell049_45" position={[-0.118, -0.665, 0.843]}>
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell050_46" position={[0.567, -0.237, -0.321]}>
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell051_47" position={[0.918, 0.697, -0.273]}>
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell052_48" position={[0.631, 0.094, 0.96]}>
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell053_49" position={[0.871, 0.929, -0.048]}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell054_50" position={[-0.302, 0.218, 0.557]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell055_51" position={[-0.751, 0.87, -0.541]}>
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell056_52" position={[-0.822, 0.438, 0.495]}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell057_53" position={[0.032, -0.548, 0.656]}>
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell058_54" position={[0.876, 0.501, 0.965]}>
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell059_55" position={[-0.481, 0.874, 0.904]}>
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell060_56" position={[-0.626, 0.533, 0.975]}>
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell061_57" position={[-0.63, 0.813, -0.964]}>
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell062_58" position={[0.367, -0.795, 0.187]}>
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell064_59" position={[0.138, 0.885, 0.823]}>
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell065_60" position={[-0.943, 0.084, 0.342]}>
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell066_61" position={[-0.057, 0.449, -0.786]}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Cube_cell067_62" position={[0.967, 0.96, 0.337]}>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials["Material.001"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
