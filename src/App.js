import logo from './logo.svg';
import './App.css';
import {UseStateHook} from './Components/UseStateHook.jsx'
import {UseEffectHook} from './Components/UseEffectHook.jsx'
import {UseEffectHookDep} from './Components/UseEffectHookDep.jsx'
import {UseRefHook} from './Components/UseRefHook.jsx'
import { LocalStorage } from './Examples/LocalStorage.jsx';
import { TresenRaia } from './Examples/3enraia.jsx'
import {Tictac} from './Examples/tictac.jsx'

function App() {

  return (
    <div className="App">

      <div className='container container-main-hooks'>
        <h1>Pruebas Oscuras con react</h1>

        <Tictac></Tictac>
        <TresenRaia></TresenRaia> 
        <UseStateHook></UseStateHook>
        <UseEffectHook></UseEffectHook>
        <UseEffectHookDep></UseEffectHookDep>
        <UseRefHook></UseRefHook>
        <LocalStorage></LocalStorage>
      </div>
    </div>
  );
}

export default App;
