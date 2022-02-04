function App() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div className='App'>
      <h1>Hello world my name is sanjar kodirov</h1>
    </div>
  );
}

export default App;
