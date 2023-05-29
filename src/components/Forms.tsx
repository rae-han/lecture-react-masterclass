import {FormEvent, useState} from "react";

const Forms = () => {
  const [value, setValue] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
    </form>
  )
}

export default Forms;