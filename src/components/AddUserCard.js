import './AddUserCard.css'
import { useState } from 'react';
function AddUserCard({addCard}) {
    const [userData, setUserData] = useState({
        title: "React Js",
        userImage: "https://picsum.photos/130/130?image=856",
        name: "",
        country: "",
        desc: "User interface designer and front-end developer",
        btn1: "Message",
        follow: true,
    })
    function handleCard(e) {
        e.preventDefault();
        addCard(userData)
    }

    function changeInput(e) {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value
        });
    }
    return (<>
        <div className="form">
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input name="name" className="input" type="text" placeholder=" " onChange={changeInput} />
                <div className="cut"></div>
                <label className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input name="country" className="input" type="text" placeholder=" " onChange={changeInput} />
                <div className="cut"></div>
                <label className="placeholder">Country</label>
            </div>
            <button type="text" className="submit" onClick={handleCard}>submit</button>
        </div>
    </>)
}

export default AddUserCard;