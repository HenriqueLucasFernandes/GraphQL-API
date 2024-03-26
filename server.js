const { ApolloServer, gql } = require('apollo-server');

// Simulação de banco de dados
let tasks = [
    { id: '1', title: 'Desenvolver API', description: 'Desenvolver API GraphQL em node.js', completed: false, assignedTo: '1' },
    { id: '2', title: 'Estudar GraphQL', description: 'Aprender sobre GraphQL e suas funcionalidades', completed: false, assignedTo: '2' },
    { id: '3', title: 'Preparar apresentação', description: 'Criar slides e ensaiar apresentação para o trabalho', completed: true, assignedTo: '3' },
    { id: '4', title: 'Preparar apresentação', description: 'Criar Banco de Dados', completed: true, assignedTo: '4' }
  ];
  
  let users = [
    { id: '1', name: 'Henrique', email: 'henrique@example.com' },
    { id: '2', name: 'Maria', email: 'maria@example.com' },
    { id: '3', name: 'Pedro', email: 'pedro@example.com' },
    { id: '4', name: 'João', email: 'joao@example.com' }
  ];

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
    assignedTo: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]!
  }

  type Query {
    allTasks: [Task!]!
    task(id: ID!): Task
    completedTasks: [Task!]!
    pendingTasks: [Task!]!
    allUsers: [User!]!
  }

  input TaskInput {
    title: String!
    description: String
    assignedTo: ID!
  }

  type Mutation {
    createTask(input: TaskInput!): Task!
    markTaskAsCompleted(id: ID!): Task!
    updateTask(id: ID!, input: TaskInput!): Task!
    deleteTask(id: ID!): ID!
  }
`;

const resolvers = {
  Query: {
    allTasks: () => tasks,
    task: (parent, { id }) => tasks.find(task => task.id === id),
    completedTasks: () => tasks.filter(task => task.completed),
    pendingTasks: () => tasks.filter(task => !task.completed),
    allUsers: () => users,
  },
  Mutation: {
    createTask: (parent, { input }) => {
      const newTask = { id: String(tasks.length + 1), ...input, completed: false };
      tasks.push(newTask);
      return newTask;
    },
    markTaskAsCompleted: (parent, { id }) => {
      const task = tasks.find(task => task.id === id);
      if (!task) throw new Error("Task not found");
      task.completed = true;
      return task;
    },
    updateTask: (parent, { id, input }) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex === -1) throw new Error("Task not found");
      tasks[taskIndex] = { ...tasks[taskIndex], ...input };
      return tasks[taskIndex];
    },
    deleteTask: (parent, { id }) => {
      const taskIndex = tasks.findIndex(task => task.id === id);
      if (taskIndex === -1) throw new Error("Task not found");
      tasks.splice(taskIndex, 1);
      return id;
    },
  },
  User: {
    tasks: (parent) => tasks.filter(task => task.assignedTo === parent.id),
  },
  Task: {
    assignedTo: (parent) => users.find(user => user.id === parent.assignedTo),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`O Servidor está rodando no endereço: ${url}`);
});
