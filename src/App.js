import "./App.css";
import Video from "./components/video";
import { userData } from "./utils/userData";
// import Resume from './components/Resume/resume';
import PlayButton from "./components/playButton";
function App() {

  return (
    <>
      <div>
        <h1>Props</h1>
        <div className="userCards">
          {userData.map((item) => (
            <Video
              key={item.id}
              title={item.title}
              userImage={item.userImage}
              name={item.name}
              country={item.country}
              desc={item.desc}
              btn1={item.btn1}
              btn2={item.follow}
            ></Video>
          ))}
        </div>

        {/* <div id="resumeComponent">
          <Resume />
        </div> */}
      </div >
      <div>
        <PlayButton></PlayButton>
        <PlayButton></PlayButton>
      </div>
    </>
  );
}

export default App;
