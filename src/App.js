import "./App.css";
import Header from "./components/Header";
import CampsitesList from "./features/campsites/CampSitesList";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
