import { useState } from "react";
import { stateData } from "../utils/stateData";

function Counter() {
    const [index, setIndex] = useState(0);

    let data = stateData[index]

    function handeClick() {
        setIndex(index + 1)
    }
    return (
        <>
            <button onClick={handeClick}>Next</button>
            <h2><i>{data.name}</i> by {data.artist}</h2>
            <h3>
                ({index + 1} of {stateData.length})
            </h3>
            <img src={data.url} alt={data.alt}></img>
            <p>
                {data.description}
            </p>
        </>
    )
}

export default Counter;