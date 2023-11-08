import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//Aqui creamos un nuevo tipo de funcion, la cual sera incluida como el getLayout.
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}
// Al crearla anulamos la propiedad de Component para asi poder usar la funcion anterior.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}