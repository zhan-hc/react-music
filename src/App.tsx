import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useLoading } from './components/loading/LoadingContext';
import { setLoadingHandler } from './components/loading/loadingManager'
import { Spin } from 'antd';
import Home from './components/pages/home/home'
import About from './components/about'

function App() {
  const { loading, setLoading } = useLoading();
  useEffect(() => {
    setLoadingHandler(setLoading);
  }, [setLoading]);
  return (
    <Spin spinning={loading}>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
      </Routes>
    </Spin>
  )
}

export default App
