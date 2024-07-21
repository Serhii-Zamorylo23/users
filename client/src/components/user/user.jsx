import s from "./user.module.scss"
import UsersItem from "./userItem"

const User = ({users}) => {
  return (
    <div className="container">
      <h2>Users list</h2>
      <ul className={s.list}>
        {users.map((user, index) => (
          <UsersItem key={index} name={user.name} phone={user.phone} />
        ))}
      </ul>
    </div>
  );
};
export default User