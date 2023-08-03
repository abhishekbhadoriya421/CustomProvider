import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { ItemProvider } from './ItemContext';

function App() {
 
  return (
      <ItemProvider>
        <div className='App'>
          <h2>Shopping Cart</h2>
              <Navbar />
              <Items />
        </div>
      </ItemProvider>
  );
}
export default App;
