import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-image.jpg';

const Profile = (props) => {
    return (
        <div class="profile">
            <div class="description">
            <img
                src={props.avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{props.name}</p>
            <p class="tag">{props.tag}</p>
            <p class="location">{props.location}</p>
            </div>

            <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{props.stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{props.stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{props.stats.likes}</span>
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