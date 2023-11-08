import { ReactElement } from 'react';

import Link from 'next/link';
import { NextPageWithLayout } from './_app';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { DarkLayout } from '@/components/Layouts/DarkLayout';


const AboutPage: NextPageWithLayout = () => {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}

export default AboutPage;

/*Este es un nuevo de tipo el cual creamos para incluir la funcion getLayout, asi como tambien debemos 
crear un nuevo tipo para nuestro appProps, para que este puede anular la propiedad de Components,
y asi poder usar la funcion que hemos creado aqui. */
AboutPage.getLayout = function getLayout( page: ReactElement ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}