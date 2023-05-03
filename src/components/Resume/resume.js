import './resume.css';

let resume = {
    experience: [{ company: 'wisdom Infosoft', year: "2020-2021" }, { company: 'Matrix Marketers', year: "2021-Present" }],
    education: [{ schoolName: 'abc' }, { schoolName: 'xyz' }],
    skills: ['Html', 'css', 'JavaScript', 'Angular', 'TypeScript']
}


function Resume() {
    return (
        <>

            <div id="header"></div>
            <div className="left"></div>
            <div className="stuff">
                <br /><br />
                <h1>Resume</h1>
                <h2>Emily</h2>
                <hr />
                <br />
                <p className="head">Interests</p>
                <ul>
                    <li>Drawing</li>
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Programming</li>
                    <li>Computer Science</li>
                </ul>
                <p className="head">Skills</p>
                <ul>
                    <li></li>
                </ul>
                <p className="head">Education</p>
                <ul>
                    <li>{resume.education.schoolName}</li>
                </ul>
                <p className="head">Experience</p>
                <ul>
                    <li>Student Technology Intern for Wilton School District</li>
                    <li>Babysitter</li>
                </ul>
                <p className="head">Extracurriculars</p>
                <ul>
                    <li>Recycling Club</li>
                    <li>Gardening Club</li>
                    <li>Book Club</li>
                </ul>
            </div>
            <div className="right"></div>
            <div id="footer">
                <h2 id="name">Emily</h2></div>

        </>
    )
}

export default Resume;