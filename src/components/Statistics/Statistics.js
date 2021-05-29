import React from 'react';
import PropTypes from 'prop-types';


const Statistics = (props) => {
    return (
        <section class="statistics">
            {props.title&&<h2 class="title">{props.title}</h2>}

            <ul class="stat-list">
                {props.stats.map((stat) => (
                    <li class="item"
                    key={stat.id}
                    >
                    <span class="label">{stat.label}</span>
                    <span class="percentage">{stat.percentage}</span>
                </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
    title:'',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};


export default Statistics;