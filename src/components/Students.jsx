import { useState } from 'react'

function Students({ user }) {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [filter, setFilter] = useState('all')

  const students = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      subjects: ['Programação', 'Matemática'],
      progress: 85,
      lastAccess: '2 horas atrás',
      status: 'active',
      joinDate: '15/01/2024',
      completedCourses: 3,
      totalHours: 45
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      subjects: ['Português', 'Ciências'],
      progress: 92,
      lastAccess: '1 hora atrás',
      status: 'active',
      joinDate: '10/01/2024',
      completedCourses: 5,
      totalHours: 62
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      subjects: ['Programação'],
      progress: 67,
      lastAccess: '1 dia atrás',
      status: 'inactive',
      joinDate: '20/01/2024',
      completedCourses: 2,
      totalHours: 28
    },
    {
      id: 4,
      name: 'Ana Oliveira',
      email: 'ana@email.com',
      subjects: ['Matemática', 'Ciências', 'Programação'],
      progress: 78,
      lastAccess: '30 min atrás',
      status: 'active',
      joinDate: '05/01/2024',
      completedCourses: 4,
      totalHours: 56
    }
  ]

  const filteredStudents = filter === 'all' ? students : students.filter(s => s.status === filter)

  if (selectedStudent) {
    const student = students.find(s => s.id === selectedStudent)
    return (
      <div>
        <button 
          onClick={() => setSelectedStudent(null)}
          className="btn btn-secondary"
          style={{ marginBottom: '1.5rem' }}
        >
          ← Voltar aos Alunos
        </button>
        
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div className="user-avatar" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
              {student.name.charAt(0)}
            </div>
            <div>
              <h2 style={{ marginBottom: '0.25rem' }}>{student.name}</h2>
              <p style={{ color: '#64748b' }}>{student.email}</p>
              <span className={`class-status ${student.status}`}>
                {student.status === 'active' ? 'Ativo' : 'Inativo'}
              </span>
            </div>
          </div>
          
          <div className="grid" style={{ marginBottom: '2rem' }}>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#3b82f6' }}>{student.progress}%</div>
              <div className="stat-label">Progresso Geral</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#10b981' }}>{student.completedCourses}</div>
              <div className="stat-label">Cursos Concluídos</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#f59e0b' }}>{student.totalHours}h</div>
              <div className="stat-label">Horas de Estudo</div>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Informações</h3>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Data de Ingresso:</strong> {student.joinDate}</p>
                <p style={{ marginBottom: '0.5rem' }}><strong>Último Acesso:</strong> {student.lastAccess}</p>
                <p><strong>Disciplinas:</strong> {student.subjects.join(', ')}</p>
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Progresso por Disciplina</h3>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                {student.subjects.map((subject, index) => (
                  <div key={index} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.9rem' }}>{subject}</span>
                      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                        {Math.floor(Math.random() * 30) + 70}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button 
              className="btn"
              onClick={() => alert('Sistema de mensagens em desenvolvimento')}
            >
              Enviar Mensagem
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => alert('Gerando relatório completo do estudante...')}
            >
              Ver Relatório Completo
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Meus Alunos</h1>
        <p className="page-subtitle">Acompanhe o progresso e desempenho dos seus alunos</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className={`nav-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos ({students.length})
          </button>
          <button 
            className={`nav-tab ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Ativos ({students.filter(s => s.status === 'active').length})
          </button>
          <button 
            className={`nav-tab ${filter === 'inactive' ? 'active' : ''}`}
            onClick={() => setFilter('inactive')}
          >
            Inativos ({students.filter(s => s.status === 'inactive').length})
          </button>
        </div>
      </div>

      <div className="grid">
        {filteredStudents.map(student => (
          <div key={student.id} className="course-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div className="user-avatar">
                {student.name.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {student.name}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{student.email}</p>
              </div>
              <span className={`class-status ${student.status}`}>
                {student.status === 'active' ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem' }}>Progresso Geral</span>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{student.progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${student.progress}%` }}></div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span>{student.completedCourses} cursos</span>
              <span>{student.totalHours}h estudadas</span>
              <span>{student.lastAccess}</span>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Disciplinas:</p>
              <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                {student.subjects.map((subject, index) => (
                  <span key={index} style={{ 
                    background: '#f1f5f9', 
                    color: '#475569', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem' 
                  }}>
                    {subject}
                  </span>
                ))}
              </div>
            </div>
            
            <button 
              className="btn"
              onClick={() => setSelectedStudent(student.id)}
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>

      <div className="grid" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#3b82f6' }}>{students.length}</div>
          <div className="stat-label">Total de Alunos</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#10b981' }}>
            {students.filter(s => s.status === 'active').length}
          </div>
          <div className="stat-label">Alunos Ativos</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: '#f59e0b' }}>
            {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
          </div>
          <div className="stat-label">Progresso Médio</div>
        </div>
      </div>
    </div>
  )
}

export default Students