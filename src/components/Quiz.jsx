import { useState } from 'react'

function Quiz({ user }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedQuiz, setSelectedQuiz] = useState(null)

  const quizzes = [
    {
      id: 1,
      title: 'JavaScript Fundamentos',
      description: 'Teste seus conhecimentos básicos em JavaScript',
      questions: 5,
      duration: '10 min',
      difficulty: 'Iniciante',
      subject: 'Programação'
    },
    {
      id: 2,
      title: 'Gramática Portuguesa',
      description: 'Avalie seus conhecimentos em gramática',
      questions: 8,
      duration: '15 min',
      difficulty: 'Intermediário',
      subject: 'Português'
    },
    {
      id: 3,
      title: 'Álgebra Linear',
      description: 'Desafie-se com problemas de álgebra',
      questions: 6,
      duration: '12 min',
      difficulty: 'Avançado',
      subject: 'Matemática'
    },
    {
      id: 4,
      title: 'Química Orgânica',
      description: 'Teste seus conhecimentos em química',
      questions: 7,
      duration: '18 min',
      difficulty: 'Avançado',
      subject: 'Ciências'
    }
  ]

  const questions = [
    {
      question: 'Qual é a forma correta de declarar uma variável em JavaScript?',
      options: ['var nome = "João"', 'variable nome = "João"', 'string nome = "João"', 'nome = "João"'],
      correct: 0
    },
    {
      question: 'O que significa JSX?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'Java XML'],
      correct: 0
    },
    {
      question: 'Qual hook é usado para gerenciar estado em React?',
      options: ['useEffect', 'useState', 'useContext', 'useReducer'],
      correct: 1
    },
    {
      question: 'Como criar um componente funcional em React?',
      options: ['function Component() {}', 'const Component = () => {}', 'class Component extends React.Component', 'Ambas A e B estão corretas'],
      correct: 3
    },
    {
      question: 'Qual propriedade CSS é usada para criar um layout flexbox?',
      options: ['display: flex', 'layout: flex', 'flex: true', 'flexbox: on'],
      correct: 0
    }
  ]

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const nextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setSelectedQuiz(null)
  }

  const startQuiz = (quizId) => {
    setSelectedQuiz(quizId)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  if (!selectedQuiz) {
    return (
      <div>
        <div className="page-header">
          <h1 className="page-title">
            {user.role === 'teacher' ? 'Gerenciar Avaliações' : 'Avaliações Disponíveis'}
          </h1>
          <p className="page-subtitle">
            {user.role === 'teacher' 
              ? 'Crie e gerencie avaliações para suas disciplinas'
              : 'Teste seus conhecimentos e acompanhe seu progresso'
            }
          </p>
        </div>
        
        <div className="grid">
          {quizzes.map(quiz => (
            <div key={quiz.id} className="course-card">
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{quiz.title}</h3>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{quiz.subject}</span>
              </div>
              
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem' }}>{quiz.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                <span>{quiz.questions} questões</span>
                <span>{quiz.duration}</span>
                <span>{quiz.difficulty}</span>
              </div>
              
              <button 
                className="btn"
                onClick={() => startQuiz(quiz.id)}
                style={{ width: '100%' }}
              >
                {user.role === 'teacher' ? 'Gerenciar' : 'Iniciar'}
              </button>
            </div>
          ))}
        </div>
        
        {user.role === 'teacher' && (
          <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Criar Nova Avaliação</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
              Crie avaliações personalizadas para suas disciplinas
            </p>
            <button 
              className="btn"
              onClick={() => alert('Editor de avaliações em desenvolvimento')}
            >
              Nova Avaliação
            </button>
          </div>
        )}
      </div>
    )
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    const selectedQuizData = quizzes.find(q => q.id === selectedQuiz)
    const isTeacher = user.role === 'teacher'
    
    return (
      <div>
        <div className="card" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quiz Concluído!</h2>
          <h3 style={{ color: '#94a3b8', marginBottom: '2rem' }}>{selectedQuizData.title}</h3>
          
          <div style={{ 
            background: percentage >= 70 ? '#dcfce7' : percentage >= 50 ? '#fef3c7' : '#fee2e2',
            color: percentage >= 70 ? '#166534' : percentage >= 50 ? '#92400e' : '#991b1b',
            padding: '2rem',
            borderRadius: '16px',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              {percentage}%
            </div>
            <p style={{ fontSize: '1.1rem' }}>
              Você acertou {score} de {questions.length} questões
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              className="btn btn-secondary" 
              onClick={resetQuiz}
            >
              Voltar aos Quiz
            </button>
            <button 
              className="btn" 
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswer(null)
                setShowResult(false)
                setScore(0)
              }}
            >
              Refazer Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div>
      <button 
        onClick={resetQuiz}
        className="btn btn-secondary"
        style={{ marginBottom: '1.5rem' }}
      >
        ← Voltar aos Quiz
      </button>
      
      <div className="card" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ color: '#64748b' }}>Questão {currentQuestion + 1} de {questions.length}</span>
            <span style={{ color: '#64748b' }}>{Math.round(progress)}% concluído</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.4' }}>{question.question}</h3>
        
        <div style={{ marginBottom: '2rem' }}>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(index)}
            >
              <span style={{ fontWeight: '500', marginRight: '0.5rem' }}>
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
        
        <button 
          className="btn" 
          onClick={nextQuestion}
          disabled={selectedAnswer === null}
          style={{ 
            width: '100%',
            opacity: selectedAnswer === null ? 0.5 : 1,
            cursor: selectedAnswer === null ? 'not-allowed' : 'pointer'
          }}
        >
          {currentQuestion + 1 === questions.length ? 'Finalizar Quiz' : 'Próxima Questão'}
        </button>
      </div>
    </div>
  )
}

export default Quiz