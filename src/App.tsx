import { useEffect } from "react";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { loadData } from "./utlis/load-data";

function App() {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="main">
      <Header />
      <Board />
    </main>
  );
}

export default App;
