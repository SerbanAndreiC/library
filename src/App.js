
import './App.css';
import Popular from './components/category/Popular';
import Comedy from './components/category/Comedy';
import Action from './components/category/Action';

function App() {
  return (
    <div className="App">
      hello
      <div className='categoryes'>
         <h4 className="category-name"> Popular </h4>
          <Popular />
         <h4 className="category-name"> Comedy </h4>
          <Comedy />
        <h4 className="category-name"> Action </h4>
          <Action />
      </div>

    </div>
  );
}

export default App;
