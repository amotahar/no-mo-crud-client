import './App.css';
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import Home from './compnents/Home';
import AddUser from './compnents/AddUser';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>

    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
