import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddUsers from './components/AddUsers';
import Update from './components/Update';
function App() {
  const router = createBrowserRouter([
    {
       path: '/',
       element: <Home></Home>,
       loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users/add',
      element: <AddUsers></AddUsers>
   },
   {
      path: '/users/:id',
      element: <Update></Update>
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
