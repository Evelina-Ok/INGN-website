import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout } from './Layouts/MainLayout';
import { Home } from './Pages/Home';
import { SingleNews } from './Pages/SingleNews';

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path='/singleNews/:newsslug' element={<SingleNews/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
