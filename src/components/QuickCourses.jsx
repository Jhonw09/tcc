import { useState } from 'react'
import CourseContent from './CourseContent'

function QuickCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: 'Algoritmos e Estruturas de Dados',
      description: 'Aprenda os fundamentos da programação eficiente',
      category: 'programming',
      level: 'Intermediário',
      duration: '6 horas',
      lessons: 3,
      students: 1250
    },
    {
      id: 2,
      title: 'Gramática Portuguesa',
      description: 'Domine as regras da língua portuguesa',
      category: 'portuguese',
      level: 'Básico',
      duration: '4 horas',
      lessons: 2,
      students: 890
    },
    {
      id: 3,
      title: 'Cálculo Diferencial',
      description: 'Fundamentos do cálculo e suas aplicações',
      category: 'math',
      level: 'Avançado',
      duration: '8 horas',
      lessons: 2,
      students: 650
    }
  ]

  if (selectedCourse) {
    return (
      <CourseContent 
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
      />
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Cursos Rápidos</h1>
        <p className="page-subtitle">Cursos focados com conteúdo prático e direto ao ponto</p>
      </div>

      <div className="grid">
        {courses.map(course => (
          <div key={course.id} className={`course-card ${course.category}`}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {course.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {course.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <span>{course.lessons} aulas</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {course.students} estudantes
              </span>
              <button 
                className="btn"
                onClick={() => setSelectedCourse(course)}
                style={{ fontSize: '0.875rem' }}
              >
                Iniciar Curso
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuickCourses