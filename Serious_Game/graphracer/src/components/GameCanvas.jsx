import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { evaluate } from 'mathjs'; // Import du parser mathématique

const GameCanvas = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const [funcInput, setFuncInput] = useState("50 + 20 * sin(x / 40)"); // Exemple par défaut
  const [bridgeBodies, setBridgeBodies] = useState([]); // Pour stocker les morceaux du pont

  useEffect(() => {
    // Configuration de base (comme avant)
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;

    const engine = engineRef.current;
    
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#0a0e27'
      }
    });

    // 1. Sol de départ (Plateforme de gauche)
    const startPlatform = Bodies.rectangle(100, 500, 200, 20, { 
      isStatic: true,
      render: { fillStyle: '#1a1f3a' } 
    });

    // 2. Sol d'arrivée (Plateforme de droite - le but)
    const endPlatform = Bodies.rectangle(700, 500, 200, 20, { 
      isStatic: true,
      render: { fillStyle: '#1a1f3a' } 
    });

    // 3. Voiture
    const car = Bodies.rectangle(50, 450, 40, 20, {
      friction: 0.8,
      restitution: 0.2,
      render: { fillStyle: '#ff00ff' }
    });

    World.add(engine.world, [startPlatform, endPlatform, car]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  // --- FONCTION DE GÉNÉRATION DU PONT ---
  const generateBridge = () => {
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const engine = engineRef.current;

    // 1. Nettoyer l'ancien pont
    if (bridgeBodies.length > 0) {
      World.remove(engine.world, bridgeBodies);
    }

    const newSegments = [];
    const step = 10; // Résolution (un segment tous les 10px)

    // 2. Boucle pour créer les points de 200px à 600px (le trou entre les plateformes)
    for (let x = 200; x < 600; x += step) {
      try {
        // --- COEUR MATHÉMATIQUE ---
        // On calcule Y pour x
        // On divise x par une échelle pour que les ondes soient visibles (zoom)
        const scope = { x: x }; 
        const yMath = evaluate(funcInput, scope);
        
        // Conversion Math (Y monte) vers Canvas (Y descend)
        // On décale de 500px vers le bas pour partir du niveau du sol
        const yCanvas = 500 - yMath; 

        // Création d'un petit cercle physique pour former la ligne
        const segment = Bodies.circle(x, yCanvas, 5, {
          isStatic: true,
          render: { fillStyle: '#00fff9' } // Couleur Néon Cyan
        });
        
        newSegments.push(segment);
      } catch (error) {
        console.error("Erreur dans la formule:", error);
      }
    }

    // 3. Ajouter le nouveau pont au monde
    World.add(engine.world, newSegments);
    setBridgeBodies(newSegments);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-white">
      <h1 className="text-2xl font-bold mb-4 text-neon-cyan">NIVEAU 1: LE GOUFFRE</h1>
      
      <div className="relative border-4 border-neon-magenta rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.5)]">
        <div ref={sceneRef} />
      </div>

      {/* --- UI DE CONTRÔLE --- */}
      <div className="mt-6 flex gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 w-[800px]">
        <div className="flex-1">
          <label className="block text-xs text-gray-400 mb-1">FONCTION f(x) =</label>
          <input 
            type="text" 
            value={funcInput}
            onChange={(e) => setFuncInput(e.target.value)}
            className="w-full bg-black border border-neon-cyan text-neon-cyan p-2 font-mono rounded focus:outline-none focus:shadow-[0_0_10px_#00fff9]"
            placeholder="Ex: 50 * sin(x/50)"
          />
        </div>
        <button 
          onClick={generateBridge}
          className="px-6 py-2 bg-neon-magenta text-black font-bold rounded hover:bg-white transition-colors shadow-[0_0_15px_#ff00ff]"
        >
          GÉNÉRER PONT
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 font-mono">
        Astuce: Essaie <span className="text-white">0</span> (plat) ou <span className="text-white">sin(x/20)*40</span> (vagues)
      </div>
    </div>
  );
};

export default GameCanvas;