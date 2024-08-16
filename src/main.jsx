import ReactDOM from 'react-dom/client'
import './index.css'
import axios from 'axios'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'

/** axios setup */
axios.defaults.baseURL = "https://api.themoviedb.org/3" 
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
