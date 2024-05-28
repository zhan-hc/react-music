import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'antd/dist/reset.css'
import './assets/style/theme.scss'
import { Provider } from 'react-redux'
import store from './store'
import { LoadingProvider } from './components/loading/LoadingContext'

const basename = import.meta.env.VITE_BASE_URL
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <LoadingProvider>
        <BrowserRouter basename={basename}> 
          <App />
        </BrowserRouter>
      </LoadingProvider>
    </Provider>
)
