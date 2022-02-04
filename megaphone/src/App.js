import Navbar from './components/Navbar';
import './App.css';
import Text from './components/Text';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Text text='insert text1'/>
      <Text text='insert text2'/>
      <Text text='insert text3'/>
    </div>
  );
}

export default App;
