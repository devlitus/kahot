import React from "react";
import { useForm } from "../hooks/useForm";
import "./createQuiz.css";

export const CreateQuiz = () => {
  const [formValue, handleInputChange] = useForm({
    quiz: "",
    file: "",
    quizRadio: [],
  });
  const dropHandle = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          console.log(`name = ${file.name}`);
        }
      }
    }
  };
  const dragOverHandle = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div className="content">
      <div className="sidebar">sidebar</div>
      <form className="form-quiz" onSubmit={handleSubmit}>
        <div className="text-quiz">
          <input
            type="text"
            name="quiz"
            id="quiz"
            onChange={handleInputChange}
          />
        </div>
        <div
          className="drop-and-drag"
          onDrop={dropHandle}
          onDragOver={dragOverHandle}
        >
          <input type="file" name="file" id="file" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple style={{display: "none"}}/>
					<label htmlFor="file"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>
        </div>
        <div className="template-resp">
          <div className="group-control">
            <input type="text" name="respons1" id="respons1" />
            <input
              type="radio"
              name="quizRadio"
              id="quiz1"
              onChange={handleInputChange}
            />
          </div>
          <div className="group-control">
            <input type="text" name="respons2" id="" />
            <input
              type="radio"
              name="quizRadio"
              id="quiz2"
              onChange={handleInputChange}
            />
          </div>
          <div className="group-control">
            <input type="text" name="respons3" id="" />
            <input
              type="radio"
              name="quizRadio"
              id="quiz3"
              onChange={handleInputChange}
            />
          </div>
          <div className="group-control">
            <input type="text" name="respons4" id="" />
            <input
              type="radio"
              name="quizRadio"
              id="quiz4"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <input type="submit" value="OK" />
        </div>
      </form>
    </div>
  );
};
