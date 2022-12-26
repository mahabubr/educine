import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import AuthProvider from '../contexts/AuthProvider'
import { Toaster } from 'react-hot-toast'

// Query Client
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NavBar></NavBar>
        <Component {...pageProps} />
        <Footer></Footer>
      </AuthProvider>
    </QueryClientProvider>
  </>
}
