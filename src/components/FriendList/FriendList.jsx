export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <div>
              <img src={avatar} alt="Avatar" width="48" />
              <p>{name}</p>
              <p>{isOnline ? "Online" : "Ofline"}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
