import { useState } from 'react'

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: 'JavaScript Básico',
      description: 'Aprenda os fundamentos do JavaScript e domine a linguagem mais popular da web',
      duration: '8 horas',
      level: 'Iniciante',
      students: '1.2k',
      rating: 4.8,
      lessons: [
        'Variáveis e Tipos de Dados',
        'Funções e Escopo',
        'Arrays e Objetos',
        'DOM Manipulation'
      ]
    },
    {
      id: 2,
      title: 'React Fundamentos',
      description: 'Construa aplicações web modernas e interativas com React',
      duration: '12 horas',
      level: 'Intermediário',
      students: '856',
      rating: 4.9,
      lessons: [
        'Componentes e JSX',
        'Props e State',
        'Hooks Básicos',
        'Roteamento'
      ]
    },
    {
      id: 3,
      title: 'CSS Avançado',
      description: 'Domine técnicas avançadas de CSS e crie layouts impressionantes',
      duration: '6 horas',
      level: 'Avançado',
      students: '643',
      rating: 4.7,
      lessons: [
        'Flexbox e Grid',
        'Animações CSS',
        'Responsive Design',
        'CSS Modules'
      ]
    }
  ]

  if (selectedCourse) {
    const course = courses.find(c => c.id === selectedCourse)
    return (
      <div>
        <button 
          onClick={() => setSelectedCourse(null)}
          className="btn btn-secondary"
          style={{ marginBottom: '1.5rem' }}
        >
          ← Voltar aos Cursos
        </button>
        
        <div className="card">
          <div style={{ marginBottom: '2rem' }}>
            <h1 className="page-title">{course.title}</h1>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '1rem' }}>{course.description}</p>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Duração</span>
                <p style={{ fontWeight: '600' }}>{course.duration}</p>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Nível</span>
                <p style={{ fontWeight: '600' }}>{course.level}</p>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Estudantes</span>
                <p style={{ fontWeight: '600' }}>{course.students}</p>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Avaliação</span>
                <p style={{ fontWeight: '600' }}>★ {course.rating}</p>
              </div>
            </div>
          </div>
          
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Conteúdo do Curso</h3>
          <div style={{ marginBottom: '2rem' }}>
            {course.lessons.map((lesson, index) => (
              <div key={index} style={{ 
                padding: '1rem', 
                background: '#f8fafc', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px', 
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '0.8rem', 
                  fontWeight: '600' 
                }}>
                  {index + 1}
                </div>
                <span>{lesson}</span>
              </div>
            ))}
          </div>
          
          <button className="btn" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
            Iniciar Curso
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Cursos Disponíveis</h1>
        <p className="page-subtitle">Escolha um curso e comece sua jornada de aprendizado</p>
      </div>
      
      <div className="grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{course.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{course.description}</p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
              <span>{course.duration}</span>
              <span>{course.level}</span>
              <span>★ {course.rating}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{course.students} estudantes</span>
              <button 
                className="btn"
                onClick={() => setSelectedCourse(course.id)}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses