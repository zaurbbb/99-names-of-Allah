import React from 'react';

import { testList } from '../../../data/testList';

import TestCard from '../../cards/TestCard/TestCard';

import css from './TestsList.module.sass';

const TestsList = () => {
    return (
        <div className={css.Block}>
            {testList.map((item, id) => (
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