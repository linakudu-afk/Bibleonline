import { useState } from 'react'

// Декоративные звёздочки
function Stars() {
  const stars = [
    { top: '10%', left: '5%', delay: '0s', emoji: '⭐' },
    { top: '20%', left: '90%', delay: '0.5s', emoji: '✨' },
    { top: '60%', left: '3%', delay: '1s', emoji: '⭐' },
    { top: '70%', left: '95%', delay: '1.5s', emoji: '✨' },
    { top: '40%', left: '8%', delay: '0.7s', emoji: '✨' },
    { top: '85%', left: '88%', delay: '1.2s', emoji: '⭐' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute text-xl animate-pulse"
          style={{ top: star.top, left: star.left, animationDelay: star.delay }}
        >
          {star.emoji}
        </span>
      ))}
    </div>
  )
}

// Шапка
function Header() {
  const [activeLink, setActiveLink] = useState('Главная')
  const links = ['Главная', 'Уроки', 'Истории', 'Игры', 'Контакты']

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-4 bg-white/30 backdrop-blur-sm relative z-10">
      <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] [text-shadow:_2px_2px_0_#FFD700]">
        BIBLE <span className="text-[#4169E1]">KIDS</span> ONLINE
      </div>
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setActiveLink(link)
            }}
            className={`no-underline font-bold text-base uppercase transition-colors duration-300 hover:text-[#FF6B35] ${
              activeLink === link
                ? 'text-[#FF6B35] border-b-[3px] border-[#FF6B35]'
                : 'text-gray-800'
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
      {/* Мобильное меню */}
      <button className="md:hidden text-2xl">☰</button>
    </header>
  )
}

// Заголовок-лента
function RibbonTitle({ text }: { text: string }) {
  return (
    <div className="inline-block relative mb-8">
      <div
        className="bg-[#2E5090] text-white text-3xl md:text-5xl font-bold py-5 px-12 md:px-16 uppercase tracking-wider"
        style={{
          clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
        }}
      >
        {text}
      </div>
    </div>
  )
}

// Видео-секция
function VideoSection() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-5 my-8 flex-wrap md:flex-nowrap">
      <button
        onClick={() => alert('Предыдущий урок')}
        className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-[#FFD700] border-4 border-[#FFA500] text-3xl cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-lg shrink-0"
      >
        ◀
      </button>

      <div className="w-full max-w-[720px] rounded-[20px] border-[6px] border-[#2E5090] overflow-hidden shadow-xl">
        <iframe
          width="100%"
          height="405"
          src="https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA"
          allow="clipboard-write; autoplay"
          allowFullScreen
          className="block"
          style={{ aspectRatio: '16/9' }}
        ></iframe>
      </div>

      <button
        onClick={() => alert('Следующий урок')}
        className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-full bg-[#FFD700] border-4 border-[#FFA500] text-3xl cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-lg shrink-0"
      >
        ▶
      </button>
    </div>
  )
}

// Карточка материала
function MaterialCard({
  type,
  title,
  icon,
  format,
  formatColor,
  onClick,
}: {
  type: 'notebook' | 'presentation'
  title: string
  icon: string
  format: string
  formatColor: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[20px] px-8 py-6 flex items-center gap-4 cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl shadow-lg border-[3px] ${
        type === 'notebook' ? 'border-[#4CAF50]' : 'border-[#FF6B35]'
      }`}
    >
      <div className="text-5xl">{icon}</div>
      <div className="text-left">
        <h3 className="text-base font-bold text-gray-800 mb-1">{title}</h3>
        <span
          className={`inline-block px-2 py-0.5 rounded-[5px] text-[11px] font-bold text-white ${formatColor}`}
        >
          {format}
        </span>
      </div>
    </div>
  )
}

// Секция материалов
function MaterialsSection() {
  return (
    <div className="my-8">
      <div className="inline-block bg-[#FFD700] text-gray-800 text-xl md:text-3xl font-bold py-4 px-8 md:px-10 rounded-[10px] uppercase shadow-lg mb-6">
        Материалы для урока
      </div>

      <div className="flex justify-center gap-6 md:gap-8 mt-5 flex-wrap">
        <MaterialCard
          type="notebook"
          title="Скачать рабочую тетрадь"
          icon="📓"
          format="PDF"
          formatColor="bg-[#E53935]"
          onClick={() => alert('Скачиваем рабочую тетрадь!')}
        />
        <MaterialCard
          type="presentation"
          title="Скачать презентацию"
          icon="📊"
          format="PPTX"
          formatColor="bg-[#FF6B35]"
          onClick={() => alert('Скачиваем презентацию!')}
        />
      </div>
    </div>
  )
}

// Футер
function Footer() {
  return (
    <footer className="text-center py-6 text-gray-700 text-sm relative z-10">
      <p>© 2024 Bible Kids Online — Учим Библию играя! 🙏</p>
    </footer>
  )
}

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #B0E0E6 50%, #90EE90 100%)',
        fontFamily: "'Comic Sans MS', Arial, sans-serif",
      }}
    >
      <Stars />
      <Header />

      <main className="max-w-[1000px] mx-auto px-5 py-8 text-center relative z-10">
        <RibbonTitle text="Сотворение" />
        <VideoSection />
        <MaterialsSection />
      </main>

      <Footer />
    </div>
  )
}
