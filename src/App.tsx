import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Home from './components/pages/home/home'
import About from './components/about'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter> 
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
