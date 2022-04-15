import { Header } from '../src/components/header/Header';
import TouristMap from './components/touristMap/TouristMap';
import { BorecniceData } from './context/BorecniceContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <BorecniceData>
        <TouristMap />
      </BorecniceData>
    </div>
  );
};

export default App;


