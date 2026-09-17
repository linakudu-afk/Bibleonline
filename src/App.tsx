import { useState, useEffect } from 'react'

const categories = [
  {
    icon: '🎨',
    title: 'Лендинги и портфолио',
    description: 'Красивые одностраничные сайты, портфолио дизайнеров, бизнес-страницы',
    examples: ['Персональный сайт', 'Лендинг стартапа', 'Портфолио фотографа'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📊',
    title: 'Дашборды и аналитика',
    description: 'Интерактивные панели управления, графики, таблицы данных',
    examples: ['CRM-система', 'Аналитика продаж', 'Трекер задач'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Интернет-магазины, каталоги товаров, корзины покупок',
    examples: ['Магазин одежды', 'Каталог электроники', 'Маркетплейс'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎮',
    title: 'Игры и интерактив',
    description: 'Браузерные игры, викторины, интерактивные истории',
    examples: ['Змейка', 'Викторина', 'Мемори-карточки'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '📝',
    title: 'Инструменты',
    description: 'Калькуляторы, конвертеры, генераторы, утилиты',
    examples: ['Погодное приложение', 'Таймер Помодоро', 'Генератор паролей'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: '🎵',
    title: 'Медиа и контент',
    description: 'Музыкальные плееры, галереи, блоги, новостные сайты',
    examples: ['Музыкальный плеер', 'Фотогалерея', 'Блог-платформа'],
    color: 'from-indigo-500 to-purple-500',
  },
]

const features = [
  { icon: '⚡', text: 'React + TypeScript' },
  { icon: '🎨', text: 'Tailwind CSS' },
  { icon: '📦', text: 'Vite сборка' },
  { icon: '🖼️', text: 'AI генерация изображений' },
  { icon: '🌐', text: 'Веб-поиск для данных' },
  { icon: '📱', text: 'Адаптивный дизайн' },
]

function AnimatedCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
        <div className="text-4xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{category.description}</p>
        <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Примеры:</p>
            <ul className="space-y-1">
              {category.examples.map((ex, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></span>
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function Counter({ end, duration = 2000, label }: { end: number; duration?: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {count}+
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const demoPrompts = [
    "Создай интернет-магазин кроссовок с корзиной",
    "Сделай дашборд для отслеживания привычек",
    "Построй игру 'Змейка' на Canvas",
    "Создай калькулятор ипотеки с графиками",
    "Сделай портфолио фотографа с галереей",
  ]

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-lg text-gray-900 dark:text-white">AI Конструктор</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="animate-bounce">✨</span>
              Опиши — и получи готовый сайт
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Что тут можно
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <TypewriterText text="создать?" speed={80} />
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Любой веб-сайт или приложение — от лендинга до полноценного дашборда.
              Просто опиши, что нужно, и получи рабочий код за секунды.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span>{f.icon}</span>
                  {f.text}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 -mt-4 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter end={50} label="Типов проектов" />
            <Counter end={10} label="AI изображений" />
            <Counter end={100} label="% адаптивность" />
            <Counter end={3} label="Секунды на сборку" />
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Категории проектов
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Наведи на карточку, чтобы увидеть примеры. Каждый проект — полностью рабочий и готовый к использованию.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimatedCard key={i} category={cat} index={i} />
            ))}
          </div>
        </section>

        {/* Demo Prompts */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
              💬 Попробуй написать
            </h2>
            <p className="text-gray-400 text-center mb-8">Нажми на пример, чтобы скопировать</p>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {demoPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeTab === i
                      ? 'bg-white text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="bg-gray-950 rounded-xl p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 text-xs ml-2">prompt.txt</span>
              </div>
              <p className="text-green-400">
                <span className="text-gray-500">{'>'} </span>
                {demoPrompts[activeTab]}
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Как это работает?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: '💭',
                title: 'Опиши идею',
                desc: 'Напиши, что хочешь создать — на русском или любом другом языке. Чем подробнее, тем лучше.',
              },
              {
                step: '02',
                icon: '⚙️',
                title: 'AI создаёт код',
                desc: 'Генерируется полноценное React-приложение с TypeScript, стилями и интерактивностью.',
              },
              {
                step: '03',
                icon: '🚀',
                title: 'Готово к запуску',
                desc: 'Проект собирается и разворачивается. Ты получаешь рабочий сайт, который можно использовать.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow h-full">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Шаг {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl text-gray-300 dark:text-gray-600">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              🛠️ Технологический стек
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React', icon: '⚛️', desc: 'UI библиотека' },
                { name: 'TypeScript', icon: '📘', desc: 'Типизация' },
                { name: 'Tailwind CSS', icon: '💨', desc: 'Стилизация' },
                { name: 'Vite', icon: '⚡', desc: 'Сборщик' },
                { name: 'Font Awesome', icon: '🎯', desc: 'Иконки' },
                { name: 'AI Images', icon: '🖼️', desc: 'Генерация' },
                { name: 'Web Search', icon: '🔍', desc: 'Данные' },
                { name: 'npm', icon: '📦', desc: 'Пакеты' },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{tech.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Готов создать свой проект?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                Просто напиши в чат, что тебе нужно — и через несколько секунд получишь полностью рабочее веб-приложение.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30">
                <span>💡</span>
                <span className="font-medium">Напиши: "Создай..." и опиши свою идею</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Создано с помощью AI • React + TypeScript + Tailwind CSS + Vite
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
