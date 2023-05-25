import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "./editor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState("vs-light");

  const runCode = () => {
    if (code.trim() === "") {
      setMessage("Please enter some code.");
      setOutput("");
      return;
    }

    try {
      setOutput("");
      setMessage("");
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
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
      onChange={(value) => setCode(value)}
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
      {message && <p className="error-message">{message}</p>}
      {output && <p className="output">{output}</p>}
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
