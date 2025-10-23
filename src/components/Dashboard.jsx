function Dashboard({ user }) {
  const isTeacher = user.role === 'teacher'
  
  const studentStats = [
    { title: 'Disciplinas Cursando', value: '6', color: '#3b82f6' },
    { title: 'Créditos Concluídos', value: '42', color: '#10b981' },
    { title: 'Média Geral', value: '8.7', color: '#f59e0b' },
    { title: 'Ranking da Turma', value: '12º', color: '#8b5cf6' }
  ]
  
  const teacherStats = [
    { title: 'Estudantes Orientados', value: '127', color: '#3b82f6' },
    { title: 'Disciplinas Ativas', value: '8', color: '#10b981' },
    { title: 'Publicações', value: '23', color: '#f59e0b' },
    { title: 'Avaliação Docente', value: '4.9', color: '#8b5cf6' }
  ]

  const stats = isTeacher ? teacherStats : studentStats

  const studentCourses = [
    { name: 'Algoritmos e Estruturas de Dados', progress: 85, subject: 'Ciência da Computação', credits: 6 },
    { name: 'Análise do Discurso', progress: 72, subject: 'Língua Portuguesa', credits: 4 },
    { name: 'Cálculo Diferencial II', progress: 68, subject: 'Matemática', credits: 6 },
    { name: 'Bioquímica Metabólica', progress: 45, subject: 'Ciências Naturais', credits: 4 },
    { name: 'Gestão de Projetos', progress: 90, subject: 'Administração', credits: 4 },
    { name: 'Resistência dos Materiais', progress: 38, subject: 'Engenharia', credits: 6 }
  ]
  
  const teacherClasses = [
    { name: 'Algoritmos Avançados', students: 32, time: '14:00', status: 'live', room: 'Lab 101' },
    { name: 'Engenharia de Software', students: 28, time: '16:30', status: 'scheduled', room: 'Auditório A' },
    { name: 'Banco de Dados', students: 25, time: '10:00', status: 'completed', room: 'Lab 205' },
    { name: 'Inteligência Artificial', students: 22, time: '19:00', status: 'scheduled', room: 'Lab IA' }
  ]

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">
          Bem-vindo, {user.name}! 
          <span style={{ fontSize: '0.6em', color: '#94a3b8' }}>({isTeacher ? 'Professor' : 'Estudante'})</span>
        </h1>
        <p className="page-subtitle">
          {isTeacher 
            ? 'Gerencie suas aulas e acompanhe o progresso dos estudantes' 
            : 'Acompanhe seu progresso e continue aprendendo'
          }
        </p>
      </div>

      <div className="grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.title}</div>
          </div>
        ))}
      </div>
      
      {!isTeacher && (
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Cursos Recomendados</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="course-card programming">
              <h4 style={{ marginBottom: '0.5rem' }}>Algoritmos Básicos</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>Aprenda lógica de programação</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => window.location.hash = 'subjects'}
              >
                Começar Agora
              </button>
            </div>
            <div className="course-card portuguese">
              <h4 style={{ marginBottom: '0.5rem' }}>Redação ENEM</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>Técnicas de escrita</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => window.location.hash = 'subjects'}
              >
                Começar Agora
              </button>
            </div>
            <div className="course-card math">
              <h4 style={{ marginBottom: '0.5rem' }}>Cálculo I</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem' }}>Limites e derivadas</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => window.location.hash = 'subjects'}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      )}
      
      {!isTeacher ? (
        <>
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Meu Progresso</h3>
            {studentCourses.map((course, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div>
                    <span style={{ fontWeight: '500', color: '#f8fafc' }}>{course.name}</span>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{course.subject}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{course.credits} créditos</span>
                    </div>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Atividade Recente</h3>
            <div style={{ color: '#94a3b8' }}>
              <p style={{ marginBottom: '0.5rem' }}>• Entregou projeto "Sistema de Gestão" - Nota: 9.2</p>
              <p style={{ marginBottom: '0.5rem' }}>• Participou do seminário "IA na Educação" há 2 dias</p>
              <p style={{ marginBottom: '0.5rem' }}>• Concluiu módulo "Estruturas de Dados" há 1 semana</p>
              <p>• Aprovado em "Cálculo II" com média 8.8</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Próximas Aulas</h3>
            {teacherClasses.map((classItem, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1rem', 
                background: '#334155', 
                borderRadius: '8px', 
                marginBottom: '0.75rem',
                borderLeft: `3px solid ${classItem.status === 'live' ? '#ef4444' : classItem.status === 'scheduled' ? '#3b82f6' : '#10b981'}`
              }}>
                <div>
                  <span style={{ fontWeight: '500', color: '#f8fafc' }}>{classItem.name}</span>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    {classItem.students} estudantes • {classItem.time} • {classItem.room}
                  </div>
                </div>
                <span className={`class-status ${classItem.status}`}>
                  {classItem.status === 'live' ? 'AO VIVO' : 
                   classItem.status === 'scheduled' ? 'AGENDADA' : 'CONCLUÍDA'}
                </span>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Atividade dos Estudantes</h3>
            <div style={{ color: '#94a3b8' }}>
              <p style={{ marginBottom: '0.5rem' }}>• Projeto "Sistema Web" entregue por 28 estudantes</p>
              <p style={{ marginBottom: '0.5rem' }}>• Média da turma em "Algoritmos": 8.4</p>
              <p style={{ marginBottom: '0.5rem' }}>• 12 estudantes solicitaram orientação de TCC</p>
              <p>• Seminário "Tecnologias Emergentes" confirmado para sexta</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard