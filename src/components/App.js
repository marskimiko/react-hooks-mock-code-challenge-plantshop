import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // const [plants, setPlants] = useState([])

  // const fetchPlants = () => {
  //   fetch('http://localhost:6001/plants')
  //   .then(res => res.json())
  //   .then(plants => setPlants(plants))
  // }

  // useEffect(fetchPlants, [])
  
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
