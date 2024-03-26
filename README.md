# PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS - PUC-MG

## Pós Graduação - Arquitetura de Soluções

### Disciplina: APIs e WebServices - Professor: Rommel Vieira Carneiro

#### Trabalho Prático 1 - Implementação de API RESTful com cache

* Este trablho tem por objetivo criar uma API GraphQL que forneça acesso a dados de uma aplicação fictícia. A API deve ser capaz de realizar consultas e mutações em uma aplicação de gerenciamento de tarefas. Os usuários podem criar tarefas, marcar tarefas como concluídas, listar tarefas e obter detalhes específicos de uma tarefa.

Observações:

Para visualizar e utilizar a API e todas as suas funcionalidades, será necessário a instalação do Node e suas dependências, além de um editor de texto, podendo ser o VSCode ou qualquer outro similar.

Com tudo instalado em sua máquina, na pasta raiz do projeto, deve-se executar o comando: "node server.js"
Se tudo estiver funcionando corretamente, a mensagem "O Servidor está rodando no endereço:  http://localhost:4000/" deverá ser exibida no terminal.

Para testar a API GraphQL: 
    Após iniciar o servidor, você pode acessar a interface do GraphQL(Apollo Sandbox) em seu navegador, normalmente em http://localhost:4000/. Aqui você pode testar as consultas e mutações definidas em seu esquema GraphQL.

Feita a importação, basta utilizar os comandos POST, GET, DELETE e PUT, lembrando que o servidor da aplicação deve estar ativo.

Exemplo de Query:

```
    query Query {
        allUsers {
            email
            id
            name
            }
        }
    }
```

Qulquer dúvida estou à disposição;

[]'s

