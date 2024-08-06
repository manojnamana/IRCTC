import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import Booking from './components/Booking';
import NotFound from './components/NotFound';
import TrainAvailability from './components/TrainsView';


const App = () => (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checktrains" element={<Booking />} />
        <Route path="/trains" element={<TrainAvailability />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

);

export default App;