# Angular Essencial - Product CRUD
#### Autor: Vitor de Almeida Silva

Esse repositório contem uma aplicação de CRUD de Produtos. Foram utilizados o Angular Framework no frontend e NodeJs no backend. A aplicação corresponde aos desafios realizados no curso "Angular Essencial" da Cod3r e o foco foi o estudo do Angular. As técnicas e métodos utilizados foram os seguintes:
- **Frontend**: implementado em Angular, foram utilizados conceitos fundamentais, tais como:
    - Data Binding:
        - One-way;
        - Tow-way;
        - Event binding;
        - Atribut binding;
    - Criação de componentes, services, models e diretivas (estruturais e de atributo);
    - Criação de mensagens de feedback para erros ou operações bem sucedidas;
    - Aplicação prática do padrão observable nas requisições HTTP;
    - Injeção de dependência com services;
    - Integração com backend em NodeJs por meio de API REST;
    - Uso de rotas para navegação entre componentes;
    - Utilização de componentes e bibliotecas tais como Material e Schematics (Table);
    - Criação de formulários e aplicação de regras aos campos;
    - Separação de responsabilidade entre models, services e componentes;
    - Estruturação do projeto em pastas para componentes, templates e diretivas (criadas manualmente);
    - Criação das operações de CRUD por meio de requisições ao backend utilizando as informações do Produto;
    - aplicação de estilos local e Global;
    - Importação de exportação de modulos
- **Backend:** Criado por meio de um Json Server do NodeJs. Esse recurso disponibiliza, de forma rápida, uma API REST para requisições cujos os dados são persistidos operando sobre um objeto JSON;

### Instruções para executar o projeto:
     . Abra o terminal/konsole de comando na pasta "backend" e execute o comendo: >> npm start
     . Abra o terminal/konsole de comando na pasta "frontend" e execute o comendo: >> ng serve
        . Acesse o serviço pesquisando o rota padrão: "http://localhost:4200/"



A seguir são disponibilizados dois prints das telas do projeto:



#### Componente com tabela de produtos (opções para deletar e editar)

![Home](https://github.com/Vitor0534/Angular-Essencial-Product-CRUD/blob/master/Images/screen1.png)



### Componente de criação de novo produto

![Home](https://github.com/Vitor0534/Angular-Essencial-Product-CRUD/blob/master/Images/screen2.png)
