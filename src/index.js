import React from 'react';
import './style.css';

const Meter = ({ value = 0, title, legend = [] }) => {
    const margins =
        value === 0
            ? "0"
            : value < 100
                ? `calc(${value}% - 46px)`
                : `calc(${value}% - 92px)`;

    const style = {
        marginLeft: margins,
    };

    return (
        <div className="react-info-meter">
            <div className="title">{title}</div>
            <div className="meter-bar">
                <span style={style} />
            </div>

            {legend &&
                <div className="legend">
                    {legend.map((label, key) => (
                        <span key={key}>{label}</span>
                    ))}
                </div>}
        </div>
    );
};

export default Meter;
