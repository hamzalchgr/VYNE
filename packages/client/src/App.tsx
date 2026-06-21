import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Layout from './components/layout/Layout';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
         </Route>
      </Routes>
   );
};

export default App;
