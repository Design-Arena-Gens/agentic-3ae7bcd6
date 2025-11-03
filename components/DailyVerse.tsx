export default function DailyVerse() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 card-shadow border border-gold/20 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/30 rounded-br-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold"></div>
              <span className="px-6 text-sm uppercase tracking-widest text-sage font-medium">Стих дня</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold"></div>
            </div>

            <blockquote className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-grape leading-relaxed mb-8 italic">
                "Слово Твое — светильник ноге моей<br />и свет стезе моей"
              </p>
              <footer className="text-lg text-sage font-medium">
                — Псалом 118:105
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
