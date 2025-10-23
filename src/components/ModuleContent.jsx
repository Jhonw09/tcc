import { useState } from 'react'

function ModuleContent({ module, onClose, onComplete }) {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(new Set())
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleCompleteLesson = () => {
    const newCompleted = new Set(completedLessons)
    newCompleted.add(currentLesson)
    setCompletedLessons(newCompleted)
    
    if (currentLesson < module.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    } else {
      setShowQuiz(true)
    }
  }

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    })
  }

  const handleQuizSubmit = () => {
    const correctAnswers = module.quiz.filter((q, index) => 
      quizAnswers[index] === q.correct
    ).length
    
    const score = (correctAnswers / module.quiz.length) * 100
    setQuizCompleted(true)
    
    if (score >= 70) {
      setTimeout(() => {
        onComplete(module.id, score)
        onClose()
      }, 2000)
    }
  }

  const lesson = module.lessons[currentLesson]

  if (showQuiz && !quizCompleted) {
    return (
      <div className="module-overlay">
        <div className="module-modal">
          <div className="module-header">
            <h2>Avaliação - {module.name}</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          
          <div className="quiz-content">
            {module.quiz.map((question, index) => (
              <div key={index} className="quiz-question">
                <h4>{question.question}</h4>
                {question.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    className={`quiz-option ${quizAnswers[index] === optIndex ? 'selected' : ''}`}
                    onClick={() => handleQuizAnswer(index, optIndex)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
            
            <button 
              className="btn"
              onClick={handleQuizSubmit}
              disabled={Object.keys(quizAnswers).length < module.quiz.length}
              style={{ 
                marginTop: '2rem',
                opacity: Object.keys(quizAnswers).length < module.quiz.length ? 0.5 : 1
              }}
            >
              Finalizar Avaliação
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    const correctAnswers = module.quiz.filter((q, index) => 
      quizAnswers[index] === q.correct
    ).length
    const score = (correctAnswers / module.quiz.length) * 100
    
    return (
      <div className="module-overlay">
        <div className="module-modal">
          <div className="quiz-result">
            <h2>Módulo Concluído!</h2>
            <div className="score-display">
              <div className="score-circle">
                <span>{Math.round(score)}%</span>
              </div>
              <p>Você acertou {correctAnswers} de {module.quiz.length} questões</p>
              {score >= 70 ? (
                <p style={{ color: '#10b981' }}>Parabéns! Você foi aprovado neste módulo.</p>
              ) : (
                <p style={{ color: '#ef4444' }}>Você precisa de pelo menos 70% para ser aprovado.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="module-overlay">
      <div className="module-modal">
        <div className="module-header">
          <h2>{module.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="module-progress">
          <div className="progress-info">
            <span>Aula {currentLesson + 1} de {module.lessons.length}</span>
            <span>{Math.round(((currentLesson + 1) / module.lessons.length) * 100)}% concluído</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentLesson + 1) / module.lessons.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="lesson-content">
          <h3>{lesson.title}</h3>
          <div className="lesson-body">
            {lesson.content.map((item, index) => {
              if (item.type === 'text') {
                return <p key={index}>{item.data}</p>
              }
              if (item.type === 'code') {
                return (
                  <pre key={index} className="code-block">
                    <code>{item.data}</code>
                  </pre>
                )
              }
              if (item.type === 'list') {
                return (
                  <ul key={index}>
                    {item.data.map((listItem, listIndex) => (
                      <li key={listIndex}>{listItem}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </div>
          
          <div className="lesson-actions">
            {currentLesson > 0 && (
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentLesson(currentLesson - 1)}
              >
                Aula Anterior
              </button>
            )}
            
            <button 
              className="btn"
              onClick={handleCompleteLesson}
            >
              {currentLesson === module.lessons.length - 1 ? 'Fazer Avaliação' : 'Próxima Aula'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleContent