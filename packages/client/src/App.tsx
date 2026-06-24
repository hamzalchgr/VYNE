import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Shop from './pages/store/Shop';
import Auth from './pages/authentication/Auth';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/shop/:categ" element={<Shop />} />
         </Route>
            <Route path="/account" element={<Auth />} />
      </Routes>
   );
};

export default App;
