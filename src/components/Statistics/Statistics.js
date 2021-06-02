import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = (props) => {
    return (
        <section className={styles.statistics}>
            {props.title&&<h2 class="title">{props.title}</h2>}

            <ul className={styles.list}>
                {props.stats.map((stat) => (
                    <li className={styles.item}
                    key={stat.id}
                    >
                    <span className={styles.label}>{stat.label}</span>
                    <span className={styles.percentage}>{stat.percentage}</span>
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
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};


export default Statistics;