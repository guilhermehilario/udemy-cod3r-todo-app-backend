import React from "react";

import PageHeader from "../templente/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default (props) => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
);