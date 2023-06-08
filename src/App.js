import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div>
      <AnimatePresence>
        <RouterProvider router={router}></RouterProvider>
      </AnimatePresence>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
