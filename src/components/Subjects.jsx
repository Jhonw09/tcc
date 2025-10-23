import { useState } from 'react'
import ModuleContent from './ModuleContent'
import CourseContent from './CourseContent'

function Subjects({ user }) {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [completedModules, setCompletedModules] = useState(new Set())

  const subjects = [
    {
      id: 1,
      name: 'Ciência da Computação',
      description: 'Algoritmos, estruturas de dados, programação e engenharia de software',
      courses: 24,
      students: '4.2k',
      difficulty: 'Todos os níveis',
      category: 'programming',
      modules: [
        {
          id: 1,
          name: 'Algoritmos e Estruturas de Dados',
          duration: '6h',
          lessons: [
            {
              title: 'Introdução aos Algoritmos',
              content: [
                { type: 'text', data: 'Um algoritmo é uma sequência finita de instruções bem definidas para resolver um problema.' },
                { type: 'text', data: 'Características de um bom algoritmo:' },
                { type: 'list', data: ['Clareza e precisão', 'Eficiência', 'Finitude', 'Entrada e saída bem definidas'] }
              ]
            },
            {
              title: 'Complexidade de Algoritmos',
              content: [
                { type: 'text', data: 'A complexidade mede o desempenho de um algoritmo em termos de tempo e espaço.' },
                { type: 'text', data: 'Notação Big O - principais complexidades:' },
                { type: 'list', data: ['O(1) - Constante', 'O(log n) - Logarítmica', 'O(n) - Linear', 'O(n²) - Quadrática'] }
              ]
            },
            {
              title: 'Arrays e Listas',
              content: [
                { type: 'text', data: 'Arrays são estruturas de dados que armazenam elementos em posições contíguas na memória.' },
                { type: 'code', data: 'int array[5] = {1, 2, 3, 4, 5};\n// Acesso: O(1)\n// Busca: O(n)\n// Inserção: O(n)' }
              ]
            }
          ],
          quiz: [
            {
              question: 'Qual é a complexidade de tempo para acessar um elemento em um array?',
              options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
              correct: 0
            },
            {
              question: 'O que caracteriza um algoritmo eficiente?',
              options: ['Apenas rapidez', 'Baixo uso de memória e tempo', 'Código curto', 'Facilidade de leitura'],
              correct: 1
            }
          ]
        },
        {
          id: 2,
          name: 'Programação Orientada a Objetos',
          duration: '8h',
          lessons: [
            {
              title: 'Conceitos Fundamentais de POO',
              content: [
                { type: 'text', data: 'A Programação Orientada a Objetos é um paradigma baseado em objetos que contêm dados e código.' },
                { type: 'text', data: 'Pilares da POO:' },
                { type: 'list', data: ['Encapsulamento', 'Herança', 'Polimorfismo', 'Abstração'] }
              ]
            },
            {
              title: 'Classes e Objetos',
              content: [
                { type: 'text', data: 'Uma classe é um modelo para criar objetos. Um objeto é uma instância de uma classe.' },
                { type: 'code', data: 'class Pessoa {\n  private String nome;\n  private int idade;\n  \n  public Pessoa(String nome, int idade) {\n    this.nome = nome;\n    this.idade = idade;\n  }\n}' }
              ]
            }
          ],
          quiz: [
            {
              question: 'Qual pilar da POO permite que uma classe herde características de outra?',
              options: ['Encapsulamento', 'Herança', 'Polimorfismo', 'Abstração'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Língua Portuguesa',
      description: 'Gramática, literatura, redação e interpretação textual',
      courses: 18,
      students: '3.8k',
      difficulty: 'Fundamental ao Superior',
      category: 'portuguese',
      modules: [
        {
          id: 3,
          name: 'Gramática Normativa',
          duration: '5h',
          lessons: [
            {
              title: 'Classes de Palavras',
              content: [
                { type: 'text', data: 'As palavras da língua portuguesa são classificadas em dez classes gramaticais.' },
                { type: 'list', data: ['Substantivo', 'Adjetivo', 'Artigo', 'Numeral', 'Pronome', 'Verbo', 'Advérbio', 'Preposição', 'Conjunção', 'Interjeição'] },
                { type: 'text', data: 'Cada classe tem funções específicas na construção do sentido.' }
              ]
            },
            {
              title: 'Sintaxe do Período Simples',
              content: [
                { type: 'text', data: 'O período simples é formado por apenas uma oração, que possui um verbo ou locução verbal.' },
                { type: 'text', data: 'Termos essenciais da oração:' },
                { type: 'list', data: ['Sujeito (simples, composto, oculto, indeterminado)', 'Predicado (verbal, nominal, verbo-nominal)'] }
              ]
            }
          ],
          quiz: [
            {
              question: 'Quantas classes de palavras existem na língua portuguesa?',
              options: ['8', '9', '10', '11'],
              correct: 2
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: 'Matemática',
      description: 'Álgebra, geometria, cálculo, estatística e matemática aplicada',
      courses: 32,
      students: '5.1k',
      difficulty: 'Básico ao Avançado',
      category: 'math',
      modules: [
        {
          id: 4,
          name: 'Cálculo Diferencial',
          duration: '10h',
          lessons: [
            {
              title: 'Limites e Continuidade',
              content: [
                { type: 'text', data: 'O limite de uma função descreve o comportamento da função quando a variável se aproxima de um valor.' },
                { type: 'text', data: 'Definição formal de limite:' },
                { type: 'code', data: 'lim(x→a) f(x) = L\n\nSe para todo ε > 0, existe δ > 0 tal que:\n|f(x) - L| < ε sempre que 0 < |x - a| < δ' }
              ]
            },
            {
              title: 'Derivadas',
              content: [
                { type: 'text', data: 'A derivada mede a taxa de variação instantânea de uma função.' },
                { type: 'code', data: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h\n\nRegras básicas:\n(x^n)' = n·x^(n-1)\n(sen x)' = cos x\n(e^x)' = e^x" }
              ]
            }
          ],
          quiz: [
            {
              question: 'Qual é a derivada de x³?',
              options: ['3x²', 'x²', '3x', 'x³'],
              correct: 0
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'Ciências Naturais',
      description: 'Física, química, biologia e ciências da terra',
      courses: 28,
      students: '3.6k',
      difficulty: 'Médio ao Superior',
      category: 'science',
      modules: [
        {
          id: 5,
          name: 'Física Clássica',
          duration: '8h',
          lessons: [
            {
              title: 'Leis de Newton',
              content: [
                { type: 'text', data: 'As três leis de Newton formam a base da mecânica clássica.' },
                { type: 'list', data: ['1ª Lei (Inércia): Um corpo em repouso tende a permanecer em repouso', '2ª Lei (F=ma): A força é proporcional à aceleração', '3ª Lei (Ação e Reação): Para toda ação há uma reação igual e oposta'] },
                { type: 'code', data: 'F = m × a\nonde:\nF = força (N)\nm = massa (kg)\na = aceleração (m/s²)' }
              ]
            }
          ],
          quiz: [
            {
              question: 'Segundo a 2ª Lei de Newton, se dobrarmos a massa e mantivermos a força constante, a aceleração:',
              options: ['Dobra', 'Fica pela metade', 'Quadruplica', 'Permanece igual'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'Administração e Negócios',
      description: 'Gestão empresarial, marketing, finanças e empreendedorismo',
      courses: 20,
      students: '2.9k',
      difficulty: 'Intermediário ao Avançado',
      category: 'business',
      modules: [
        {
          id: 6,
          name: 'Gestão Estratégica',
          duration: '6h',
          lessons: [
            {
              title: 'Planejamento Estratégico',
              content: [
                { type: 'text', data: 'O planejamento estratégico é o processo de definição da direção e escopo de uma organização.' },
                { type: 'text', data: 'Etapas do planejamento estratégico:' },
                { type: 'list', data: ['Análise do ambiente externo e interno', 'Definição de missão, visão e valores', 'Estabelecimento de objetivos e metas', 'Formulação de estratégias', 'Implementação e controle'] }
              ]
            }
          ],
          quiz: [
            {
              question: 'Qual ferramenta é usada para analisar Forças, Fraquezas, Oportunidades e Ameaças?',
              options: ['PDCA', 'SWOT', '5W2H', 'BSC'],
              correct: 1
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Engenharia',
      description: 'Engenharia civil, elétrica, mecânica e de produção',
      courses: 26,
      students: '2.4k',
      difficulty: 'Avançado',
      category: 'engineering',
      modules: [
        {
          id: 7,
          name: 'Resistência dos Materiais',
          duration: '12h',
          lessons: [
            {
              title: 'Tensão e Deformação',
              content: [
                { type: 'text', data: 'Tensão é a força interna por unidade de área que atua em um material.' },
                { type: 'code', data: 'σ = F/A\nonde:\nσ = tensão (Pa)\nF = força aplicada (N)\nA = área da seção transversal (m²)' },
                { type: 'text', data: 'Deformação é a mudança relativa de dimensão ou forma de um corpo.' }
              ]
            }
          ],
          quiz: [
            {
              question: 'Se uma barra de aço com área de 100 mm² suporta uma força de 50 kN, qual a tensão?',
              options: ['500 MPa', '50 MPa', '5 MPa', '0.5 MPa'],
              correct: 0
            }
          ]
        }
      ]
    }
  ]

  if (selectedSubject) {
    const subject = subjects.find(s => s.id === selectedSubject)
    return (
      <div>
        <button 
          onClick={() => setSelectedSubject(null)}
          className="btn btn-secondary"
          style={{ marginBottom: '1.5rem' }}
        >
          ← Voltar às Disciplinas
        </button>
        
        <div className={`subject-card ${subject.category}`}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 className="subject-title" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{subject.name}</h1>
            <p className="subject-description" style={{ fontSize: '1rem' }}>{subject.description}</p>
          </div>
          
          <div className="grid" style={{ marginBottom: '2rem' }}>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#3b82f6' }}>{subject.courses}</div>
              <div className="stat-label">Cursos Disponíveis</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#10b981' }}>{subject.students}</div>
              <div className="stat-label">Estudantes Ativos</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#f59e0b' }}>4.9</div>
              <div className="stat-label">Avaliação Média</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ color: '#8b5cf6' }}>95%</div>
              <div className="stat-label">Taxa de Conclusão</div>
            </div>
          </div>
          
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Módulos de Aprendizagem</h3>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            {subject.modules.map((module, index) => (
              <div key={index} className="card" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '1.25rem',
                opacity: completedModules.has(module.id) ? 0.7 : 1,
                border: completedModules.has(module.id) ? '2px solid #10b981' : '1px solid #334155'
              }}>
                <div>
                  <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem', fontWeight: '600' }}>
                    {completedModules.has(module.id) ? '✓ ' : ''}{module.name}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                    {module.lessons.length} aulas • {module.duration} de conteúdo
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    className="btn" 
                    style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                    onClick={() => setSelectedModule(module)}
                  >
                    {completedModules.has(module.id) ? 'Revisar' : 'Iniciar'}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => alert('Download do programa iniciado!')}
            >
              Baixar Programa Completo
            </button>
            <button 
              className="btn" 
              style={{ padding: '0.75rem 2rem' }}
              onClick={() => alert('Matrícula realizada com sucesso! Bem-vindo ao curso.')}
            >
              Matricular-se Agora
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleModuleComplete = (moduleId, score) => {
    const newCompleted = new Set(completedModules)
    newCompleted.add(moduleId)
    setCompletedModules(newCompleted)
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Disciplinas</h1>
        <p className="page-subtitle">Explore nossas áreas de conhecimento e comece a aprender</p>
      </div>
      
      <div className="grid">
        {subjects.map(subject => (
          <div key={subject.id} className={`subject-card ${subject.category}`}>
            <h3 className="subject-title">{subject.name}</h3>
            <p className="subject-description">{subject.description}</p>
            
            <div className="subject-stats">
              <span>{subject.courses} cursos</span>
              <span>{subject.students} estudantes</span>
              <span>{subject.difficulty}</span>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedSubject(subject.id)}
                style={{ flex: 1 }}
              >
                Ver Módulos
              </button>
              <button 
                className="btn"
                onClick={() => setSelectedCourse({ id: subject.id, name: subject.name })}
                style={{ flex: 1 }}
              >
                Iniciar Curso
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {user.role === 'teacher' && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Painel do Educador</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Criar Conteúdo</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>Desenvolva novos cursos e materiais</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
                onClick={() => alert('Editor de conteúdo em desenvolvimento')}
              >
                Nova Disciplina
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Gerenciar Turmas</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>Acompanhe o progresso dos estudantes</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
                onClick={() => alert('Painel de turmas em desenvolvimento')}
              >
                Ver Turmas
              </button>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Relatórios</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1rem' }}>Análises e métricas detalhadas</p>
              <button 
                className="btn" 
                style={{ width: '100%' }}
                onClick={() => alert('Sistema de relatórios em desenvolvimento')}
              >
                Gerar Relatório
              </button>
            </div>
          </div>
        </div>
      )}
      
      {selectedModule && (
        <ModuleContent 
          module={selectedModule}
          onClose={() => setSelectedModule(null)}
          onComplete={handleModuleComplete}
        />
      )}
      
      {selectedCourse && (
        <CourseContent 
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      )}
    </div>
  )
}

export default Subjects