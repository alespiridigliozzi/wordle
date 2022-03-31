import './App.css';

function App() {

    const url = 'https://random-word-api.herokuapp.com/all'

    const fetchData = () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    fetchData()
        .then((data => console.log(data))
        .catch(err => console.error(err)))

    return (
        <div className="App">
        
        </div>
    );
}

export default App;
