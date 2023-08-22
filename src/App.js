import React, { useState } from "react";
import Heading from "./App/Heading";

const data = [
  {
    name: "Hadi",
    age: "23",
    status: "Developer",
  },
  {
    name: "Wali",
    age: "23",
    status: "Python Developer",
  },
  {
    name: "Sherazi",
    age: "20",
    status: "AI Developer",
  },
];

const App = () => {
  const [list, setlist] = useState(data);

  const [name, setName] = useState("Nill");
  const [status, setStatus] = useState("Nill");
  const [age, setAge] = useState("Nill");

  const addElementInListArr = () => {
    const newPerson = {
      name,
      age,
      status,
    };

    setlist([...list, newPerson]);
  };

  const AddName = (inputProp) => {
    setName(inputProp.target.value);
  };
  const AddStatus = (inputProp) => {
    setStatus(inputProp.target.value);
  };
  const AddAge = (inputProp) => {
    setAge(inputProp.target.value);
  };

  return (
    <div className="container">
      <Heading />
      <div className="inbox">
      <input className="box inputs" placeholder="Enter your Name" onChange={AddName} />
      <input className="box inputs" placeholder="Enter your Status" onChange={AddStatus} />
      <input type="number" className="box inputs" placeholder="Enter your Age" onChange={AddAge}/>
      </div>
      <button className="box btns" onClick={addElementInListArr}>
        Add Info
      </button>

      {list.map((x) => {
        return (
          <div className="box">
            {/* {" "} */}
            {x.name} - {x.status} - {x.age}
            {/* {" "} */}
          </div>
        );
      })}
    </div>
  );
};

export default App;
