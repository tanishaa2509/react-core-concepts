import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";
function App() {
  const [subject, setSubject] = useState("English");
  return (
    <div style={{ backgroundColor: "brown", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select onChange={(event) => setSubject(event.target.value)}>
          <option value="">select subject</option>
          <option value="maths">maths</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="History">History</option>
        </select>
        <h1>Context API</h1>
        <button onClick={() => setSubject("")}>Clear Subject</button>
        <College></College>
      </SubjectContext.Provider>
    </div>
  );
}
export default App;
