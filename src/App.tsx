import React from 'react';
import './App.css';
import ResourceApp from './Components/ResourceApp'

function App() {
<<<<<<< HEAD
=======

  const [resourceName, setResourceName] = useState("");
  const [category, setCategory] = useState("");
  const [isFaculty, setIsFaculty] = useState(false);
  const [listResources, setListResources] = useState<IRecommendations[]>([]);
  //console.log(isFaculty);


async function getResources() {
  const response = await fetch('https://server-resource.herokuapp.com/three');
  const jsonData = await response.json();
  setListResources(jsonData);
};

useEffect(() => {getResources()}, [])

async function submitResource() {
  const body = {resource_name: resourceName, category: category, is_faculty: isFaculty};
  await fetch('https://server-resource.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  getResources()
  setIsFaculty(false);
  setCategory("");
  setResourceName("");
  //make a fetch request to the post endpoint to submit x data into DBtable
  //then reset all inputs
}

>>>>>>> 3aba9e08ba4474caa37550f5e34c3631c3961f25
  return (
    <div className="App">
      <ResourceApp />
    </div>
  );
}

export default App;
