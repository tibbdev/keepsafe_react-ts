import React from 'react';
import './App.css';

import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

// function Greeter(props: {first: string, last?: string}) {
//    const { first, last } = props;
//    return (
//       <h1>
//          Hello, {first} {last}
//       </h1>
//    );
// }

const App: React.FC = () => {
   return (
      <div className="App">
         <Hello name="David" enthusiasmLevel={2}/>
         {/* <ProjectsPage /> */}
      </div>
   );
}

export default App;
