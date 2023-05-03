import './playButton.css'

function PlayButton() {
    function HandleClick() {
        console.log('jejeje');
    }
    
    return (
        <>
            <button onClick={HandleClick}>Play</button>
        </>
    )
}

export default PlayButton