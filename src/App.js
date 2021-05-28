import React from 'react';
import Profile from './components/Profile';
import profiles from './data/user.json';
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
