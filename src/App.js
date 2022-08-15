// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
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
    <div>
      <header>Railway アプリ</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <br />
      <button onClick={() => handleClick()}>更新</button>
    </div>
  )
}

