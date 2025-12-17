export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-[#FFE4E9] opacity-20 animate-float"
        style={{ 
          top: '10%', 
          left: '5%',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute w-24 h-24 rounded-full bg-[#D5E8F7] opacity-20 animate-float"
        style={{ 
          top: '60%', 
          left: '15%',
          animation: 'float 25s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute w-20 h-20 rounded-full bg-[#E9DFFF] opacity-20 animate-float"
        style={{ 
          top: '30%', 
          right: '10%',
          animation: 'float 22s ease-in-out infinite',
          animationDelay: '4s'
        }}
      />
      <div 
        className="absolute w-28 h-28 rounded-full bg-[#D4F1E8] opacity-20 animate-float"
        style={{ 
          bottom: '20%', 
          right: '20%',
          animation: 'float 18s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full bg-[#FFD89D] opacity-20 animate-float"
        style={{ 
          bottom: '40%', 
          left: '25%',
          animation: 'float 24s ease-in-out infinite',
          animationDelay: '3s'
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
}
