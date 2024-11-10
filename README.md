# Mini-Roteiro Prático sobre Testes End-to-End com Cypress 🚀
## Objetivo 🎯
Este roteiro tem como objetivo fornecer uma introdução prática aos testes end-to-end (E2E) utilizando o Cypress, uma poderosa ferramenta de automação para testes de front-end. Vamos testar a funcionalidade de uma micro-livraria virtual e simular um usuário realizando operações no site, como a compra de livros 📚, cálculo de frete 💸 e outras interações.

### Passo 1: Instalando o Node.js 💻
Para começar a usar o Cypress, você precisará do Node.js instalado no seu sistema. O Cypress é uma ferramenta que roda em Node.js.

1. Acesse o site oficial do Node.js e baixe a versão recomendada (LTS).
2. Durante a instalação, certifique-se de marcar a opção para adicionar o Node.js ao PATH.
3. Após a instalação, abra o terminal (cmd ou PowerShell) e verifique se o Node.js foi instalado corretamente:

~~~
node -v
npm -v
~~~
_Esses comandos devem retornar as versões do Node.js e npm instalados no seu sistema._

### Passo 2: Criando o Projeto 🛠️
Agora, crie uma nova pasta para o seu projeto de teste com Cypress ou use um projeto existente.

~~~
mkdir meu-projeto-cypress
cd meu-projeto-cypress
~~~

### Passo 3: Inicializando o Projeto com npm 📦
Vamos inicializar o projeto para criar o arquivo package.json, que gerencia as dependências.

~~~
npm init -y
~~~
_Isso criará automaticamente o arquivo package.json com as configurações padrão._

### Passo 4: Instalando o Cypress 🔧
Agora, instale o Cypress como uma dependência de desenvolvimento:

~~~
npm install cypress --save-dev
~~~
_Isso instalará o Cypress na pasta node_modules do seu projeto (Demora um pouco)._

### Passo 5: Abrindo o Cypress pela Primeira Vez 👀
Após a instalação, você pode abrir a interface gráfica do Cypress com o seguinte comando:

~~~
npx cypress open
~~~
_Isso abrirá o Cypress no navegador, onde você poderá começar a criar e executar seus testes._

## Tarefa #1: Testando o Front-end da Micro-Livraria 📑
Agora que o Cypress está configurado, vamos escrever nossos primeiros testes end-to-end para a micro-livraria.

### Criando o Teste ✍️
1. Ao abrir o Cypress pela primeira vez, clique em Continue.
2. Selecione E2E Testing e clique em Start E2E Testing in Chrome (ou o navegador de sua preferência).
3. Clique em New Spec e depois em Create New Spec.
4. Nomeie o arquivo como spec.cy.js e clique em Create Spec.

_Isso criará um script de exemplo._

### Rodando o Teste 🏃‍♂️
O Cypress irá abrir o navegador e rodar o teste automatizado. Se tudo estiver configurado corretamente, o teste de exemplo será executado e você verá que ele passa com sucesso.

## Tarefa #2: Criando Seus Próprios Testes 🧑‍💻
Agora que o Cypress está funcionando, vamos criar testes personalizados para a micro-livraria.

### Passo 1: Criando o Arquivo de Teste 🗂️
Navegue até a pasta meu-projeto-cypress (pasta criada anteriormente) > cypress > e2e e abra o arquivo spec.cy.js.
Abra esse arquivo no seu editor de código preferido (como o VS Code por exemplo).

### Passo 2: Escrevendo o Teste de Visita da Página 👨‍💻
Adicione o seguinte código para simular a visita à página principal:

~~~
describe('Teste End-to-End da Micro-Livraria', () => {
  it('Teste 1: Visita a Página Principal', () => {
    cy.visit('http://localhost:5000/') // Visita a página da micro-livraria
  })
})
~~~

### Passo 3: Verificando um Item na Página 👀
Agora, vamos verificar se um livro está visível na página.

~~~
describe('Teste End-to-End da Micro-Livraria', () => {
  it('Teste 1: Visita a Página Principal', () => {
    cy.visit('http://localhost:5000/')
  })

  it('Teste 2: Verifica se o livro "Design Patterns" está na página', () => {
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns') // Verifica a presença do livro
  })
})
~~~

### Passo 4: Simulando o Cálculo do Frete 🛒💸
Neste passo, vamos simular a interação do usuário com a funcionalidade de cálculo do frete. Vamos inserir um CEP, clicar no botão para calcular o frete e verificar se o valor aparece corretamente.

~~~
describe('Teste End-to-End da Micro-Livraria', () => {
  it('Teste 1: Visita a Página Principal', () => {
    cy.visit('http://localhost:5000/') // Visita a página da micro-livraria
  })

  it('Teste 2: Verifica se o livro "Design Patterns" está na página', () => {
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns') // Verifica a presença do livro
  })

  it('Teste 3: Calcula o Frete', () => {
    // Localiza o livro e realiza a interação com o campo de CEP e botão de cálculo de frete
    cy.get('[data-id=3]').within(() => {
      cy.get('input').type('10000-000') // Insere o CEP no campo de texto
      cy.contains('Calcular Frete').click() // Clica para calcular o frete
    })

    // Aguarda o cálculo do frete e verifica se a mensagem aparece corretamente
    cy.wait(2000) // Espera o cálculo do frete ser concluído
    cy.get('.swal-text').contains('O frete é: R$') // Verifica que o valor do frete foi exibido
    cy.get('.swal-button').click() // Fecha o pop-up do frete
  })
})
~~~

### Passo 5: Simulando a Compra do Livro 🛒💳
Agora, vamos simular a compra do livro, clicando no botão de compra e verificando se a confirmação de sucesso aparece.

~~~
describe('Teste End-to-End da Micro-Livraria', () => {
  it('Teste 1: Visita a Página Principal', () => {
    cy.visit('http://localhost:5000/') // Visita a página da micro-livraria
  })

  it('Teste 2: Verifica se o livro "Design Patterns" está na página', () => {
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns') // Verifica a presença do livro
  })

  it('Teste 3: Calcula o Frete', () => {
    cy.get('[data-id=3]').within(() => {
      cy.get('input').type('10000-000') // Insere o CEP
      cy.contains('Calcular Frete').click() // Clica para calcular o frete
    })

    cy.wait(2000) // Espera o cálculo do frete
    cy.get('.swal-text').contains('O frete é: R$') // Verifica se o frete foi calculado
    cy.get('.swal-button').click() // Fecha o pop-up do frete
  })

  it('Teste 4: Realiza a Compra do Livro', () => {
    // Simula o clique no botão "Comprar" para efetuar a compra
    cy.contains('Comprar').click() // Clica no botão "Comprar"
    cy.wait(2000) // Aguarda a confirmação da compra

    // Verifica se o pop-up de sucesso foi exibido
    cy.get('.swal-text').contains('Sua compra foi realizada com sucesso') // Confirma o sucesso da compra
    cy.get('.swal-button').click() // Fecha o pop-up de sucesso
  })
})
~~~

### Passo 6: Rodando o Teste novamente 🔄
Após escrever seus testes, execute-os novamente com o comando (na pasta do seu projeto):

~~~
npx cypress open
~~~

_Escolha o arquivo spec.cy.js e veja os resultados dos testes._

### Passo 7: Salvando Suas Mudanças 💾
Após testar e garantir que tudo está funcionando corretamente crie um repositório, salve suas alterações. Se estiver usando Git, faça commit e push das mudanças:

~~~
git add .
git commit -m "Adicionando testes de frete e compra"
git push
~~~

Comentário Final 💬
Este mini-roteiro proporcionou uma introdução prática ao Cypress, cobrindo os conceitos básicos de testes end-to-end. O Cypress possui uma documentação extensa e exemplos no site oficial, caso queira se aprofundar ainda mais.

Se precisar de mais ajuda, estou à disposição! 👨‍💻🚀
