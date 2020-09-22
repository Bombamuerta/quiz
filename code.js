const questions = [
  {
    title: 'Как зовут Ярика?',
    a: 'Ярослав',
    b: 'Наталья',
    c: 'Мистер Мускул',
    d: 'Его не зовут...',
    correct: 'a',
  },
  {
    title: 'Какой язык программирования лучше?',
    a: 'JavaScript',
    b: 'Python',
    c: 'C',
    d: 'Пффф.. муть а не вопрос',
    correct: 'd',
  },
  {
    title: 'Кто проживает на дне океана?',
    a: 'Я',
    b: 'Губка Боб',
    c: 'Ярик',
    d: 'php',
    correct: 'b',
  },
  {
    title: 'Что из перечисленного возмутительно?',
    a: 'Ярик',
    b: 'Ярик и карлики',
    c: 'Вареный лук',
    d: 'Усы Лукашенко',
    correct: 'd',
  },
  {
    title: 'Когда я научусь программировать?',
    a: 'Никогда',
    b: 'Ярик научится быстрее',
    c: 'Карлики и те, лучше тебя!!!',
    d: 'хз..',
    correct: 'd',
  },
  {
    title: 'Как вам это тест?',
    a: 'Круто!',
    b: 'Офигенно!',
    c: 'Фантастика!!!',
    d: '...ярик...',
    correct: 'd',
  },
]

console.table(questions)

const header = document.getElementById('header')
const a_text = document.getElementById('a_label')
const b_text = document.getElementById('b_label')
const d_text = document.getElementById('d_label')
const c_text = document.getElementById('c_label')

const btn = document.getElementById('submit')
const reset = document.getElementById('reset')

const endGame = document.getElementById('end')
const endMessage = document.getElementById('message')

const answerElements = document.querySelectorAll('.answer')

let currentQuiz = 0
let score = 0

const deselectAnswers = () => {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false
  })
}

const loadQuiz = () => {
  deselectAnswers()
  const currentQuizData = questions[currentQuiz]
  header.innerText = currentQuizData.title
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

loadQuiz()

const getSelected = () => {
  let answer = undefined

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

btn.addEventListener('click', () => {
  const answer = getSelected()

  if (answer) {
    if (answer === questions[currentQuiz].correct) {
      score++
      console.log(score)
    }
    currentQuiz++
    if (currentQuiz < questions.length) {
      loadQuiz()
    } else {
      endGame.classList.add('active')
      endMessage.innerText = `Игра окончена, вы угадали ${score} из ${questions.length}`
    }
  }
})

reset.addEventListener('click', () => {
  location.reload()
})
