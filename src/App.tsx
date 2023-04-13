import React from 'react';
import {Hero} from "./components/hero";

function App() {
    return (
        <div className="container">
            <Hero />
        </div>
    )
  // -----------------------------------------------
  //   const [count, setCount] = useState(0)
  //
  // return React.createElement('div', {className: 'container'}, [
  //     React.createElement('h1', {className: 'counter'}, `Количество нажатий: ${count}`),
  //     React.createElement('button', {className: 'button', onClick: () => setCount(count + 1)}, 'Test!')
  // ])
  // -----------------------------------------------
}

export default App;
