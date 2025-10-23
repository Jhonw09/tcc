import { useState } from 'react'

function CourseContent({ course, onBack }) {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState(new Set())

  const courseData = {
    1: {
      title: 'Algoritmos e Estruturas de Dados',
      description: 'Aprenda os fundamentos da programação eficiente',
      lessons: [
        {
          title: 'Introdução aos Algoritmos',
          duration: '45 min',
          content: `
            <h3>O que são Algoritmos?</h3>
            <p>Um algoritmo é uma sequência finita de instruções bem definidas e não ambíguas, cada uma das quais pode ser executada mecanicamente num período de tempo finito e com uma quantidade de esforço finita.</p>
            
            <h4>Características de um Algoritmo:</h4>
            <ul>
              <li><strong>Finitude:</strong> Um algoritmo deve sempre terminar após um número finito de passos</li>
              <li><strong>Definição:</strong> Cada passo deve ser precisamente definido</li>
              <li><strong>Entrada:</strong> Um algoritmo tem zero ou mais entradas</li>
              <li><strong>Saída:</strong> Um algoritmo tem uma ou mais saídas</li>
              <li><strong>Efetividade:</strong> Todas as operações devem ser suficientemente básicas</li>
            </ul>

            <h4>Exemplo Prático:</h4>
            <pre><code>Algoritmo: Encontrar o maior número em uma lista
1. Inicialize maior = primeiro elemento da lista
2. Para cada elemento na lista:
   a. Se elemento > maior:
      maior = elemento
3. Retorne maior</code></pre>

            <h4>Complexidade de Algoritmos:</h4>
            <p>A complexidade mede a eficiência de um algoritmo em termos de:</p>
            <ul>
              <li><strong>Tempo:</strong> Quantas operações são necessárias</li>
              <li><strong>Espaço:</strong> Quanta memória é utilizada</li>
            </ul>
          `
        },
        {
          title: 'Notação Big O',
          duration: '50 min',
          content: `
            <h3>Notação Big O</h3>
            <p>A notação Big O descreve o comportamento assintótico de funções, especialmente útil para analisar a complexidade de algoritmos.</p>
            
            <h4>Principais Complexidades:</h4>
            <ul>
              <li><strong>O(1) - Constante:</strong> Tempo de execução não muda com o tamanho da entrada</li>
              <li><strong>O(log n) - Logarítmica:</strong> Tempo cresce logaritmicamente</li>
              <li><strong>O(n) - Linear:</strong> Tempo cresce proporcionalmente ao tamanho da entrada</li>
              <li><strong>O(n²) - Quadrática:</strong> Tempo cresce com o quadrado do tamanho da entrada</li>
            </ul>

            <h4>Exemplos Práticos:</h4>
            <pre><code>// O(1) - Acesso a array
function getFirst(array) {
    return array[0];
}

// O(n) - Busca linear
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}

// O(n²) - Bubble Sort
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}</code></pre>
          `
        },
        {
          title: 'Arrays e Listas',
          duration: '60 min',
          content: `
            <h3>Estruturas de Dados: Arrays e Listas</h3>
            <p>Arrays são estruturas de dados que armazenam elementos em posições contíguas na memória.</p>
            
            <h4>Características dos Arrays:</h4>
            <ul>
              <li>Acesso direto por índice: O(1)</li>
              <li>Tamanho fixo (em muitas linguagens)</li>
              <li>Elementos do mesmo tipo</li>
              <li>Memória contígua</li>
            </ul>

            <h4>Operações Básicas:</h4>
            <pre><code>// Declaração e inicialização
int[] numeros = {1, 2, 3, 4, 5};

// Acesso
int primeiro = numeros[0]; // O(1)

// Busca
int buscar(int[] array, int valor) {
    for (int i = 0; i < array.length; i++) {
        if (array[i] == valor) return i;
    }
    return -1; // O(n)
}

// Inserção no final
void inserir(int[] array, int valor, int posicao) {
    // Mover elementos para a direita
    for (int i = array.length - 1; i > posicao; i--) {
        array[i] = array[i - 1];
    }
    array[posicao] = valor; // O(n)
}</code></pre>

            <h4>Listas Ligadas vs Arrays:</h4>
            <table border="1">
              <tr><th>Operação</th><th>Array</th><th>Lista Ligada</th></tr>
              <tr><td>Acesso</td><td>O(1)</td><td>O(n)</td></tr>
              <tr><td>Busca</td><td>O(n)</td><td>O(n)</td></tr>
              <tr><td>Inserção</td><td>O(n)</td><td>O(1)</td></tr>
              <tr><td>Remoção</td><td>O(n)</td><td>O(1)</td></tr>
            </table>
          `
        }
      ]
    },
    2: {
      title: 'Gramática Portuguesa',
      description: 'Domine as regras da língua portuguesa',
      lessons: [
        {
          title: 'Classes de Palavras',
          duration: '40 min',
          content: `
            <h3>Classes de Palavras (Morfologia)</h3>
            <p>As palavras da língua portuguesa são classificadas em dez classes gramaticais, divididas em variáveis e invariáveis.</p>
            
            <h4>Classes Variáveis:</h4>
            <ul>
              <li><strong>Substantivo:</strong> Nomeia seres, objetos, sentimentos
                <br><em>Exemplos: casa, amor, João, felicidade</em></li>
              <li><strong>Adjetivo:</strong> Caracteriza o substantivo
                <br><em>Exemplos: bonito, inteligente, azul</em></li>
              <li><strong>Artigo:</strong> Determina o substantivo
                <br><em>Exemplos: o, a, um, uma</em></li>
              <li><strong>Numeral:</strong> Indica quantidade, ordem
                <br><em>Exemplos: dois, primeiro, dobro</em></li>
              <li><strong>Pronome:</strong> Substitui ou acompanha o substantivo
                <br><em>Exemplos: eu, meu, este, que</em></li>
              <li><strong>Verbo:</strong> Indica ação, estado, fenômeno
                <br><em>Exemplos: correr, ser, chover</em></li>
            </ul>

            <h4>Classes Invariáveis:</h4>
            <ul>
              <li><strong>Advérbio:</strong> Modifica verbo, adjetivo ou outro advérbio
                <br><em>Exemplos: rapidamente, muito, aqui</em></li>
              <li><strong>Preposição:</strong> Liga palavras
                <br><em>Exemplos: de, para, com, em</em></li>
              <li><strong>Conjunção:</strong> Liga orações ou palavras
                <br><em>Exemplos: e, mas, porque, quando</em></li>
              <li><strong>Interjeição:</strong> Expressa emoção
                <br><em>Exemplos: ah!, oba!, socorro!</em></li>
            </ul>

            <h4>Exercício Prático:</h4>
            <p>Classifique as palavras na frase: "O menino estudioso leu rapidamente dois livros interessantes."</p>
            <ul>
              <li>O - artigo</li>
              <li>menino - substantivo</li>
              <li>estudioso - adjetivo</li>
              <li>leu - verbo</li>
              <li>rapidamente - advérbio</li>
              <li>dois - numeral</li>
              <li>livros - substantivo</li>
              <li>interessantes - adjetivo</li>
            </ul>
          `
        },
        {
          title: 'Sintaxe do Período Simples',
          duration: '55 min',
          content: `
            <h3>Sintaxe do Período Simples</h3>
            <p>O período simples é formado por apenas uma oração, que possui um verbo ou locução verbal.</p>
            
            <h4>Termos Essenciais:</h4>
            <ul>
              <li><strong>Sujeito:</strong> Ser sobre o qual se declara algo
                <ul>
                  <li>Simples: um núcleo - "O gato subiu no telhado"</li>
                  <li>Composto: dois ou mais núcleos - "João e Maria chegaram"</li>
                  <li>Oculto: não aparece, mas é identificável - "Chegamos cedo"</li>
                  <li>Indeterminado: não se pode identificar - "Falaram de você"</li>
                </ul>
              </li>
              <li><strong>Predicado:</strong> Aquilo que se declara sobre o sujeito
                <ul>
                  <li>Verbal: núcleo é um verbo - "O menino correu"</li>
                  <li>Nominal: núcleo é um nome - "O menino é inteligente"</li>
                  <li>Verbo-nominal: dois núcleos - "O menino chegou cansado"</li>
                </ul>
              </li>
            </ul>

            <h4>Termos Integrantes:</h4>
            <ul>
              <li><strong>Objeto Direto:</strong> Complementa verbo transitivo direto
                <br><em>"Maria comprou um livro"</em></li>
              <li><strong>Objeto Indireto:</strong> Complementa verbo transitivo indireto
                <br><em>"Gosto de chocolate"</em></li>
              <li><strong>Complemento Nominal:</strong> Complementa nome
                <br><em>"Tenho necessidade de carinho"</em></li>
            </ul>

            <h4>Termos Acessórios:</h4>
            <ul>
              <li><strong>Adjunto Adnominal:</strong> Caracteriza o substantivo
                <br><em>"Meu livro novo"</em></li>
              <li><strong>Adjunto Adverbial:</strong> Indica circunstância
                <br><em>"Chegou ontem" (tempo)</em></li>
              <li><strong>Aposto:</strong> Explica ou especifica
                <br><em>"João, meu irmão, chegou"</em></li>
              <li><strong>Vocativo:</strong> Chamamento
                <br><em>"Maria, venha aqui!"</em></li>
            </ul>
          `
        }
      ]
    },
    3: {
      title: 'Cálculo Diferencial',
      description: 'Fundamentos do cálculo e suas aplicações',
      lessons: [
        {
          title: 'Limites e Continuidade',
          duration: '70 min',
          content: `
            <h3>Limites de Funções</h3>
            <p>O conceito de limite é fundamental no cálculo e descreve o comportamento de uma função quando a variável se aproxima de um determinado valor.</p>
            
            <h4>Definição Intuitiva:</h4>
            <p>Dizemos que o limite de f(x) quando x tende a 'a' é L, se f(x) se aproxima de L quando x se aproxima de 'a'.</p>
            
            <h4>Notação:</h4>
            <p>lim(x→a) f(x) = L</p>

            <h4>Definição Formal (ε-δ):</h4>
            <p>Para todo ε > 0, existe δ > 0 tal que:</p>
            <p>Se 0 < |x - a| < δ, então |f(x) - L| < ε</p>

            <h4>Propriedades dos Limites:</h4>
            <ul>
              <li>lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)</li>
              <li>lim(x→a) [f(x) · g(x)] = lim(x→a) f(x) · lim(x→a) g(x)</li>
              <li>lim(x→a) [f(x)/g(x)] = lim(x→a) f(x) / lim(x→a) g(x), se lim(x→a) g(x) ≠ 0</li>
            </ul>

            <h4>Limites Fundamentais:</h4>
            <ul>
              <li>lim(x→0) (sen x)/x = 1</li>
              <li>lim(x→∞) (1 + 1/x)^x = e</li>
              <li>lim(x→0) (e^x - 1)/x = 1</li>
            </ul>

            <h4>Continuidade:</h4>
            <p>Uma função f é contínua em x = a se:</p>
            <ol>
              <li>f(a) existe</li>
              <li>lim(x→a) f(x) existe</li>
              <li>lim(x→a) f(x) = f(a)</li>
            </ol>

            <h4>Exemplo Prático:</h4>
            <p>Calcular lim(x→2) (x² - 4)/(x - 2)</p>
            <p>Solução: Fatorando o numerador:</p>
            <p>(x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2</p>
            <p>Portanto: lim(x→2) (x² - 4)/(x - 2) = 2 + 2 = 4</p>
          `
        },
        {
          title: 'Derivadas',
          duration: '80 min',
          content: `
            <h3>Derivadas</h3>
            <p>A derivada mede a taxa de variação instantânea de uma função, representando geometricamente a inclinação da reta tangente à curva em um ponto.</p>
            
            <h4>Definição:</h4>
            <p>f'(x) = lim(h→0) [f(x+h) - f(x)]/h</p>

            <h4>Interpretações:</h4>
            <ul>
              <li><strong>Geométrica:</strong> Inclinação da reta tangente</li>
              <li><strong>Física:</strong> Velocidade instantânea</li>
              <li><strong>Econômica:</strong> Taxa marginal de variação</li>
            </ul>

            <h4>Regras de Derivação:</h4>
            <ul>
              <li><strong>Regra da Potência:</strong> (x^n)' = n·x^(n-1)</li>
              <li><strong>Regra da Soma:</strong> (f + g)' = f' + g'</li>
              <li><strong>Regra do Produto:</strong> (f·g)' = f'·g + f·g'</li>
              <li><strong>Regra do Quociente:</strong> (f/g)' = (f'·g - f·g')/g²</li>
              <li><strong>Regra da Cadeia:</strong> (f(g(x)))' = f'(g(x))·g'(x)</li>
            </ul>

            <h4>Derivadas de Funções Elementares:</h4>
            <ul>
              <li>(c)' = 0 (constante)</li>
              <li>(x)' = 1</li>
              <li>(e^x)' = e^x</li>
              <li>(ln x)' = 1/x</li>
              <li>(sen x)' = cos x</li>
              <li>(cos x)' = -sen x</li>
              <li>(tg x)' = sec²x</li>
            </ul>

            <h4>Aplicações:</h4>
            <ul>
              <li><strong>Máximos e Mínimos:</strong> f'(x) = 0</li>
              <li><strong>Crescimento/Decrescimento:</strong> 
                <ul>
                  <li>f'(x) > 0: função crescente</li>
                  <li>f'(x) < 0: função decrescente</li>
                </ul>
              </li>
              <li><strong>Concavidade:</strong>
                <ul>
                  <li>f''(x) > 0: côncava para cima</li>
                  <li>f''(x) < 0: côncava para baixo</li>
                </ul>
              </li>
            </ul>

            <h4>Exemplo:</h4>
            <p>Encontrar a derivada de f(x) = 3x² + 2x - 5</p>
            <p>f'(x) = 3·2x^(2-1) + 2·1x^(1-1) - 0 = 6x + 2</p>
          `
        }
      ]
    }
  }

  const currentCourse = courseData[course.id] || courseData[1]
  const lesson = currentCourse.lessons[currentLesson]

  const handleCompleteLesson = () => {
    const newCompleted = new Set(completedLessons)
    newCompleted.add(currentLesson)
    setCompletedLessons(newCompleted)
    
    if (currentLesson < currentCourse.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  return (
    <div className="course-content-container">
      <div className="course-header">
        <button onClick={onBack} className="btn btn-secondary">
          ← Voltar
        </button>
        <div>
          <h1>{currentCourse.title}</h1>
          <p>{currentCourse.description}</p>
        </div>
      </div>

      <div className="course-progress">
        <div className="progress-info">
          <span>Aula {currentLesson + 1} de {currentCourse.lessons.length}</span>
          <span>{Math.round(((completedLessons.size) / currentCourse.lessons.length) * 100)}% concluído</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(completedLessons.size / currentCourse.lessons.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="lesson-sidebar">
        <h3>Aulas do Curso</h3>
        {currentCourse.lessons.map((lessonItem, index) => (
          <div 
            key={index}
            className={`lesson-item ${index === currentLesson ? 'active' : ''} ${completedLessons.has(index) ? 'completed' : ''}`}
            onClick={() => setCurrentLesson(index)}
          >
            <div className="lesson-number">{index + 1}</div>
            <div>
              <div className="lesson-title">{lessonItem.title}</div>
              <div className="lesson-duration">{lessonItem.duration}</div>
            </div>
            {completedLessons.has(index) && <div className="lesson-check">✓</div>}
          </div>
        ))}
      </div>

      <div className="lesson-content">
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <span className="lesson-duration">{lesson.duration}</span>
        </div>
        
        <div 
          className="lesson-body"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
        
        <div className="lesson-actions">
          {currentLesson > 0 && (
            <button 
              className="btn btn-secondary"
              onClick={() => setCurrentLesson(currentLesson - 1)}
            >
              Aula Anterior
            </button>
          )}
          
          <button 
            className="btn"
            onClick={handleCompleteLesson}
          >
            {completedLessons.has(currentLesson) ? 'Aula Concluída' : 'Marcar como Concluída'}
          </button>
          
          {currentLesson < currentCourse.lessons.length - 1 && (
            <button 
              className="btn"
              onClick={() => setCurrentLesson(currentLesson + 1)}
            >
              Próxima Aula
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseContent