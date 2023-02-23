
import Template from '@/common/layout/template/Template'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/globals.scss"
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider, connect } from "react-redux";
import store from '@/rematch/store/store'


export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);

  return (
    <Provider store={store}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </Provider>
  )
}