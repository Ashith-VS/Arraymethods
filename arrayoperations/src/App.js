import React, { useState } from "react";
import json from "./json.json";
const App = () => {
  const [state, setState] = useState();
  const [input, setInput] = useState({
    arrayInput: "",
    joinItem: "",
    index: "",
    push: "",
    unshift: "",
    deletes: "",
    concat: ",",
    copyWithin: "",
    flat: "",
    splice: "",
    spliced: "",
    slice: "",
  });

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setInput({ ...input, [name]: value });
  };

  const handleArrayLength = () => {
    const array = input.arrayInput.split(",");
    setState(array.length);
  };

  const handleArrayToString = () => {
    setState(input.arrayInput.toString());
  };

  const handleArrayJoin = () => {
    const array = input.arrayInput.split(",");
    setState(array.join(input.joinItem));
  };

  const handleArrayAt = () => {
    const array = input.arrayInput.split(",");
    setState(array.at(input.index));
  };

  const handleArrayPop = () => {
    const array = input.arrayInput.split(",");
    array.pop();
    setState(array);
  };

  const handleArrayPush = () => {
    const array = input.arrayInput.split(",");
    array.push(input.push);
    setState(array);
  };

  const handleArrayShift = () => {
    const array = input.arrayInput.split(",");
    array.shift();
    setState(array);
  };

  const handleArrayUnShift = () => {
    const array = input.arrayInput.split(",");
    array.unshift(input.unshift);
    setState(array);
  };

  const handleArraydelete = () => {
    const array = input.arrayInput.split(",");
    delete array[input.deletes];
    setState(array);
  };

  const handleArrayconcat = () => {
    setState(input.arrayInput.concat(input.concat));
  };

  const handleArrayCopyWithin = () => {
    const array = input.arrayInput.split(",");
    setState(array.copyWithin(input.copyWithin));
  };

  const handleArrayflat = () => {
    const newArray = input.flat.split(",");
    newArray.flat();
    setState(newArray);
  };

  const handleArraySplice = () => {
    const array = input.arrayInput.split(",");
    array.splice(5, 2, "apple", "mango");
    setState(array);
    return array;
  };

  const handleArraytoSpliced = () => {
    setState(array.splice(0, 1));
    return array.splice(0, 1);
  };

  const handleArraySlice = () => {
    setState(array.slice(2));
    return array.slice(2);
  };
  const functionMapper = {
    handleArrayLength,
    handleArrayToString,
    handleArrayJoin,
    handleArrayAt,
    handleArrayPop,
    handleArrayPush,
    handleArrayShift,
    handleArrayUnShift,
    handleArraydelete,
    handleArrayconcat,
    handleArrayCopyWithin,
    handleArrayflat,
    handleArraySplice,
    handleArraytoSpliced,
    handleArraySlice,
  };

  return (
    <div className="container">
      <div className="main">
        <pre>[{input.arrayInput}]</pre>

        <div className="res">
          <pre>{state}</pre>
          <pre />
        </div>

        {json.map((state, i) => (
          <div className="btn" key={i}>
            {state.input === true && (
              <input
                type={state.type}
                className="form-control"
                placeholder={state.placeholder}
                value={input[state.name]}
                name={state.name}
                onChange={handleChange}
              />
            )}

            <button onClick={() => functionMapper[state.onClick]()}>
              {state.btn}
            </button>
            <pre />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
