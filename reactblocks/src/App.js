import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
        <Header />
        <div id="centercontainer">
          <Navigation />
          <Main header = {<Advertisement /> }>
              <SubContents />
              <SubContents />
              <SubContents />
          </Main>
        </div>
    </div>
  );
}

export default App;
