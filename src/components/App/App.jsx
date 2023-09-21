import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '/src/components/Layout';

const Home = lazy(() => import('/src/pages/Home/'));
const Portfolio = lazy(() => import('/src/pages/Portfolio'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
