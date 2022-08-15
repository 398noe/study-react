// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-sussex/n02102480_4030.jpg");
  const handleClick = async () => {
    const newUrl = await fetchDogUrl();
    setDogUrl(newUrl);
  }
  const fetchDogUrl = async () => {
    return await fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          return result.message;
        }
      );
  }
  return (
    <main>
      <div>
        <p className="description">犬の画像を表示するサイトです。</p>
        <button onClick={() => handleClick()}>更新</button>
      </div>
      <div>
        <DogImage url={dogUrl} />
      </div>
    </main>
  );
}

export default Description;