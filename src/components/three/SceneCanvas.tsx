import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

interface SceneCanvasProps {
  mobileFallback?: boolean
}

function FloatingSphere() {
  return (
    <mesh castShadow receiveShadow>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.5}
        roughness={0.2}
        emissive="#0f172a"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

export function SceneCanvas({ mobileFallback = false }: SceneCanvasProps) {
  const isMobile =
    typeof window !== 'undefined' &&
    mobileFallback &&
    window.matchMedia('(max-width: 640px)').matches

  if (isMobile) {
    return (
      <div className="flex h-full items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-indigo-500/20">
        <motion.div
          className="h-28 w-28 rounded-[40%] bg-cyan-400/80 shadow-glow-soft"
          animate={{
            rotate: [0, 12, -10, 0],
            borderRadius: ['40%', '35%', '45%', '40%'],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    )
  }

  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [2.2, 1.5, 3.1], fov: 45 }}
      shadows
    >
      <color attach="background" args={['#020617']} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, 2]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, -2, -2]} intensity={0.3} color="#22d3ee" />
      <Suspense fallback={null}>
        <group position={[0, 0.1, 0]}>
          <FloatingSphere />
        </group>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  )
}

