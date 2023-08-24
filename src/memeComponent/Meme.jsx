import React from "react";
import memesData from "./memesData";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImages, setAllMemesImages] = React.useState([]);
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await res.json();
      setAllMemesImages(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemesImages.length);
    const url = memesArray[randomNumber].url;
    setMemeImage((preMeme) => ({
      ...preMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div>
        <div className="max-w-md mx-auto p-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex-grow">
              <input
                type="text"
                id="input1"
                name="topText"
                value={memeImage.topText}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-300"
                placeholder="Top Text"
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                id="input2"
                name="bottomText"
                value={memeImage.bottomText}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-300"
                placeholder="Bottom Text"
              />
            </div>
          </div>
          <button
            className="w-full bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
            onClick={getMemeImage}
          >
            Get a new meme image
          </button>
          <div className="flex justify-center items-center relative mt-4 text-center">
            <img
              src={memeImage.randomImage}
              alt="Meme Image"
              className="mx-auto max-w-full h-auto"
            />
            <h2 className="font-bold text-yellow-500 uppercase text-xl  font-serif text-white absolute top-5">
              {memeImage.topText}
            </h2>
            <h2 className="font-bold text-purple-500 uppercase text-xl  font-serif text-white absolute bottom-5">
              {memeImage.bottomText}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
