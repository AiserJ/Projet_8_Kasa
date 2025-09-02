// Cadre de l'application //

import Head from '../component/head';
import Foot from '../component/foot';
import { Outlet } from 'react-router-dom';

function Layer() {
  return (
    <>
      <Head />
      <main className="container">
        <Outlet />
      </main>
      <Foot />
    </>
  );
}

export default Layer;