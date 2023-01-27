import { Outlet } from 'react-router-dom'
import BreadCrump from '../../Pages/Public/ProductsPage/BreadCrumb/BreadCrump'
const Main = () => {
  return (
    <>
        <BreadCrump/>
        <Outlet/>
    </>
  )
}

export default Main