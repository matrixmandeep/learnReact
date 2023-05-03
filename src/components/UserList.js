import PlayButton from "./playButton";
import Video from './video';
function UserList({userInfo}){
return (
    <>
    {userInfo.map((item) => (
            <Video
              key={item.id}
              title={item.title}
              userImage={item.userImage}
              name={item.name}
              country={item.country}
              desc={item.desc}
              btn1={item.btn1}
              btn2={item.follow}
            >
              <PlayButton onClick={() => console.log('Playing...', item.title)}>Play</PlayButton>
            </Video>
          ))}
    </>
)
}

export default UserList