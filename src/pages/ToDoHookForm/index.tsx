import React from 'react';
import {useForm} from "react-hook-form";
import Todo from "../../components/Todo";

interface FormData {
  todo: string;
  email: string;
  a: string;
  b?: string; // 필수가 아니라면 ?를 붙여주자.
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  // i: string;
  // j: string;
  extraError?: string; // 전체 에러를 위한 값, 왜냐면 전체 에러를 발생시키기 위해서다.
}

const ToDoHookFormPage = () => {
  const { register, watch, handleSubmit, formState, setError } = useForm<FormData>({
    defaultValues: {
      e: 'ee',
      f: 'ff'
    }
  })
  //
  // watch - form의 입력 값들의 변화를 관찰 할 수 있게 해주는 함수.
  // handleSubmit 이 validation 을 담당.
  //  - 2개의 인자를 받는다. 하나는 데이터가 유효할 때 호출되고, 나머지 하나는 유효하지 않을 때 호출된다.

  console.log(register('todo'));
  // name, onChange, onBlur, ref
  // input에게 필요한 것들이네??

  // console.log(watch()); // register의 키 값을 키로 가지는 객체가 나온다.

  console.log('errors', formState.errors)
  // 만족하지 않는 폼에 대한 원인 객체를 보여준다. 즉 에러가 있다면 어떤 에러인지 보여준다.

  const onValid = (data: FormData) => {
    console.log({ data })

    if (data.a !== data.b) {
      setError('a', {
        message: '일치하지 않습니다.',
      }, {
        shouldFocus: true, // 에러후 포커스를 준다.
      })

      return setError('b', {
        message: '일치하지 않습니다.'
      }) // 커스텀 에러를 발생 시킬수 있다.
      // 서버와 통신 후 에러를 발생시킬 수도 있다.
    }

    // 특정 값ㅇ름 나들어 전체 에러를 발생 시킬수도 있다.
    // setError('extraError', {
    //   message: 'server offline'
    // })

  //   clearError 로 에러를 없앨수도 있다.
  }

  return (
    <div>
      <Todo />

      <h1>Todo List</h1>
      <form onSubmit={handleSubmit(onValid)} style={{ display: 'flex', flexDirection: 'column' }}>
        {/*<input placeholder="Write a To-Do" {...register('todo')} />*/}
        <input placeholder="Write a E-mail" {...register('email')} />
        <input placeholder="Write a E-mail" {...register('a', { required: true, validate: (value) => !value?.includes('q') })} />
        {/* validate 는 현재 있는 값을 인자로 받아 개발자가 커스텀 검증 로직을 작성할 수 있다. */}
        <span>{formState.errors?.a?.message}</span>
        <input placeholder="Write b E-mail" {...register('b', { minLength: 2 })} />
        <span>{formState.errors?.b?.message}</span>

        <input placeholder="Write c E-mail" {...register('c', { required: 'true 대신 string을 사용하면 해당 메세지가 message 프로퍼티로 들어간다.', minLength: 2 })} />
        <span>{formState.errors?.c?.message}</span>

        <input placeholder="Write d E-mail" {...register('d', { required: true, minLength: { value: 2, message: 'short' } } )}/>

        <input placeholder="Write e" {...register('e', { pattern: /^[ee]+$/, } )}/>

        <input placeholder="Write ff" {...register('f', { required: true, pattern: {
            value: /ff/,
            message: 'f error'
          }, } )}
        />

        {/*<input placeholder="write not q" {...register('g', { required: true, validate: (value) => value?.includes('q') ? 'q가 들어가면 안됩니다.' : true })} />*/}

        <input placeholder="write not q" {...register('g', { required: true, validate: (value) => !value?.includes('q') || 'q가 들어가면 아됩니다.' })} />
        {/* validate 는 현재 있는 값을 인자로 받아 개발자가 커스텀 검증 로직을 작성할 수 있다. */}
        {/* true, false, string */}
        {/* 아래와 같이 여러 함수를 원하면 객체로 만들어서 지정하면 된다. */}
        <span>{formState.errors?.g?.message}</span>

        <input placeholder="write not q" {...register('h', { required: true, validate: {
          noq: (value) => !value.includes('q') || 'not q',
          now: (value) => !value.includes('w') || 'not w',
          noe: (value) => !value.includes('e') || 'not e',
          nor: (value) => !value.includes('r') || 'not r',
          } })} />
        <span>{formState.errors?.h?.message}</span>


        {/*<span>{formState.errors}</span>*/}
        <span>{formState.errors.extraError?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoHookFormPage;