import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SmallCard from './Components/SmallCard';
import GraphCard from './Components/GraphCard';
import SmallGraphCard from './Components/SmallGraphCard';
import IconCard from './Components/IconCard';
import SocialCard from './Components/SocialCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bodyCard">
        <div className="titleBox">
          <h1 className="title">Overview</h1>
        </div>
        <SmallCard />
        <GraphCard />
        <SmallGraphCard />
      </div>
      <div className="rightsection">
        <div className="loginId"></div>
        <IconCard />
        <SocialCard />
      </div>
    </div>
  );
}

export default App;
