import { useState } from 'react'

function Profile({ user, onUpdateUser, onClose }) {
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    bio: user.bio || '',
    institution: user.institution || '',
    course: user.course || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert('Senhas não coincidem')
      return
    }

    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      bio: formData.bio,
      institution: formData.institution,
      course: formData.course
    }

    onUpdateUser(updatedUser)
    onClose()
  }

  return (
    <div className="profile-overlay">
      <div className="profile-modal">
        <div className="profile-header">
          <h2>Editar Perfil</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-section">
            <h3>Informações Pessoais</h3>
            
            <div className="form-group">
              <label className="form-label">Nome Completo</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Telefone</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Biografia</label>
              <textarea
                name="bio"
                className="form-input"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                placeholder="Conte um pouco sobre você..."
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Informações Acadêmicas</h3>
            
            <div className="form-group">
              <label className="form-label">Instituição</label>
              <input
                type="text"
                name="institution"
                className="form-input"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Nome da universidade/escola"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{user.role === 'teacher' ? 'Área de Ensino' : 'Curso'}</label>
              <input
                type="text"
                name="course"
                className="form-input"
                value={formData.course}
                onChange={handleChange}
                placeholder={user.role === 'teacher' ? 'Ex: Ciência da Computação' : 'Ex: Engenharia de Software'}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Alterar Senha</h3>
            
            <div className="form-group">
              <label className="form-label">Senha Atual</label>
              <input
                type="password"
                name="currentPassword"
                className="form-input"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Digite sua senha atual"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Nova Senha</label>
              <input
                type="password"
                name="newPassword"
                className="form-input"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Digite a nova senha"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Nova Senha</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme a nova senha"
              />
            </div>
          </div>

          <div className="profile-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn">
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile