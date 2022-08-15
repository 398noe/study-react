// DO NOT DELETE

import React from "react";
import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
    const [breedDogsUrl, setBreedDogsUrl] = useState([]);
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

    const fetchBreedDogsUrl = async (breed) => {
        return await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
            .then(res => res.json())
            .then(
                (result) => {
                    return result.message;
                }
            );
    }

    const changeBreed = (e) => {
        setSelectedBreed(e.target.value);
    }

    const changeBreedDogsUrl = async () => {
        const breedDogsUrl = await fetchBreedDogsUrl(selectedBreed);
        console.log(breedDogsUrl);
        setBreedDogsUrl(breedDogsUrl);
    }

    return (
        <div className="container">
            <div style={{display: "flex", alignContent: "center", gap: "5px"}}>
                <span>犬種を選ぶが良い😎　</span>
                <BreedsSelect breeds={breeds} onChange={changeBreed} value={selectedBreed}/>
                <button onClick={changeBreedDogsUrl}>表示</button>
            </div>
            <div className="dog-images">
                {
                    breedDogsUrl.map((v,i) => {
                        return <DogImage url={v} key={i}/>
                    })
                }
            </div>
        </div>
    );
}