import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Item from "./pages/item/item";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
