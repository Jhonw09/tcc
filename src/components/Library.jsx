import { useState } from 'react'

function Library({ user }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedResource, setSelectedResource] = useState(null)

  const resources = [
    {
      id: 1,
      title: 'Algoritmos e Estruturas de Dados em C++',
      type: 'ebook',
      category: 'programming',
      author: 'Dr. Roberto Silva',
      pages: 450,
      description: 'Guia completo sobre algoritmos fundamentais e estruturas de dados com implementações em C++.',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 2,
      title: 'Cálculo Diferencial - Exercícios Resolvidos',
      type: 'exercises',
      category: 'math',
      author: 'Prof. Ana Matemática',
      pages: 200,
      description: 'Coleção de exercícios resolvidos passo a passo sobre limites, derivadas e aplicações.',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 3,
      title: 'Gramática Portuguesa Essencial',
      type: 'reference',
      category: 'portuguese',
      author: 'Profa. Maria Linguística',
      pages: 320,
      description: 'Manual de referência com regras gramaticais, exemplos e exercícios práticos.',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 4,
      title: 'Física Experimental - Laboratório Virtual',
      type: 'simulation',
      category: 'science',
      author: 'Dr. João Físico',
      pages: 0,
      description: 'Simulações interativas de experimentos de física clássica e moderna.',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 5,
      title: 'Gestão Estratégica - Casos Práticos',
      type: 'cases',
      category: 'business',
      author: 'Prof. Carlos Administração',
      pages: 180,
      description: 'Estudos de caso reais de empresas brasileiras e internacionais.',
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 6,
      title: 'Resistência dos Materiais - Tabelas e Fórmulas',
      type: 'reference',
      category: 'engineering',
      author: 'Eng. Pedro Estrutural',
      pages: 120,
      description: 'Tabelas de propriedades dos materiais e fórmulas essenciais para cálculos estruturais.',
      downloadUrl: '#',
      previewUrl: '#'
    }
  ]

  const categories = [
    { id: 'all', name: 'Todos os Recursos', count: resources.length },
    { id: 'programming', name: 'Programação', count: resources.filter(r => r.category === 'programming').length },
    { id: 'math', name: 'Matemática', count: resources.filter(r => r.category === 'math').length },
    { id: 'portuguese', name: 'Português', count: resources.filter(r => r.category === 'portuguese').length },
    { id: 'science', name: 'Ciências', count: resources.filter(r => r.category === 'science').length },
    { id: 'business', name: 'Administração', count: resources.filter(r => r.category === 'business').length },
    { id: 'engineering', name: 'Engenharia', count: resources.filter(r => r.category === 'engineering').length }
  ]

  const getTypeIcon = (type) => {
    switch(type) {
      case 'ebook': return '📚'
      case 'exercises': return '📝'
      case 'reference': return '📖'
      case 'simulation': return '🔬'
      case 'cases': return '💼'
      default: return '📄'
    }
  }

  const getTypeName = (type) => {
    switch(type) {
      case 'ebook': return 'E-book'
      case 'exercises': return 'Exercícios'
      case 'reference': return 'Referência'
      case 'simulation': return 'Simulação'
      case 'cases': return 'Casos'
      default: return 'Documento'
    }
  }

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  if (selectedResource) {
    return (
      <div>
        <button 
          onClick={() => setSelectedResource(null)}
          className="btn btn-secondary"
          style={{ marginBottom: '1.5rem' }}
        >
          ← Voltar à Biblioteca
        </button>
        
        <div className="card">
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '4rem' }}>{getTypeIcon(selectedResource.type)}</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ marginBottom: '0.5rem' }}>{selectedResource.title}</h2>
              <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
                {getTypeName(selectedResource.type)} • {selectedResource.author}
              </p>
              {selectedResource.pages > 0 && (
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  {selectedResource.pages} páginas
                </p>
              )}
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Descrição</h3>
            <p style={{ lineHeight: '1.6' }}>{selectedResource.description}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn"
              onClick={() => alert('Download iniciado: ' + selectedResource.title)}
            >
              Baixar Recurso
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => alert('Abrindo visualização online...')}
            >
              Visualizar Online
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => alert('Adicionado aos favoritos!')}
            >
              Adicionar aos Favoritos
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Biblioteca Digital</h1>
        <p className="page-subtitle">Acesse materiais de apoio, exercícios e recursos complementares</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`nav-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filteredResources.map(resource => (
          <div key={resource.id} className="course-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>{getTypeIcon(resource.type)}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                  {resource.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  {getTypeName(resource.type)} • {resource.author}
                </p>
              </div>
            </div>
            
            <p style={{ 
              color: '#94a3b8', 
              fontSize: '0.875rem', 
              lineHeight: '1.5', 
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {resource.description}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {resource.pages > 0 && (
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {resource.pages} páginas
                </span>
              )}
              <button 
                className="btn"
                onClick={() => setSelectedResource(resource)}
                style={{ fontSize: '0.875rem' }}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {user.role === 'teacher' && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Ferramentas do Educador</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Upload de Material</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Adicionar novos recursos</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => alert('Sistema de upload em desenvolvimento')}
              >
                Enviar Arquivo
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Criar Exercício</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Lista de exercícios</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => alert('Editor de exercícios em desenvolvimento')}
              >
                Novo Exercício
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Relatórios</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>Uso dos recursos</p>
              <button 
                className="btn" 
                style={{ width: '100%', fontSize: '0.875rem' }}
                onClick={() => alert('Relatórios de uso em desenvolvimento')}
              >
                Ver Estatísticas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Library