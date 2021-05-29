import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import profiles from './data/user.json';
import statisticals from './data/statisticalData.json';
import friends from './data/friends.json';
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
      <Statistics
        title={'Upload stats'}
        stats={statisticals}
        
      />
      <FriendList
        friends={friends}
      />
    </div>
  );
};

export default App;
