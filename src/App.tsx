import React, { useReducer, useState } from "react";
import "./styles.css";
interface IUSER {
  name: string;
  sname: string;
  age: number;
}
interface IAction {
  type: string;
  payload: {
    name: string;
    sname: string;
    age: number;
  };
}

const defaultUser: IUSER = {
  name: "",
  sname: "",
  age: 0
};
function reducer(state: IUSER[], action: IAction): IUSER[] {
  switch (action.type) {
    case "Add_User":
      return [
        ...state,
        {
          name: action.payload.name,
          sname: action.payload.sname,
          age: action.payload.age
        }
      ];
    default:
      return state;
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, [
    { name: "", sname: "", age: 0 }
  ]);
  const [user, setName] = useState<IUSER>(defaultUser);

  const handleChange = (event: any) => {
    return setName({ ...user, [event.target?.name]: event.target?.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "Add_User",
      payload: { name: user.name, sname: user.sname, age: user.age }
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="name" value={user.name} onChange={handleChange} />
        <br />
        <br />
        <input name="sname" value={user.sname} onChange={handleChange} />
        <br />
        <br />
        <input name="age" value={user.age} onChange={handleChange} />
        <br />
        <br />
        <button type="submit"> send</button>
      </form>
      <h1>
        {state.map((todo) => (
          <div key={todo.age}>
            <h4>{todo.name}</h4>
            <p>{todo.sname}</p>
            <i>{todo.age}</i>
          </div>
        ))}
      </h1>
    </div>
  );
}
