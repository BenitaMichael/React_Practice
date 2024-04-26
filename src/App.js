import './App.css';
import Practice from './Components/Practice';
import LoginContextProvider from './context/LoginContextProvider';
import DOM from './Components/DOM';

function App() {
  return (
    <LoginContextProvider>
      <Practice />
      <DOM />
    </LoginContextProvider>
  );
}

export default App;
