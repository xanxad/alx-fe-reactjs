import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import MainCOntent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainCOntent />
      <Footer />
    </div>
  );
};

export default App;
