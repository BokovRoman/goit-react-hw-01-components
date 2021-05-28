// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Profile from './components/Profile';
import profiles from './user.json';
// console.log(profiles);

const App = () => {
  return (
    <div>
      <Profile
        name={profiles.name}
        tag={profiles.tag}
        location={profiles.location}
        avatar={profiles.avatar}
        stats={profiles.stats}
        followers={profiles.stats.followers}
        views={profiles.stats.views}
        likes={profiles.stats.likes}
      />
    </div>
  );
};

export default App;
