import Head from '../component/head'
import Foot from '../component/foot'
import { Outlet } from 'react-router-dom'

function Layer() {
  return (
    <div className="container">
      <Head />
      <Outlet />
      <Foot />
    </div>
  )
}

export default Layer