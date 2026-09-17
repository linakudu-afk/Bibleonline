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
          className="absolute text-2xl animate-pulse opacity-60"
          style={{ top: star.top, left: star.left, animationDelay: star.delay, animationDuration: '3s' }}
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
    <header className="flex justify-between items-center px-6 md:px-10 py-4 bg-white/40 backdrop-blur-md relative z-10 border-b border-white/20">
      <div className="flex items-center gap-2">
        <span className="text-3xl">📖</span>
        <div className="text-2xl md:text-3xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">BIBLE</span>{' '}
          <span className="bg-gradient-to-r from-[#4169E1] to-[#6B8DD6] bg-clip-text text-transparent">KIDS</span>{' '}
          <span className="text-gray-700">ONLINE</span>
        </div>
      </div>
      <nav className="hidden md:flex gap-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setActiveLink(link)
            }}
            className={`no-underline font-semibold text-sm px-4 py-2 rounded-full transition-all duration-300 ${
              activeLink === link
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg shadow-orange-200/50 scale-105'
                : 'text-gray-700 hover:bg-white/60 hover:shadow-md'
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
      {/* Мобильное меню */}
      <button className="md:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center text-xl shadow-md">☰</button>
    </header>
  )
}

// Заголовок-лента
function RibbonTitle({ text }: { text: string }) {
  return (
    <div className="inline-block relative mb-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1] to-[#6B8DD6] rounded-3xl blur-xl opacity-50"></div>
        <div
          className="relative bg-gradient-to-r from-[#2E5090] to-[#4A7BC8] text-white text-3xl md:text-5xl font-black py-5 px-12 md:px-16 uppercase tracking-wider rounded-3xl shadow-2xl"
        >
          <span className="relative z-10">{text}</span>
        </div>
      </div>
    </div>
  )
}

// Видео-секция
function VideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Массив слайдов урока "Сотворение"
  const slides = [
    {
      title: 'Слайд 1: Введение',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 2: День первый',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 3: День второй',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 4: День третий',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 5: День четвёртый',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 6: День пятый',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 7: День шестой',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 8: День седьмой',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 9: Адам и Ева',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 10: Сад Эдемский',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 11: Заключение',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
    {
      title: 'Слайд 12: Вопросы',
      url: 'https://rutube.ru/play/embed/3f85e322e17d63129d881b2212f5affe/?p=IgIuTGiTOhqD2z_9q5-swA',
    },
  ]

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="my-8">
      {/* Название текущего слайда */}
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2 drop-shadow-sm">
          {currentSlideData.title}
        </h3>
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md">
          <div className="flex gap-1">
            {Array.from({ length: slides.length }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'bg-[#4169E1] w-6'
                    : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-600 ml-2">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-5 flex-wrap md:flex-nowrap">
        <button
          onClick={goToPrevious}
          className="w-32 h-32 md:w-[135px] md:h-[135px] rounded-[2rem] bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md text-5xl md:text-6xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 shrink-0 text-[#4169E1] group"
          style={{
            boxShadow: '0 10px 40px rgba(65, 105, 225, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Предыдущий слайд"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">◀</span>
        </button>

        <div className="relative w-full max-w-[720px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4169E1] to-[#6B8DD6] rounded-3xl blur-xl opacity-40"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
            <iframe
              key={currentSlideData.url}
              width="100%"
              height="405"
              src={currentSlideData.url}
              allow="clipboard-write; autoplay"
              allowFullScreen
              className="block"
              style={{ aspectRatio: '16/9' }}
            ></iframe>
          </div>
        </div>

        <button
          onClick={goToNext}
          className="w-32 h-32 md:w-[135px] md:h-[135px] rounded-[2rem] bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md text-5xl md:text-6xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-3 shrink-0 text-[#4169E1] group"
          style={{
            boxShadow: '0 10px 40px rgba(65, 105, 225, 0.3), 0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Следующий слайд"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">▶</span>
        </button>
      </div>
    </div>
  )
}

// Карточка материала
function MaterialCard({
  type,
  title,
  icon,
  onClick,
}: {
  type: 'notebook' | 'presentation'
  title: string
  icon: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`relative group bg-white/90 backdrop-blur-md rounded-3xl px-8 py-6 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl overflow-hidden`}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
        type === 'notebook' ? 'bg-gradient-to-br from-[#4CAF50] to-[#66BB6A]' : 'bg-gradient-to-br from-[#FF6B35] to-[#FF8C42]'
      }`}></div>
      <div className="relative text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{icon}</div>
      <div className="relative text-left">
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  )
}

// Секция материалов
function MaterialsSection() {
  return (
    <div className="my-8">
      <div className="inline-block relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-2xl blur-lg opacity-60"></div>
        <div className="relative bg-gradient-to-r from-[#FFD700] to-[#FFC107] text-gray-800 text-xl md:text-3xl font-black py-4 px-8 md:px-10 rounded-2xl shadow-xl">
          📚 Материалы для урока
        </div>
      </div>

      <div className="flex justify-center gap-6 md:gap-8 mt-5 flex-wrap">
        <MaterialCard
          type="notebook"
          title="Скачать рабочую тетрадь"
          icon="📓"
          onClick={() => alert('Скачиваем рабочую тетрадь!')}
        />
        <MaterialCard
          type="presentation"
          title="Скачать презентацию"
          icon="📊"
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
        className="w-full max-w-[700px] mx-auto flex items-center justify-between bg-white/90 backdrop-blur-md rounded-3xl px-6 py-5 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
      >
        <div className="flex items-center gap-4 text-left">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">📝</span>
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
          className={`text-2xl text-[#9C27B0] transition-transform duration-300 ${
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
        <div className="max-w-[700px] mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl">
          {!submitted ? (
            <>
              <h4 className="text-xl font-black text-[#9C27B0] mb-6 text-center">
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
                className="mt-8 bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] hover:from-[#7B1FA2] hover:to-[#9C27B0] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
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
                className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] hover:from-[#FFC107] hover:to-[#FFB300] text-gray-800 font-bold py-3 px-8 rounded-2xl text-base transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
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
    <footer className="text-center py-8 relative z-10">
      <div className="inline-block bg-white/60 backdrop-blur-md rounded-2xl px-8 py-4 shadow-lg">
        <p className="text-gray-700 font-semibold text-sm">
          © 2024 Bible Kids Online — Учим Библию играя! 🙏
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(135,206,235,0.75) 0%, rgba(176,224,230,0.75) 50%, rgba(144,238,144,0.75) 100%),
          url('https://image.qwenlm.ai/generated-images/a8c92032-6fd1-4154-a8e2-bbac7bb104b4/_result.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        fontFamily: "'Nunito', 'Fredoka', sans-serif",
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
