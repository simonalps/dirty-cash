import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error(error);
        setMessage("Could not reach backend");
      });
  }, []);

  return (
    <main>
      <h1>Dirty Cash</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;