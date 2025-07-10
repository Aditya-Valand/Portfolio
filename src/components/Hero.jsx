import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Load Vanta only when window.VANTA is available
    const loadVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.BIRDS) {
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          backgroundColor: 0x0e0e10,
          color1: 0xff0000,
          color2: 0x3b82f6,
          colorMode: "lerpGradient",
          birdSize: 1.2,
          wingSpan: 30.0,
          speedLimit: 5.0,
          separation: 20.0,
          cohesion: 20.0,
          alignment: 20.0,
          quantity: 5.0,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          minHeight: 200.0,
          minWidth: 200.0,
        });
        setVantaEffect(effect);
      }
    };

    // Wait until VANTA is loaded
    if (!window.VANTA) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
      script.onload = loadVanta;
      document.body.appendChild(script);
    } else {
      loadVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="min-h-screen w-full flex items-center justify-center font-clash"
    >
      <div className="text-center">
        <h1 className="text-white text-[18vw] md:text-[12vw] leading-none tracking-tight uppercase font-bold">
          Aditya
        </h1>
        <div className="space-y-4 mt-4">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto opacity-70"></div>
          <p className="text-white/90 text-[2.5vw] md:text-lg lg:text-xl font-medium tracking-[0.15em] font-heading leading-relaxed">
            "Crafting Digital Dreams Into Reality"
          </p>
          <p className="text-white/70 text-[2vw] md:text-sm lg:text-base font-light font-heading tracking-[0.2em] uppercase">
            Full Stack Developer & Problem Solver
          </p>
        </div>
      </div>
    </div>
  );
}
