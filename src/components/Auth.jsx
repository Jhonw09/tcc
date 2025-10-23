import { useState } from 'react'

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Senhas não coincidem')
      return
    }

    // Aqui você conectará com seu backend
    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      role: formData.role || 'student'
    }
    
    onLogin(userData)
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>
            <span className="logo-text">StudyConnect</span>
            <span className="logo-plus">+</span>
          </h1>
          <p>{isLogin ? 'Entre na sua conta' : 'Crie sua conta'}</p>
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
                  placeholder="Seu nome completo"
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
                >
                  <option value="student">Aluno</option>
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
              placeholder="********"
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
                placeholder="********"
              />
            </div>
          )}

          <button type="submit" className="btn-primary">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Cadastre-se' : 'Faça login'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth