import React from 'react';
import PropTypes from 'prop-types';

const FriendList = (props) => {
    return (
        <ul class="friend-list">
            {props.friends.map((friend) => (
                <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
                </li>
            ))}
            {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
};

export default FriendList;