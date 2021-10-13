import Header from './Components/Header';
import PricingContainer from './Components/PricingContainer';


function App() {
  return (
    <div className="flex flex-col items-center bg-Pattern-Background bg-no-repeat justify-center w-screen h-screen font-Manrope bg-Very-Pale-Blue">
        <Header/>
        <PricingContainer/>  
    </div>
  );
}

export default App;
