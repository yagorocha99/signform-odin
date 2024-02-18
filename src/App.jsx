import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';
import { Transition } from '@headlessui/react';

function App() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="App">
      <Transition
        show={!isShowing}
        enter="transform transition duration-[2000ms]"
        enterFrom="opacity-0 -translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-300 transition ease-in-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-full"
      >
        <Login setIsShowing={setIsShowing} />
      </Transition>
      
      <Transition
        show={isShowing}
        enter="transform transition duration-[2000ms]"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-300 transition ease-in-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <Register setIsShowing={setIsShowing} />
      </Transition>
    </div>
  );
}

export default App;