import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-image.jpg';
import styles from './Profile.module.css';
// console.log(styles);

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div class="description">
            <img
                    src={props.avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
            />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.tag}>{props.tag}</p>
            <p className={styles.location}>{props.location}</p>
            </div>

            <ul className={styles.stats}>
            <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{props.stats.followers}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{props.stats.views}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{props.stats.likes}</span>
            </li>
            </ul>
        </div >
    );
};

Profile.defaultProps = {
    avatar:defaultImage,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;