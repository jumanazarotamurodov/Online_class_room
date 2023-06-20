import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Log from './Log in'
import Teacher from './Teacher'
import NoPage from './NoPage'
import Bottom from './Bottom'

const Page = () => {
  return (
    <div className='Page'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='kirish' element={<Log />} />
            <Route path='tech' element={<Teacher />} />
            <Route path='*' element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Bottom />
    </div>
  )
}

export default Page