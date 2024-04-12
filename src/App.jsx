import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListController from "./Pages/List/ListController";
import HeaderView from "./components/Header/HeaderView";
import CreateController from "./Pages/Create/CreateController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
