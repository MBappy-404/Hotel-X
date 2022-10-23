import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BookRom from './components/BookRom/BookRom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import RoomSummery from './components/RoomSummery/RoomSummery';
import VipRom from './components/VipRom/VipRom';
import Main from './Layout/Main';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path:'/room',
          element: <PrivateRoute><BookRom></BookRom> </PrivateRoute>,
        },
        {
          path: '/vip',
          element: <PrivateRoute><VipRom></VipRom></PrivateRoute>
        },
        {
          path: '/summery',
          element: <RoomSummery></RoomSummery>
        }


      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={route}></RouterProvider>

    </div>
  );
}

export default App;
