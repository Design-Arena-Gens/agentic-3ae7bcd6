export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sunrise gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-parchment to-warmCream">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/20 via-gold/5 to-transparent blur-3xl animate-pulse"></div>
      </div>

      {/* Decorative light rays */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/4 left-1/2 h-1 w-96 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
            style={{
              transform: `rotate(${i * 45}deg) translateX(-50%)`,
              transformOrigin: 'left center',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main heading */}
        <div className="mb-8">
          <div className="inline-block mb-4">
            <svg
              className="w-16 h-16 mx-auto text-gold drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-grape mb-6 text-shadow-soft leading-tight">
            Свет<br />
            <span className="text-gold">Священного Писания</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-sage mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Погрузитесь в глубину Божьего Слова.<br />
          Читайте, размышляйте, преображайтесь.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-10 py-4 bg-gold text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 glow-gold">
            <span className="flex items-center gap-3">
              Начать чтение
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="px-10 py-4 bg-parchment border-2 border-sage text-grape rounded-full text-lg font-medium shadow-md hover:shadow-lg hover:bg-white transition-all duration-300">
            Изучить Писание
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
