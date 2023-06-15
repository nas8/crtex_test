import { Provider } from 'react-redux';
import './App.css';
import { Panel } from './components/Panel/Panel';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Panel />
      </div>
    </Provider>
  );
}

export default App;
