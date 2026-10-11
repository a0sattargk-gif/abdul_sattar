"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroOrb() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
    camera.position.z = 7.5;

    const sculpture = new THREE.Group();
    sculpture.position.set(1.45, 1.28, 0);
    scene.add(sculpture);

    scene.add(new THREE.HemisphereLight(0x06b6d4, 0x020617, 2.8));
    const keyLight = new THREE.DirectionalLight(0x34d399, 4.5);
    keyLight.position.set(-3, 4, 6);
    scene.add(keyLight);

    const cyanRim = new THREE.PointLight(0x06b6d4, 3.5, 15);
    cyanRim.position.set(4, -2, 3);
    scene.add(cyanRim);

    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      metalness: 0.85,
      roughness: 0.15,
      emissive: 0x047857,
      emissiveIntensity: 0.7,
    });
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.82, 0.035, 180, 12, 2, 3),
      knotMaterial,
    );
    sculpture.add(knot);

    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.57, 1),
      new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      }),
    );
    wireframe.rotation.set(0.3, 0.2, 0.4);
    sculpture.add(wireframe);

    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.4,
    });
    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(1.13, 0.009, 8, 120),
      orbitMaterial,
    );
    orbit.rotation.set(0.9, 0.2, -0.55);
    sculpture.add(orbit);

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = mount.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    });
    resizeObserver.observe(mount);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    const render = () => {
      knot.rotation.x += 0.0025;
      knot.rotation.y += 0.004;
      wireframe.rotation.y -= 0.002;
      orbit.rotation.z += 0.0015;
      renderer.render(scene, camera);
      if (!reduceMotion) animationFrame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      knot.geometry.dispose();
      knotMaterial.dispose();
      wireframe.geometry.dispose();
      wireframe.material.dispose();
      orbit.geometry.dispose();
      orbitMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" />;
}
