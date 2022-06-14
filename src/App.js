import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ToggleButtons from './components/ToggleButtons';
import Form from './components/Form'
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/btn" element={<ToggleButtons />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
