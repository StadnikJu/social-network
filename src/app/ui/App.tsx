import "./App.css";

import { Header, NavBar, Routing } from "@/common/components";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routing />
      </div>
    </div>
  );
};

export default App;
