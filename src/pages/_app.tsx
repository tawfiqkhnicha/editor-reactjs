
import Template from '@/common/layout/template/Template'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/globals.css"
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (

    <Template>
        <Component {...pageProps} />
    </Template>
   
  )
}