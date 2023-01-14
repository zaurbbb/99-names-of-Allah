import React from 'react';

import { testNumbers } from '../../../data/testNumbers';

import TestCard from '../../cards/TestCard/TestCard';

import css from './TestsList.module.sass';

const TestsList = () => {
    return (
        <div className={css.Block}>
            {testNumbers.map((item, id) => (
                <TestCard
                    key={id}
                    value={item.value}
                    id={item.id}
                />
            ))}
        </div>
    );
};

export default TestsList;