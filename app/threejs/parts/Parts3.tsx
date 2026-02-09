"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Parts = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // サイズ
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene（3D空間）
    const scene = new THREE.Scene();

    // Camera（視点）
    const camera = new THREE.PerspectiveCamera(
      75, // 視野角
      width / height, // アスペクト比
      0.1, // 手前
      1000, // 奥
    );
    camera.position.z = 5;

    // Renderer（描画）
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 立方体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-screen" />;
};
