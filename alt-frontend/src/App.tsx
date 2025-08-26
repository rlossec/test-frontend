import "./App.css";
import { Layout } from "./layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
