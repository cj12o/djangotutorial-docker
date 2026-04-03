import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet /> {/* 🔥 child routes render here */}
    </div>
  );
}

export default App;