import React from 'react';

import NameCard from '../../cards/NameCard/NameCard';

import css from './AllNamesList.module.sass';

const AllNamesList = ({ result }) => {
    return (
        <div className={css.Block}>
            {result.map((collection) => (
                <NameCard
                    key={collection.id}
                    item={collection}
                    id={collection.id}
                    nameArabic={collection.nameArabic}
                    name={collection.name}
                    shortMeaning={collection.shortMeaning}
                />
            ))}
        </div>
    );
};

export default AllNamesList;