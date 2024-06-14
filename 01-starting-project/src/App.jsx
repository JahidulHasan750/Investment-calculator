import Header from "./components/Header/Header";

import CoreConcept from "./components/CoreConcept";
import Examples from "./components/Examples";
function App() {
  return (
    <>
      <Header />

      <main>
        <CoreConcept></CoreConcept>
        <Examples></Examples>
      </main>
      
    </>
  );
}

export default App;
