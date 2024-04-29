import './App.css';
import Practice from './Components/Practice';
import LoginContextProvider from './context/LoginContextProvider';
import DOM from './Components/DOM';
import Count from './Components/Count';

function App() {
  return (
    <LoginContextProvider>
      <Practice />
      <DOM />
      <Count />
    </LoginContextProvider>
  );
}

export default App;
