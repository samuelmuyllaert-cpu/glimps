interface AtmosphereProps {
  showGrid?: boolean;
}

export default function Atmosphere({ showGrid = true }: AtmosphereProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Grid layer */}
      {showGrid && (
        <div
          className="absolute inset-x-0 top-0"
          style={{
            height: 940,
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(27,58,92,0.05) 0 1px, transparent 1px 64px),' +
              'repeating-linear-gradient(180deg, rgba(27,58,92,0.05) 0 1px, transparent 1px 64px)',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Cool blob */}
      <div
        style={{
          position: 'absolute',
          top: -300,
          left: -280,
          width: 1240,
          height: 940,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #D8E4F0 0%, #E7EEF5 50%, transparent 100%)',
          opacity: 0.85,
          filter: 'blur(120px)',
        }}
      />

      {/* Warm blob */}
      <div
        style={{
          position: 'absolute',
          top: 560,
          right: -300,
          width: 1120,
          height: 820,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #F6D9D5 0%, #FAE7E5 50%, transparent 100%)',
          opacity: 0.85,
          filter: 'blur(130px)',
        }}
      />
    </div>
  );
}
