import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./editor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("light");

  const handleEditorChange = (value, event) => {
    event.preventDefault()
    setCode(value);
  };

  const runCode = () => {
    if (code.trim() === "") {
      setMessage("Please enter some code.");
      setOutput("");
      return;
    }

    try {
      // Clear previous output and message
      setOutput("");
      setMessage("");
      // Run the code and capture the output
      const result = eval(code);
      // Update the output state with the result
      setOutput(result);
    } catch (error) {
      // If an error occurs, display it in the output
      setOutput("");
      setMessage(error.toString());
    }
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const Code = () => (
    <MonacoEditor
      width="100%"
      height="50%"
      language="javascript"
      theme={theme}
      value={code}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: "on",
      }}
    />
  );

  const Head = () => (
    <div id="code-editor-head">
      <p>Time: 30mins</p>
      <span>
        <select name="Theme" value={theme} onChange={handleThemeChange}>
          <option value="vs-light">VS Code Light</option>
          <option value="vs-dark">VS Code Dark</option>
          <option value="hc-black">High Contrast</option>
          {/* Add more theme options here */}
        </select>
        <select name="language">
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* Add more language options here */}
        </select>
      </span>
    </div>
  );

  const Output = () => (
    <div id="code-editor-output">
      <button onClick={runCode}>Run</button>
      {message && <p>{message}</p>}
      {output}
    </div>
  );

  return (
    <>
      <Head />
      <Code />
      <Output />
    </>
  );
};

export default CodeEditor;
