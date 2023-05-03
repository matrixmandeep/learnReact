import './video.css';

function Video({ title, userImage, name, country, desc, btn1, btn2 }) {
    return (
        <>
            <div className="card-container">
                <span className="pro">{title}</span>
                <img className="round" src={userImage} alt="user" />
                <h3>{name}</h3>
                <h6>{country}</h6>
                <p>{desc}</p>
                <div className="buttons">
                    <button className="primary">
                        {btn1}
                    </button>
                    <button className="primary ghost">
                        {btn2 === true ? 'following' : 'unfollow'}
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>

        </>
    )
}


export default Video
