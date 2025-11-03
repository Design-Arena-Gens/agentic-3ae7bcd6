export default function BibleBooks() {
  const oldTestament = [
    'Бытие', 'Исход', 'Левит', 'Числа', 'Второзаконие',
    'Иисус Навин', 'Судьи', 'Руфь', '1 Царств', '2 Царств',
    'Псалмы', 'Притчи', 'Екклесиаст', 'Исаия', 'Иеремия'
  ];

  const newTestament = [
    'Матфея', 'Марка', 'Луки', 'Иоанна', 'Деяния',
    'Римлянам', '1 Коринфянам', '2 Коринфянам', 'Галатам', 'Ефесянам',
    'Филиппийцам', 'Колоссянам', '1 Фессалоникийцам', 'Евреям', 'Откровение'
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-parchment to-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-grape mb-6">
            Книги <span className="text-gold">Библии</span>
          </h2>
          <p className="text-xl text-sage">
            Исследуйте богатство Божьего откровения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Old Testament */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 card-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-sage/20 to-sage/5 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-grape">Ветхий Завет</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {oldTestament.map((book, index) => (
                <button
                  key={index}
                  className="text-left px-4 py-3 rounded-xl bg-parchment hover:bg-gold/10 border border-transparent hover:border-gold/30 text-grape transition-all duration-200 hover:translate-x-1"
                >
                  <span className="text-sm font-medium">{book}</span>
                </button>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sage hover:text-gold font-medium transition-colors duration-200 flex items-center justify-center gap-2">
              Показать все
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* New Testament */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 card-shadow">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-grape">Новый Завет</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {newTestament.map((book, index) => (
                <button
                  key={index}
                  className="text-left px-4 py-3 rounded-xl bg-parchment hover:bg-gold/10 border border-transparent hover:border-gold/30 text-grape transition-all duration-200 hover:translate-x-1"
                >
                  <span className="text-sm font-medium">{book}</span>
                </button>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sage hover:text-gold font-medium transition-colors duration-200 flex items-center justify-center gap-2">
              Показать все
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
