import Title from "./Title";
import './App.css';
import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";




function App() {
  return (
    <div className="App">
        <Title title = "Task useJsonFetch"/>
      <div className='wrapper'>
        <Data />
        <Error />
        <Loading />
      </div>
    </div>
  );
}

export default App;
