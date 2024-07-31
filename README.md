<h1>Reforçando - UseContext e ContextAPI</h1>

### Exercício opcional proposto pelo professor Jaques durante o Módulo de ReactJS do curso de dev full stack da +PraTi

<hr/>

### Exercício 12: Contexto de Histórico de Navegação


Objetivo: Criar um contexto para gerenciar o histórico de navegação do usuário.

Instruções:
- Crie o Contexto: Crie um novo arquivo NavigationHistoryContext.jsx e defina um contexto chamado NavigationHistoryContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor NavigationHistoryContext.Provider e forneça um estado para o histórico de navegação.
- Consuma o Contexto: Crie um componente NavigationTracker.jsx que consuma o contexto NavigationHistoryContext e adicione entradas ao histórico de navegação.
- Exiba o Histórico: Crie um componente HistoryList.jsx que consuma o contexto NavigationHistoryContext e exiba o histórico de navegação do usuário.