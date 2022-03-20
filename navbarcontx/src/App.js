import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Form from './components/Form';

function App() {
  return (
    <Wrapper>
        <Navbar/>
        <FormWrapper/>
    </Wrapper>
);
}

export default App;
