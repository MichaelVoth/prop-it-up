import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {'Michael'}
      lastName = {'Voth'}
      age = {'40'}
      hairColor = {'Brown'}
      />

      <PersonCard 
      firstName = {'John'}
      lastName = {'Smith'}
      age = {'25'}
      hairColor = {'Blond'}
      />

      <PersonCard 
      firstName = {'Tony'}
      lastName = {'Jones'}
      age = {'55'}
      hairColor = {'Black'}
      />

      <PersonCard 
      firstName = {'Mary'}
      lastName = {'Douglas'}
      age = {'33'}
      hairColor = {'Brown'}
      />
    </div>
  );
}

export default App;
