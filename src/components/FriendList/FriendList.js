import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = (props) => {
    return (
        <ul className={styles.list}>
            {props.friends.map((friend) => (
                <li className={styles.item} key={friend.id}>
                    <span className={friend.isOnline?styles.on:styles.off}>{friend.isOnline}</span>
                    <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p className={styles.name}>{friend.name}</p>
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