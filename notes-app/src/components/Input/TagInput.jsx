import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  return (
    <div>
      {tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
            >
              #{item}
              <button onClick={() => {}}>
                <MdClose
                  onClick={() => setTags(tags.filter((tag) => tag !== item))}
                />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type={"text"}
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => addNewTag()}
          className="w-8 h-8 flex items-center justify-center rounded border bg-white hover:bg-amber-800 "
        >
          <MdAdd className="text-2xl text-amber-800 hover:text-white" />
        </button>
      </div>
    </div>
  );
};
export default TagInput;
