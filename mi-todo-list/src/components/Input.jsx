import { useState } from "react";
import "../style/input.css";
import Lists from './Task'
import { useAtom } from 'jotai'
import List from './Atom'



let id = 0;

const Input = () => {
    const [list, setList] = useAtom(List)

  return (
    <>
      <input
        className="inputText"
        type="text"
        placeholder="Add TO DO "
        onKeyPress={(e) => {
          if (e.code === "Enter" && e.target.value.trim().length) {
            setList([
              ...list,
              {
                description: e.target.value.trim(),
                isDone: false,
                _id: id,
              },
            ]);
            id++;
            e.target.value = "";
          }
        }}
      />

      {list.length != 0 && <Lists/>}
    </>
  );
};
export default Input;
