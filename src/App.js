
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import SearchResult from './components/SearchResult';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/> ,
    },
    {
      path:'/search/:movie',
      element:<SearchResult/>
    }
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
