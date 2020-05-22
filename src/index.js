import React from 'react';
import './style.css';

const Meter = ({ value = 0, title, legend = [], baseColor, meterColor = {} }) => {
    const margins =
        value === 0
            ? "0"
            : value < 100
                ? `calc(${value}% - 46px)`
                : `calc(${value}% - 92px)`;

    const baseStyle = {
        backgroundColor: baseColor,
    };

    const meterStyle = {
        marginLeft: margins,
        backgroundColor: meterColor.outer,
    };

    const innerStyle = {
        backgroundColor: meterColor.inner,
    };

    return (
        <div className="react-info-meter">
            <div className="title">{title}</div>
            <div className="meter-bar" style={baseStyle}>
                <span style={meterStyle}>
                    <span className="outer" style={innerStyle}/>
                </span>
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
