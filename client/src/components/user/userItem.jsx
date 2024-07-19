import s from "./user.module.scss"
const UsersItem =({name,phone})=>{
  return(
    <li className={s.list_item}>
      <p className={s.list_item_text}>
        <span className="bold">Name</span>
      </p>
      <p className={s.list_item_text}>
        <span className="bold">Phone</span>
      </p>
    </li>
  )
}
export default UsersItem