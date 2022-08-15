// DO NOT DELETE

import React from "react";

export const BreedsSelect = (props) => {

    return (
        <select value={props.value} name="breeds" onChange={(e) => props.onChange(e)}>
            {
                props.breeds.map((v) => {
                    return <option value={v} key={v}>{v}</option>
                })
            }
        </select>
    );
}

export default BreedsSelect;