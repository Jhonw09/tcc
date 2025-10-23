import { useState } from 'react'
import Auth from './components/Auth'
import Loading from './components/Loading'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Subjects from './components/Subjects'
import Classes from './components/Classes'
import Quiz from './components/Quiz'
import Students from './components/Students'
import Library from './components/Library'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  // Simular navegação por hash para demonstração
  useState(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['dashboard', 'subjects', 'classes', 'quiz', 'library', 'students'].includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleLogin = (userData) => {
    setIsLoading(true)
    setTimeout(() => {
      setUser(userData)
      setIsLoading(false)
    }, 2000)
  }

  const handleLogout = () => {
    setUser(null)
    setActiveTab('dashboard')
  }

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser)
  }

  if (isLoading) {
    return <Loading />
  }

  if (!user) {
    return <Auth onLogin={handleLogin} />
  }

  const isTeacher = user.role === 'teacher'

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-text">StudyConnect</span>
            <span className="logo-plus">+</span>
          </div>
          
          <div className="user-menu">
            <div className="user-info">
              <span className="user-role">{isTeacher ? 'Professor' : 'Aluno'}</span>
              <span className="user-name">{user.name}</span>
            </div>
            <button 
              className="user-avatar"
              onClick={() => setShowProfile(true)}
              style={{ cursor: 'pointer', border: 'none', background: '#3b82f6' }}
              title="Editar perfil"
            >
              {user.name?.charAt(0) || 'U'}
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
        
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('dashboard')
              window.location.hash = 'dashboard'
            }}
          >
            Dashboard
          </button>
          <button 
            className={`nav-tab ${activeTab === 'subjects' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('subjects')
              window.location.hash = 'subjects'
            }}
          >
            Disciplinas
          </button>
          <button 
            className={`nav-tab ${activeTab === 'classes' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('classes')
              window.location.hash = 'classes'
            }}
          >
            {isTeacher ? 'Aulas' : 'Cronograma'}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'quiz' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('quiz')
              window.location.hash = 'quiz'
            }}
          >
            Avaliações
          </button>
          <button 
            className={`nav-tab ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('library')
              window.location.hash = 'library'
            }}
          >
            Biblioteca
          </button>
          {isTeacher && (
            <button 
              className={`nav-tab ${activeTab === 'students' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('students')
                window.location.hash = 'students'
              }}
            >
              Estudantes
            </button>
          )}
        </div>
      </nav>

      <main className="main-app">
        <div className="container">
          {activeTab === 'dashboard' && <Dashboard user={user} />}
          {activeTab === 'subjects' && <Subjects user={user} />}
          {activeTab === 'classes' && <Classes user={user} />}
          {activeTab === 'quiz' && <Quiz user={user} />}
          {activeTab === 'library' && <Library user={user} />}
          {activeTab === 'students' && isTeacher && <Students user={user} />}
        </div>
      </main>
      
      {showProfile && (
        <Profile 
          user={user} 
          onUpdateUser={handleUpdateUser}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  )
}

export default App