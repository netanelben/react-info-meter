import React from 'react';
import { storiesOf } from '@storybook/react';
import Meter from '../src';

import './style.css';

storiesOf('Meter', module).add('Meter', () => {

    const style = {
        maxWidth: '420px',
        padding: '1em'
    };

    return (
        <div style={style}>
            <Meter value={50}
                title="Amount"
                legend={["Lowest", "Mild", "Highest"]}
                baseColor="rgba(102, 200, 55, 0.2)"
                meterColor={{
                    outer: 'rgba(102, 204, 55, 0.3)',
                    inner: 'rgba(102, 204, 55, 1)'
                }}/>

            <br/><br/>

            <Meter value={75}
                title="Rating"
                legend={["Okey", "Great", "Awesome!"]}
                baseColor="rgba(102, 20, 55, 0.2)"
                meterColor={{
                    outer: 'rgba(102, 204, 55, 0)',
                    inner: 'rgba(102, 20, 55, 1)'
                }}/>
        </div>
    );
});
