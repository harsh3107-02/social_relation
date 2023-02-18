import "./online.css";

export default function online({ user }) {
  return (
    <li>
      <div className="userprofile">
        <img src={user.img} alt="" className="userimg" />
        <span className="onlinebar"></span>
        <span>{user.name}</span>
      </div>
    </li>
  );
}
