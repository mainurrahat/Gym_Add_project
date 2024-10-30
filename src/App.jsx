import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";
import Navver from "./Components/Navver/Navver";
import Phones from "./Components/Phones/Phones";
import PriceOption from "./Components/PriceOption/PriceOption";
function App() {
  return (
    <>
      {/* <h1 className="text-9xl">Vite + React</h1> */}
      <Navver></Navver>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
