import '../App/App.css'
import ContactFrom from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList"
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectError} from '../../redux/selector'

 
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      <h1>Phone Book</h1>
      <ContactFrom />
      <SearchBox />
      {loading && <div>Loading...</div>}
      {error && <div>error...</div>}
      <ContactList />
    </>
  )
}

export default App
