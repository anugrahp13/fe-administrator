import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
