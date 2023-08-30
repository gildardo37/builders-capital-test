import { useState } from "react";
import { removeDuplicateFromArray } from "../utils";

export const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("chicken");
  const [arrayData, setArrayData] = useState<string[]>([]);

  const addValue = () => {
    if (inputValue === "") return;
    setArrayData((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const submitValue = () => {
    setArrayData(removeDuplicateFromArray(arrayData));
  };

  return (
    <section className="flex flex-col gap-4 max-w-3xl m-auto">
      <div className="flex flex-col sm:flex-row justify-center gap-2">
        <input
          className="flex-1 bg-gray-200 rounded-md px-4 py-2 outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={addValue}
          disabled={inputValue === "" || !inputValue}
        >
          Add
        </button>
        <button
          className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md"
          onClick={submitValue}
        >
          Submit
        </button>
      </div>
      <p className="font-bold">{arrayData.join(", ")}</p>
    </section>
  );
};
