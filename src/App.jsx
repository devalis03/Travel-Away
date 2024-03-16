import MainContainer from "./components/main/MainContent";
import NavigationBar from "./components/main/Navbar";

function App() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main>
        <MainContainer />
      </main>
    </>
  );
}

export default App;
