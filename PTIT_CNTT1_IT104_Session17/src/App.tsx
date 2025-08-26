import Info from "./component/Ex01";
import Product from "./component/Ex02";
import ChangeColor from "./component/ChangeColor";
import Toggle from "./component/Toggle";
import Form from "./component/Form";
import CounText from "./component/CounText";
import Select from "./component/Select";
import Checkbox from "./component/Checkbox";
import Todolist from "./component/Todolist/Todolist";

function App() {
  return (
    <>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Info />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Product />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <ChangeColor />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Toggle />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Form />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <CounText />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Select />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Checkbox />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Todolist />
      </div>
    </>
  );
}

export default App;
