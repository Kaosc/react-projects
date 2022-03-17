import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage: ""
    })

    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeData => setAllMemes(memeData))

    }, [])


    function getMeme() {
        let randomNumber = Math.floor(Math.random() * allMemes.data.memes.length)
        const url = allMemes.data.memes[randomNumber].url

        setMeme(prevMemeData => ({
            ...prevMemeData,
            memeImage: url,
        })) 
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevStates => {
            return {
                ...prevStates,
                [name] : value
            }
        })

    }

    return (
        <div className="forms">
            <div className="form-inputs">
                <input 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className="input-one" 
                    type="text" 
                    placeholder="Top Text"
                />
                <input 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className="input-two" 
                    type="text" 
                    placeholder="Bottom Text"
                />
            </div>
            <button 
                onClick={getMeme} 
                className="form-button"
            >
                GET A NEW MEME IMAGE
                </button>
            <div className="meme">
                <img src={meme.memeImage} className="meme-img" alt=""></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

