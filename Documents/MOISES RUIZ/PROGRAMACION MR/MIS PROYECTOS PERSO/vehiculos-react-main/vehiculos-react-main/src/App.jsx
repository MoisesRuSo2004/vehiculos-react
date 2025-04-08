import { useState } from "react";
import Login from "./components/Login";
import Carros from "./components/Carros";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>{token ? <Carros token={token} /> : <Login onLogin={setToken} />}</div>
  );
};

export default App;
