function Dashboard({ user }) {
  const isTeacher = user.role === 'teacher'
  
  const studentStats = []
  
  const teacherStats = [
    { title: 'Estudantes Orientados', value: '127', color: 'var(--primary-500)', icon: '👥' },
    { title: 'Disciplinas Ativas', value: '8', color: 'var(--success-500)', icon: '📖' },
    { title: 'Publicações', value: '23', color: 'var(--warning-500)', icon: '📄' },
    { title: 'Avaliação Docente', value: '4.9', color: 'var(--accent-500)', icon: '⭐' }
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
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">
          Bem-vindo, {user.name}!
        </h1>
        <p className="page-subtitle">
          {isTeacher 
            ? 'Gerencie suas aulas e acompanhe o progresso dos estudantes' 
            : 'Acompanhe seu progresso acadêmico e continue sua jornada de aprendizado'
          }
        </p>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 'var(--spacing-sm)', 
          background: isTeacher ? 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))' : 'linear-gradient(135deg, var(--success-500), var(--primary-500))',
          color: 'white',
          padding: 'var(--spacing-sm) var(--spacing-lg)',
          borderRadius: 'var(--radius-xl)',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginTop: 'var(--spacing-md)',
          boxShadow: 'var(--shadow-md)'
        }}>
          {isTeacher ? '👨‍🏫' : '🎓'} {isTeacher ? 'Professor' : 'Estudante'}
        </div>
      </div>

      <div className="grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>{stat.icon}</div>
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.title}</div>
          </div>
        ))}
      </div>
      
      {!isTeacher && (
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-2xl)' }}>
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-50)', margin: 0 }}>Cursos Recomendados</h3>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }} className="course-card-hover">
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>💻</div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.125rem', fontWeight: '700', color: 'var(--gray-50)' }}>Algoritmos Básicos</h4>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)', lineHeight: '1.5' }}>Aprenda lógica de programação e estruturas fundamentais</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
                onClick={() => window.location.hash = 'subjects'}
              >
                Começar Agora
              </button>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.05))',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }} className="course-card-hover">
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>✍️</div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.125rem', fontWeight: '700', color: 'var(--gray-50)' }}>Redação ENEM</h4>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)', lineHeight: '1.5' }}>Técnicas avançadas de escrita e argumentação</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
                onClick={() => window.location.hash = 'subjects'}
              >
                Começar Agora
              </button>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(6, 182, 212, 0.05))',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--spacing-xl)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }} className="course-card-hover">
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>📐</div>
              <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.125rem', fontWeight: '700', color: 'var(--gray-50)' }}>Cálculo I</h4>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem', marginBottom: 'var(--spacing-lg)', lineHeight: '1.5' }}>Limites, derivadas e aplicações práticas</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <span style={{ fontSize: '1.5rem' }}>📈</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-50)', margin: 0 }}>Meu Progresso</h3>
            </div>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
              {studentCourses.map((course, index) => (
                <div key={index} style={{ 
                  background: 'rgba(51, 65, 85, 0.3)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-lg)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                }} className="progress-item-hover">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-md)' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: '600', color: 'var(--gray-50)', fontSize: '1.0625rem', marginBottom: 'var(--spacing-xs)' }}>{course.name}</h4>
                      <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>
                        <span style={{ color: 'var(--gray-400)', fontSize: '0.875rem', fontWeight: '500' }}>📚 {course.subject}</span>
                        <span style={{ color: 'var(--gray-400)', fontSize: '0.875rem', fontWeight: '500' }}>🎯 {course.credits} créditos</span>
                      </div>
                    </div>
                    <div style={{ 
                      background: course.progress >= 80 ? 'var(--success-500)' : course.progress >= 60 ? 'var(--warning-500)' : 'var(--primary-500)',
                      color: 'white',
                      padding: 'var(--spacing-xs) var(--spacing-sm)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem',
                      fontWeight: '700'
                    }}>
                      {course.progress}%
                    </div>
                  </div>
                  <div style={{ 
                    background: 'var(--gray-700)',
                    height: '8px',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      height: '100%',
                      background: course.progress >= 80 ? 'linear-gradient(135deg, var(--success-500), var(--success-600))' : 
                                 course.progress >= 60 ? 'linear-gradient(135deg, var(--warning-500), var(--warning-600))' : 
                                 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
                      width: `${course.progress}%`,
                      borderRadius: 'var(--radius-sm)',
                      transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-50)', margin: 0 }}>Atividade Recente</h3>
            </div>
            <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>🎯</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Projeto "Sistema de Gestão" entregue</p>
                  <p style={{ color: 'var(--success-500)', fontSize: '0.875rem', fontWeight: '600' }}>Nota: 9.2 • Há 1 dia</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>🎤</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Seminário "IA na Educação"</p>
                  <p style={{ color: 'var(--primary-500)', fontSize: '0.875rem', fontWeight: '600' }}>Participação confirmada • Há 2 dias</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>✅</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Módulo "Estruturas de Dados" concluído</p>
                  <p style={{ color: 'var(--accent-500)', fontSize: '0.875rem', fontWeight: '600' }}>100% completo • Há 1 semana</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>🏆</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Aprovado em "Cálculo II"</p>
                  <p style={{ color: 'var(--warning-500)', fontSize: '0.875rem', fontWeight: '600' }}>Média final: 8.8 • Há 2 semanas</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <span style={{ fontSize: '1.5rem' }}>📅</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-50)', margin: 0 }}>Próximas Aulas</h3>
            </div>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
              {teacherClasses.map((classItem, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: 'var(--spacing-lg)', 
                  background: 'rgba(51, 65, 85, 0.4)', 
                  borderRadius: 'var(--radius-lg)', 
                  border: `2px solid ${classItem.status === 'live' ? 'var(--error-500)' : classItem.status === 'scheduled' ? 'var(--primary-500)' : 'var(--success-500)'}`,
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="class-item-hover">
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: classItem.status === 'live' ? 'var(--error-500)' : classItem.status === 'scheduled' ? 'var(--primary-500)' : 'var(--success-500)' }}></div>
                  <div style={{ paddingLeft: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                      <span style={{ fontSize: '1.125rem' }}>
                        {classItem.status === 'live' ? '🔴' : classItem.status === 'scheduled' ? '🕐' : '✅'}
                      </span>
                      <h4 style={{ fontWeight: '700', color: 'var(--gray-50)', fontSize: '1.0625rem' }}>{classItem.name}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', color: 'var(--gray-400)', fontSize: '0.875rem', fontWeight: '500' }}>
                      <span>👥 {classItem.students} estudantes</span>
                      <span>🕐 {classItem.time}</span>
                      <span>📍 {classItem.room}</span>
                    </div>
                  </div>
                  <div style={{
                    background: classItem.status === 'live' ? 'var(--error-500)' : classItem.status === 'scheduled' ? 'var(--primary-500)' : 'var(--success-500)',
                    color: 'white',
                    padding: 'var(--spacing-xs) var(--spacing-md)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {classItem.status === 'live' ? 'AO VIVO' : 
                     classItem.status === 'scheduled' ? 'AGENDADA' : 'CONCLUÍDA'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
              <span style={{ fontSize: '1.5rem' }}>👥</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-50)', margin: 0 }}>Atividade dos Estudantes</h3>
            </div>
            <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>📋</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Projeto "Sistema Web" entregue</p>
                  <p style={{ color: 'var(--primary-500)', fontSize: '0.875rem', fontWeight: '600' }}>28 estudantes • Taxa de entrega: 93%</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>📊</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Média da turma em "Algoritmos"</p>
                  <p style={{ color: 'var(--success-500)', fontSize: '0.875rem', fontWeight: '600' }}>8.4 • Acima da média institucional</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>🎓</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Orientações de TCC solicitadas</p>
                  <p style={{ color: 'var(--warning-500)', fontSize: '0.875rem', fontWeight: '600' }}>12 estudantes • Aguardando aprovação</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <span style={{ fontSize: '1.25rem' }}>🎤</span>
                <div>
                  <p style={{ color: 'var(--gray-200)', fontWeight: '600', marginBottom: '0.25rem' }}>Seminário "Tecnologias Emergentes"</p>
                  <p style={{ color: 'var(--accent-500)', fontSize: '0.875rem', fontWeight: '600' }}>Confirmado para sexta-feira • 15h</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard

// Adicionar estilos CSS para hover effects
const style = document.createElement('style')
style.textContent = `
  .course-card-hover:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(59, 130, 246, 0.4) !important;
  }
  
  .progress-item-hover:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(51, 65, 85, 0.8) !important;
  }
  
  .class-item-hover:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`
document.head.appendChild(style)