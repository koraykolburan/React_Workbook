import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout.js';
import Home from './pages/Home.js';
import Conditionals from './pages/Conditionals.js';
import PropsComponents from './pages/PropsComponents.js';
import NoPages from './pages/NoPages.js';
import ClassComponents from './pages/ClassComponents.js';
import ReactEvents from './pages/ReactEvents.js';
import ConditionalRendering from './pages/ConRendering.js';
import Lists from './pages/Lists.js';
import Forms from './pages/Forms.js';
import ReactRouter from './pages/ReactRouter.js';
import ReactMemo from './pages/Memo.js';
import ReactHooks from './pages/ReactHooks.js';
import ReactStyling from './pages/ReactStyling.js';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Conditionals" element={<Conditionals  />} />
          <Route path="Props&Components" element={<PropsComponents />} />
          <Route path='ClassComponents' element={<ClassComponents />} />
          <Route path='ReactEvents' element={<ReactEvents />} />
          <Route path='ConditionalRendering' element={<ConditionalRendering />} />
          <Route path='Lists' element={<Lists />} />
          <Route path='Forms' element={<Forms />} />
          <Route path='ReactRouter' element={<ReactRouter />} />
          <Route path='ReactMemo' element={<ReactMemo />} />
          <Route path='ReactHooks' element={<ReactHooks />} />
          <Route path='ReactStyling' element={<ReactStyling />} />
          <Route path="*" element={<NoPages />} />
          <Route path='NoPages' element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);