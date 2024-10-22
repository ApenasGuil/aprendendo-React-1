> How to react

##### Estrutura 

`./package.json`
arquivos de dependencias do projeto

`./index.html`
vazio e o React insere o conteúdo através de JS
(SPA - Single Page Application)

`./src/main.jsx`
inserção do ReactJS no index.html

> componentes SEMPRE com primeira letra maiúscula

`./src/App.jsx`
componente pai de todo o projeto

##### State

State é uma variável, que quando é alterada, atualiza o componente e atualiza a tela, executando novamente a função

```javascript
const [message, setMessage] = useState("Valor inicial");
```




.

Node + NPM instalados
Node = Executar códigos JavaScript fora do navegador
NPM = Gerenciador de bibliotecas JS

Extensões VSCode
-tailwind CSS IntelliSense
-prettier
-ESLint
-Dracula Theme Official

Vite = Facilita a criação de projeto node

npm create vite@5.5.2 .
npm install = instala pacotes que o projeto precisa para funcionar
npm run dev = inicializar o projeto

package.json = arquivo de configuração do projeto

SPA = Single Page Application
Conteúdo é inserido por meio de JavaScript (React)
Componentes renderizados com letra maiúscula (<App />)

const = constante
let = variavel alterável

State é uma variável, que quando é alterada, atualiza o componente e atualiza a tela, executando novamente a função

npm install -D tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
npx tailwindcss init -p

content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

npm install lucide-react@0.435.0
Bibioteca de icones Lucide

Quando você altera a variável, você precisa alterar a interface?
Se sim, cria-se um State

Criar função no componente Pai (App) e passar via props para os componentes filhos,
eles chamam esta função para atualizar o State

{task.isCompleted ? "COMPLETE" : "INCOMPLETE"}

npm install uuid@10.0.0
Gerar ID aleatórias

npm install react-router-dom@6.26.1
Gerenciamento de rotas

useEffect(() => {
    console.log("Tasks foi alterado");
  }, [tasks]);
useEffect = Executa a primeira função, sempre que a lista do segundo parâmetro for alterada

DEPLOY
npm run build
Prepara a aplicação para ir para produção
dist/index.html
assets => css compilado 
vercel.com => deploy

{task.isCompleted && <CheckIcon />}
{task.isCompleted ? <CheckIcon /> : null }