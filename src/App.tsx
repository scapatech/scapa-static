import './App.css';
import ClosureBanner from './components/ClosureBanner';
import scapaLogo from '/images/scapa-logo.png';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <img
        src={scapaLogo}
        alt="Scapa Technologies"
        className="h-24 w-auto mb-8"
      />
      <div className="w-full max-w-4xl">
        <ClosureBanner />
      </div>
    </div>
  );
}

export default App;
