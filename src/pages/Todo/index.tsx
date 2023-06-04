import {ChangeEventHandler, FormEventHandler, useState} from "react";

const TodoPage = () => {
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    setValue(value);
  }

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} placeholder="Write a To-Do"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoPage;