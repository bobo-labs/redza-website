const baseSequence = ['REDZA / 01', 'OPERACION COORDINADA', 'RUTAS QUE RESPONDEN', 'CARGA B2B', 'SANTIAGO — CHILE', '24—7'];
const sequence = [...baseSequence, ...baseSequence, ...baseSequence];

export default function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Sistema de marca Redza">
      <div className="brand-strip-track">
        {[...sequence, ...sequence].map((label, index) => <span className={label === 'REDZA / 01' ? 'brand-strip-lead' : undefined} key={`${label}-${index}`}>{label}</span>)}
      </div>
    </section>
  );
}
