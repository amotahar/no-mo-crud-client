import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import AddUsers from './components/AddUsers';
function App() {
  const router = createBrowserRouter([
    {
       path: '/',
       element: <Home></Home>
    },
    {
      path: '/home',
      element: <Home></Home>
   },
    {
      path: '/users/add',
      element: <AddUsers></AddUsers>
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
