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
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FFD700] border-4 border-[#FFA500] text-4xl md:text-5xl cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-lg shrink-0"
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
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FFD700] border-4 border-[#FFA500] text-4xl md:text-5xl cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-lg shrink-0"
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

// Онлайн-тест
function OnlineTest() {
  const [isOpen, setIsOpen] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const questions = [
    {
      question: 'Сколько дней Бог творил мир?',
      options: ['5 дней', '6 дней', '7 дней', '10 дней'],
      correct: 1,
    },
    {
      question: 'Что Бог создал в первый день?',
      options: ['Землю', 'Воду', 'Свет', 'Деревья'],
      correct: 2,
    },
    {
      question: 'Что Бог создал на четвёртый день?',
      options: ['Рыб и птиц', 'Солнце, луну и звёзды', 'Животных', 'Человека'],
      correct: 1,
    },
    {
      question: 'Из чего Бог создал первого человека — Адама?',
      options: ['Из воды', 'Из дерева', 'Из праха земного', 'Из камня'],
      correct: 2,
    },
    {
      question: 'Как назывался сад, в котором жил Адам?',
      options: ['Рай', 'Эдем', 'Сион', 'Ханаан'],
      correct: 1,
    },
    {
      question: 'Кого Бог создал в помощь Адаму?',
      options: ['Животных', 'Ангела', 'Еву', 'Другого человека'],
      correct: 2,
    },
    {
      question: 'Что Бог сделал на седьмой день?',
      options: ['Создал человека', 'Почил (отдохнул)', 'Создал море', 'Создал небо'],
      correct: 1,
    },
  ]

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionIndex]: optionIndex })
    }
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert('Ответь на все вопросы! 😊')
      return
    }
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const correctCount = questions.filter((q, i) => answers[i] === q.correct).length
  const score = Math.round((correctCount / questions.length) * 100)

  const getResultEmoji = () => {
    if (score === 100) return '🏆'
    if (score >= 70) return '🌟'
    if (score >= 50) return '👍'
    return '📖'
  }

  const getResultText = () => {
    if (score === 100) return 'Отлично! Ты всё знаешь!'
    if (score >= 70) return 'Молодец! Хороший результат!'
    if (score >= 50) return 'Неплохо! Но можно лучше!'
    return 'Пересмотри урок и попробуй снова!'
  }

  return (
    <div className="my-10">
      {/* Кнопка-заголовок для разворачивания */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full max-w-[700px] mx-auto flex items-center justify-between bg-white rounded-[15px] px-6 py-5 shadow-lg border-[3px] border-[#9C27B0] cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.01]"
      >
        <div className="flex items-center gap-4 text-left">
          <span className="text-4xl">📝</span>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Онлайн-тест по уроку
            </h3>
            <p className="text-sm text-gray-500">
              Если нет возможности распечатать рабочую тетрадь
            </p>
          </div>
        </div>
        <span
          className={`text-3xl text-[#9C27B0] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      {/* Разворачивающийся контент */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-[700px] mx-auto bg-white rounded-[20px] p-6 md:p-8 shadow-xl border-[3px] border-[#9C27B0]">
          {!submitted ? (
            <>
              <h4 className="text-xl font-bold text-[#9C27B0] mb-6 text-center">
                🎯 Проверь свои знания!
              </h4>

              <div className="space-y-6">
                {questions.map((q, qIndex) => (
                  <div
                    key={qIndex}
                    className={`rounded-xl p-4 border-2 transition-colors ${
                      answers[qIndex] !== undefined
                        ? 'border-[#9C27B0] bg-purple-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <p className="font-bold text-gray-800 mb-3 text-left">
                      <span className="text-[#9C27B0] mr-2">{qIndex + 1}.</span>
                      {q.question}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((option, oIndex) => (
                        <label
                          key={oIndex}
                          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            answers[qIndex] === oIndex
                              ? 'bg-[#9C27B0] text-white shadow-md'
                              : 'bg-white hover:bg-purple-100 border border-gray-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            checked={answers[qIndex] === oIndex}
                            onChange={() => handleAnswer(qIndex, oIndex)}
                            className="sr-only"
                          />
                          <span
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                              answers[qIndex] === oIndex
                                ? 'border-white'
                                : 'border-gray-400'
                            }`}
                          >
                            {answers[qIndex] === oIndex && (
                              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                            )}
                          </span>
                          <span className="text-sm font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 bg-[#9C27B0] hover:bg-[#7B1FA2] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                ✅ Проверить ответы
              </button>
            </>
          ) : (
            /* Результат */
            <div className="text-center py-6">
              <div className="text-7xl mb-4">{getResultEmoji()}</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Твой результат: {correctCount} из {questions.length}
              </h4>
              <div className="text-4xl font-bold text-[#9C27B0] mb-3">{score}%</div>
              <p className="text-lg text-gray-600 mb-6">{getResultText()}</p>

              {/* Прогресс-бар */}
              <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${score}%`,
                    background:
                      score >= 70
                        ? 'linear-gradient(90deg, #4CAF50, #8BC34A)'
                        : score >= 50
                        ? 'linear-gradient(90deg, #FF9800, #FFC107)'
                        : 'linear-gradient(90deg, #F44336, #FF5722)',
                  }}
                ></div>
              </div>

              {/* Показ правильных/неправильных ответов */}
              <div className="text-left space-y-3 mb-8">
                {questions.map((q, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      answers[i] === q.correct
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-red-50 border border-red-200'
                    }`}
                  >
                    <span className="text-xl shrink-0">
                      {answers[i] === q.correct ? '✅' : '❌'}
                    </span>
                    <div className="text-sm">
                      <p className="font-bold text-gray-800">
                        {i + 1}. {q.question}
                      </p>
                      {answers[i] !== q.correct && (
                        <p className="text-green-700 mt-1">
                          Правильный ответ: <strong>{q.options[q.correct]}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="bg-[#FFD700] hover:bg-[#FFC107] text-gray-800 font-bold py-3 px-8 rounded-full text-base transition-all duration-200 hover:scale-105 shadow-lg"
              >
                🔄 Пройти тест ещё раз
              </button>
            </div>
          )}
        </div>
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
        <OnlineTest />
      </main>

      <Footer />
    </div>
  )
}
