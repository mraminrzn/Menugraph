import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from './components/home/NavBar'
import Footer from './components/home/Footer'

const iransens = localFont({
  src : '../../public/fonts/Sans a4fran3.ttf'
})  

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Menugraph سایت سفارش انلاین و رزرو رستوران ها  ',
  description: 'Generated by amin001114',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      
      <body className={iransens.className}>
      <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
