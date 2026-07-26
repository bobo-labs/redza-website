'use client';

import { useState, type CSSProperties } from 'react';
import { chileRegions } from './chileRegions';

const regionColors = ['#e21a16', '#c51713', '#f04b3f', '#971512', '#e66d5f', '#b91c18'];

export default function ChileRegionsMap() {
  const [activeId, setActiveId] = useState('CLRM');
  const activeRegion = chileRegions.find((region) => region.id === activeId) ?? chileRegions[6];

  const activateRegion = (id: string) => setActiveId(id);

  return (
    <div className="regions-map-shell">
      <div className="regions-map-stage">
        <div className="regions-map-legend" aria-hidden="true">
          <span className="legend-dot" />
          <span>Selecciona una región</span>
        </div>

        <svg
          className="regions-map"
          viewBox="0 0 760 1000"
          role="img"
          aria-labelledby="regions-map-title regions-map-description"
        >
          <title id="regions-map-title">Cobertura Redza por región de Chile</title>
          <desc id="regions-map-description">
            Mapa interactivo de las dieciséis regiones de Chile. Pasa el cursor o navega con el teclado para ver cada zona.
          </desc>
          <g className="regions-map-features" transform="matrix(1.8 0 0 1 -450 0)">
            {chileRegions.map((region, index) => (
              <path
                key={region.id}
                id={region.id}
                d={region.d}
                className={`region-shape${region.id === activeId ? ' is-active' : ''}`}
                style={{ '--region-color': regionColors[index % regionColors.length] } as CSSProperties}
                role="button"
                tabIndex={0}
                aria-label={`${region.name}. ${region.service}. Hub en ${region.hub}.`}
                onMouseEnter={() => activateRegion(region.id)}
                onPointerEnter={() => activateRegion(region.id)}
                onFocus={() => activateRegion(region.id)}
                onClick={() => activateRegion(region.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    activateRegion(region.id);
                  }
                }}
              />
            ))}
          </g>
        </svg>

        <p className="regions-map-note">16 regiones · cobertura nacional</p>
      </div>

      <aside className="region-detail" aria-live="polite">
        <p className="region-detail-kicker">Zona activa / {activeRegion.id}</p>
        <div className="region-detail-rule" aria-hidden="true" />
        <h3>{activeRegion.name}</h3>
        <p className="region-detail-hub">Hub operativo · {activeRegion.hub}</p>
        <p className="region-detail-copy">
          {activeRegion.service}. Diseñamos la ruta según el ritmo y la complejidad de tu operación.
        </p>
        <div className="region-detail-status">
          <span className="status-pulse" aria-hidden="true" />
          Cobertura disponible
        </div>
      </aside>
    </div>
  );
}
