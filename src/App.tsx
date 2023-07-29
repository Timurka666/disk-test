import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { store } from './store';
import { Home } from "./pages/home";
import { Disk } from "./pages/fileUpload";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Disk />} path="/disk" />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
