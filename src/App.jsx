import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './Layouts/MainLayout';
import { Home } from './Pages/Home';
import { SingleNews } from './Pages/SingleNews';
import { HelmetProvider } from 'react-helmet-async';

import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
          {/* path my query that leads to page element */}
          <Route path='/singleNews/:slug' element={<SingleNews/>}/>
          </Route>
        </Routes>
      </Router>
      </HelmetProvider>
    </>
  )
}

export default App
