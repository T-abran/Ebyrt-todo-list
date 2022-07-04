import React, { useState } from 'react';

function TasksList() {
  const [value, setvalue] = useState('');
  const [listTask, setListTask] = useState(['tarefa1', 'tarefa2']);

  function handleChange({ target }) {
    setvalue(target.value);
  } // altera valor para o que o ususario digitar

  function newTask() {
    setListTask(...listTask, value);
  }
  function deleteTask() {

  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="task" value={value} type="text" placeholder="Digite sua tarefa aqui" />
        <button onClick={newTask} type="button">adicionar</button>
        <h1>{value}</h1>
        <ul>
          {listTask.map((task, index) => (
            <>
              <li key={task}>{task}</li>
              <button
                type="button"
                onClick={deleteTask(index)}
              >
                {' '}
                excluir
              </button>
            </>
          ))}

        </ul>
      </form>

    </div>
  );
}
export default TasksList;
