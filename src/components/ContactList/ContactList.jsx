import Contact from "../Contact/Contact"
import style from "./ContactList.module.css"
import { useSelector } from "react-redux"
import { selectVisibleContacts } from "../../redux/selector"


export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts)

  return (
    <ul className={style.tottalList}>
      {visibleContacts.map((item) => (
        <li
          className={style.contactBorder}
          key={item.id}>
          <Contact contact={item}/>
        </li>
      ))}
    </ul>
  )
}
