import clsx from "clsx";
import css from "./FriendListItem.module.css";
console.log(css);
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOfline)}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
}
