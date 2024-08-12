import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import "./index.css";

function App() {
  return (
    <div>
      <section>
        <h2>Profile</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>
      <section>
        <h2>Friends List</h2>
        <FriendList friends={friends} />
      </section>
    </div>
  );
}

export default App;
