import { useState } from "react";
import "./App.css";
import Relogio from "./components/Relogio/Relogio";
function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <Relogio />
      </>
   );
}

export default App;
