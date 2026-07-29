'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClear, setIsClear] = useState(true);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (motionPreference.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => undefined);
    };

    syncPlayback();
    motionPreference.addEventListener('change', syncPlayback);
    return () => motionPreference.removeEventListener('change', syncPlayback);
  }, []);

  return (
    <div className={`truck-frame hero-video-frame${isClear ? ' is-clear' : ' is-softened'}`}>
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/redza_fotos/optimized/redza-hero-operacion-poster.webp"
        aria-hidden="true"
      >
        <source src="/images/redza_fotos/optimized/redza-hero-operacion.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-grade" aria-hidden="true" />
      <div className="hero-video-glass" aria-hidden="true" />
      <div className="hero-video-gridlines" aria-hidden="true" />
      <div className="hero-video-status"><span /> Operación en terreno</div>
      <button className="hero-video-control" type="button" onClick={() => setIsClear((current) => !current)} aria-pressed={!isClear} aria-label={isClear ? 'Activar efecto vidrio sobre el video' : 'Mostrar video con claridad'}>
        {isClear ? <Eye size={15} /> : <EyeOff size={15} />}
      </button>
      <div className="image-caption"><span>TRANSPORTE DE CARGA / REGISTRO 02</span><strong>CARGA EN MOVIMIENTO</strong></div>
      <div className="hero-video-index" aria-hidden="true"><span>RZ</span><strong>02 / CAMPO</strong></div>
    </div>
  );
}
