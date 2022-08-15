// DO NOT DELETE

import React from "react";
import { useState } from "react";

export const BreedsSelect = (props) => {
    const [selectedBreed, setSelectedBreed] = useState("");

    const handleClick = (e) => {
        setSelectedBreed(e.target.value);
    }

    return (
        <div>
            <select name="セレクトボックス名" onChange={handleClick}>
                {
                    props.breeds.map((v,i) => {
                        return <option value={v} key={v}>{v}</option>                        
                    })
                }
            </select>

        </div>
    );
}

export default BreedsSelect;