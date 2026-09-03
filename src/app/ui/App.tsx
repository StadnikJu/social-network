import { useAppSelector } from "@/common/hooks";
import { Header, Loader, NavBar, Routing } from "@/common/components";
import { selectAppStatus } from "../model/appSlice";
import "./App.css";

const App = () => {
  const status = useAppSelector(selectAppStatus);
  
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        {  status === 'loading' && <Loader/>}
        <Routing />
      </div>
    </div>
  );
};

export default App;
