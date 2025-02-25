import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Kanruethai' , message: 'Hi'},
    { name: 'Tom' , message: 'Hello...'}
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="sirinyasawasdeeraksa@gmail.com" phone="0918218729" />
    </div>
  );
}

export default App;