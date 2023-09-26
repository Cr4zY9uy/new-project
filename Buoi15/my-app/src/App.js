import logo from './logo.svg';
import './App.css';
import Category from './components/Category';
function App() {
  const categoryName = {
    name: "New generation",
    count: 2
  };
  return (

    <div>
      <Category category={categoryName} />
    </div>

  );
}

export default App;
