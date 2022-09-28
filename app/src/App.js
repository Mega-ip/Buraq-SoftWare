import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {FirstAction} from "./redux/Action"
function App() {
  const app = useSelector(state => state.app)
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>{app.first}</h1>
        <button onClick={()=>{
          if(app.first === '' || app.first === "melhem")
          dispatch(FirstAction("ehab"))
          else
          dispatch(FirstAction("melhem"))


        }}>click on me</button>
    </div>
  );
}

export default App;
