import React from 'react';

import { Task } from './Task';

const tasks = [
  { _id: 1, text: 'First Task: Adicionar Pet' },
  { _id: 2, text: 'Second Task: Pesquisar Pet' },
  { _id: 3, text: 'Third Task: Atualizar Pet' },
  { _id: 4, text: 'fourth Task: Excluir Pet' },
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ul>
      {tasks.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  </div>
);
