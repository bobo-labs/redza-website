'use client';

import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (motionPreference.matches) {
        video.pause();
        setIsPlaying(false);
        return;
      }

      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    };

    syncPlayback();
    motionPreference.addEventListener('change', syncPlayback);
    return () => motionPreference.removeEventListener('change', syncPlayback);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`truck-frame hero-video-frame${isPlaying ? ' is-playing' : ' is-paused'}`}>
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
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/images/redza_fotos/optimized/redza-hero-operacion.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-grade" aria-hidden="true" />
      <div className="hero-video-gridlines" aria-hidden="true" />
      <div className="hero-video-status"><span /> Operación en terreno</div>
      <button className="hero-video-control" type="button" onClick={togglePlayback} aria-label={isPlaying ? 'Pausar video de la operación' : 'Reproducir video de la operación'}>
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      </button>
      <div className="image-caption"><span>TRANSPORTE DE CARGA / REGISTRO 02</span><strong>CARGA EN MOVIMIENTO</strong></div>
      <div className="hero-video-index" aria-hidden="true"><span>RZ</span><strong>02 / CAMPO</strong></div>
    </div>
  );
}
