import { useState } from 'react'

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Senhas não coincidem')
      return
    }

    setIsLoading(true)
    
    setTimeout(() => {
      const userData = {
        name: formData.name || formData.email.split('@')[0],
        email: formData.email,
        role: formData.role || 'student'
      }
      
      onLogin(userData)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="auth-container">
      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <h1>
            <span className="logo-text">StudyConnect</span>
            <span className="logo-plus">+</span>
          </h1>
          <p>{isLogin ? 'Entre na sua conta e continue aprendendo' : 'Crie sua conta e comece sua jornada'}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tipo de Conta</label>
                <select
                  name="role"
                  className="form-input"
                  value={formData.role || 'student'}
                  onChange={handleChange}
                  required={!isLogin}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="student">Estudante</option>
                  <option value="teacher">Professor</option>
                </select>
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Digite sua senha"
              minLength={isLogin ? undefined : 6}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className="form-label">Confirmar Senha</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
                placeholder="Confirme sua senha"
                minLength={6}
              />
            </div>
          )}

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)' }}>
                <div style={{ 
                  width: '16px', 
                  height: '16px', 
                  border: '2px solid rgba(255, 255, 255, 0.3)', 
                  borderTop: '2px solid white', 
                  borderRadius: '50%', 
                  animation: 'spin 1s linear infinite' 
                }}></div>
                {isLogin ? 'Entrando...' : 'Criando conta...'}
              </div>
            ) : (
              isLogin ? 'Entrar' : 'Criar Conta'
            )}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? 'Novo por aqui? ' : 'Já tem uma conta? '}
          <button onClick={() => {
            setIsLogin(!isLogin)
            setFormData({ name: '', email: '', password: '', confirmPassword: '', role: 'student' })
          }}>
            {isLogin ? 'Cadastre-se gratuitamente' : 'Faça login'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
