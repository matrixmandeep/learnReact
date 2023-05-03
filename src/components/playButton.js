import './playButton.css'

function PlayButton({ children, onClick }) {
    function HandleClick() {
        onClick();
    }

    return (
        <>
            <button onClick={HandleClick}>{children}</button>
        </>
    )
}

export default PlayButton