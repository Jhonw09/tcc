import { useState } from 'react'

function Classes({ user }) {
  const [filter, setFilter] = useState('all')

  const classes = [
    {
      id: 1,
      title: 'Algoritmos e Estruturas de Dados',
      subject: 'Ciência da Computação',
      teacher: 'Dr. Ana Silva',
      time: '14:00 - 16:00',
      date: 'Hoje',
      status: 'live',
      students: 32,
      duration: '120 min',
      room: 'Lab 101',
      description: 'Implementação de árvores binárias e algoritmos de ordenação'
    },
    {
      id: 2,
      title: 'Cálculo Diferencial e Integral II',
      subject: 'Matemática',
      teacher: 'Prof. Dr. Carlos Mendes',
      time: '16:30 - 18:00',
      date: 'Hoje',
      status: 'scheduled',
      students: 28,
      duration: '90 min',
      room: 'Auditório A',
      description: 'Integrais múltiplas e aplicações em geometria'
    },
    {
      id: 3,
      title: 'Análise do Discurso Literário',
      subject: 'Língua Portuguesa',
      teacher: 'Profa. Dra. Maria Fernanda',
      time: '10:00 - 11:30',
      date: 'Amanhã',
      status: 'scheduled',
      students: 25,
      duration: '90 min',
      room: 'Sala 205',
      description: 'Estudo crítico de obras do realismo brasileiro'
    },
    {
      id: 4,
      title: 'Bioquímica Metabólica',
      subject: 'Ciências Naturais',
      teacher: 'Prof. Dr. Roberto Lima',
      time: '09:00 - 10:30',
      date: 'Ontem',
      status: 'completed',
      students: 22,
      duration: '90 min',
      room: 'Lab Química',
      description: 'Vias metabólicas e regulação enzimática'
    },
    {
      id: 5,
      title: 'Gestão Estratégica de Projetos',
      subject: 'Administração e Negócios',
      teacher: 'Prof. MSc. Luiza Santos',
      time: '19:00 - 21:00',
      date: 'Amanhã',
      status: 'scheduled',
      students: 18,
      duration: '120 min',
      room: 'Sala Executiva',
      description: 'Metodologias ágeis e gestão de stakeholders'
    },
    {
      id: 6,
      title: 'Resistência dos Materiais',
      subject: 'Engenharia',
      teacher: 'Prof. Dr. Eduardo Costa',
      time: '08:00 - 10:00',
      date: 'Sexta-feira',
      status: 'scheduled',
      students: 20,
      duration: '120 min',
      room: 'Lab Estruturas',
      description: 'Análise de tensões e deformações em estruturas'
    }
  ]

  const filteredClasses = filter === 'all' ? classes : classes.filter(c => c.status === filter)

  const getStatusText = (status) => {
    switch(status) {
      case 'live': return 'Ao Vivo'
      case 'scheduled': return 'Agendada'
      case 'completed': return 'Concluída'
      default: return status
    }
  }



  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">
          {user.role === 'teacher' ? 'Minhas Aulas' : 'Aulas Disponíveis'}
        </h1>
        <p className="page-subtitle">
          {user.role === 'teacher' 
            ? 'Gerencie suas aulas e interaja com os alunos' 
            : 'Participe das aulas ao vivo e acesse gravações'
          }
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className={`nav-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas
          </button>
          <button 
            className={`nav-tab ${filter === 'live' ? 'active' : ''}`}
            onClick={() => setFilter('live')}
          >
            Ao Vivo
          </button>
          <button 
            className={`nav-tab ${filter === 'scheduled' ? 'active' : ''}`}
            onClick={() => setFilter('scheduled')}
          >
            Agendadas
          </button>
          <button 
            className={`nav-tab ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Concluídas
          </button>
        </div>
      </div>

      <div className="grid">
        {filteredClasses.map(classItem => (
          <div key={classItem.id} className={`class-card ${classItem.status}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span className={`class-status ${classItem.status}`}>
                {getStatusText(classItem.status)}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f8fafc' }}>
              {classItem.title}
            </h3>
            
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              {classItem.subject} • {classItem.teacher}
            </p>
            
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
              {classItem.description}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <span>{classItem.date} • {classItem.time}</span>
              <span>{classItem.room}</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <span>{classItem.students} estudantes</span>
              <span>{classItem.duration}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {classItem.status === 'live' && (
                <button 
                  className="btn" 
                  style={{ flex: 1, background: '#ef4444' }}
                  onClick={() => alert('Entrando na aula ao vivo...')}
                >
                  Entrar Agora
                </button>
              )}
              {classItem.status === 'scheduled' && (
                <button 
                  className="btn" 
                  style={{ flex: 1 }}
                  onClick={() => alert('Aula agendada para ' + classItem.date + ' às ' + classItem.time)}
                >
                  Ver Detalhes
                </button>
              )}
              {classItem.status === 'completed' && (
                <button 
                  className="btn btn-secondary" 
                  style={{ flex: 1 }}
                  onClick={() => alert('Abrindo gravação da aula...')}
                >
                  Ver Gravação
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {user.role === 'teacher' && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Ferramentas do Educador</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Agendar Aula</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Criar nova sessão de ensino</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => alert('Funcionalidade de agendamento em desenvolvimento')}
              >
                Nova Aula
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Biblioteca</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Materiais e recursos</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => window.location.hash = 'library'}
              >
                Acessar
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Avaliações</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Criar provas e exercícios</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => alert('Editor de avaliações em desenvolvimento')}
              >
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

      {filteredClasses.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Nenhuma aula encontrada</h3>
          <p style={{ color: '#94a3b8' }}>
            {filter === 'all' 
              ? 'Não há aulas disponíveis no momento'
              : `Não há aulas ${getStatusText(filter).toLowerCase()} no momento`
            }
          </p>
        </div>
      )}
    </div>
  )
}

export default Classes