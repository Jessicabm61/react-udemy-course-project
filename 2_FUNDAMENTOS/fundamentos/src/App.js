// componentes
import FirstComponent from './components/FirstComponent'
import CapsLockUtilizandoChildren from './components/CapsLockUtilizandoChildren';
import CapsLock from './components/CapsLock';
import Contador from './components/Contador';
import TemplasteExpression from './components/TemplateExpression';
import Events from './components/Events';
import Challange from './components/Challange';
// styles / css
import './App.css';


function App() {
  return (
    <div className="App">     
    <FirstComponent/>
    <CapsLock texto = "jessica beatriz monteiro"/>
    <CapsLockUtilizandoChildren >teste usando chlidren</CapsLockUtilizandoChildren >
    <Contador/>
    <TemplasteExpression/>
    <Events/>
    <Challange/>
    </div>
  );
}

export default App;
