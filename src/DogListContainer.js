// DO NOT DELETE

import React from "react";
import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const exec = async () => {
            const breedsUrl = await fetchBreedsUrl();
            let breedsArray = [];
            Object.keys(breedsUrl).forEach(key => {
                breedsArray.push(key);
            })
            setBreeds(breedsArray);
        }
        exec();
    }, []);
    const fetchBreedsUrl = async () => {
        return await fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(
                (result) => {
                    return result.message;
                }
            );
    }

    return (
        <div className="container">
            <BreedsSelect breeds={breeds} />
        </div>
    );
}