import './App.css';

// import TestComponent from './components/TestClassComponent/TestClassComponent';
import TestComponent from './components/TestFunctionalComponent/TestFunctionalComponent';

function App() {
  return (
    <div className="App">

      Gombnyomásra letölteni egy random receptet és elmenteni a redux store-ban egy listába.
      Ahányszor megnyomunk egy gombot (A TestClassComponent és a TestFunctionalComponentben példa a gombra), annyiszor kérjen le egy új receptet.
      írja ki az összes lekért receptet.

      Weboldal:  https://www.themealdb.com/api.php?ref=apilist.fun

      Egy véletlenszerű étel a lekéréséhez URL:
      https://www.themealdb.com/api/json/v1/1/random.php

      <TestComponent />
    </div>
  );
}

export default App;
