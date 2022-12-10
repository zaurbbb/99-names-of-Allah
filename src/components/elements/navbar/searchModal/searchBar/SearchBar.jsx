import React, {useState} from 'react';
import {Link} from "react-router-dom";

import css from './SearchBar.module.css'


import SearchIconBlack from "../../../../../assets/icons/navbar/search_dark.svg";

const data = [];

function SearchBar({ placeholder }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <div className={css.Container}>
            <div className={css.InputBlock}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
            </div>
            {filteredData.length !== 0 && (
                <div className={css.DataResult}>
                    {filteredData.map((value, key) => {
                        return (
                            <Link className={css.DataItem} to={`/name/${value.id}`} target="_blank" key={key}>
                                <img src={SearchIconBlack} alt=""/>
                                <p>{value.name} </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;