export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-cream to-warmCream border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z" />
              </svg>
              <h3 className="text-2xl font-bold text-grape">Библия онлайн</h3>
            </div>
            <p className="text-sage leading-relaxed max-w-md">
              Священное Писание доступно каждому. Читайте, изучайте и делитесь светом Божьего Слова.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-grape mb-4">Навигация</h4>
            <ul className="space-y-3">
              {['Читать Библию', 'Стих дня', 'План чтения', 'О проекте'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sage hover:text-gold transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-grape mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {['Комментарии', 'Словарь', 'Карты', 'Аудио Библия'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sage hover:text-gold transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage text-sm">
            © 2025 Библия онлайн. Слово Божье для всех.
          </p>
          <div className="flex gap-6">
            {['Конфиденциальность', 'Условия', 'Контакты'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sage hover:text-gold text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
