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
  title: 'منوگراف | طراحی سایت در کرمان',
  description: 'منوگراف یک ابزار قدرتمند برای طراحی وبسایت ها و بهینه سازی برای رتبه بالا در گوگل است',
  keywords:"منوگراف, طراحی سایت, کرمان, رتبه بالا در گوگل"
  ,
  verification: {
    google: "zWi0UqyvNRVWh4mYYyDnQcLLFUbCF_4CS4W_CeBRip0",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html className=' body-dark dark:body-dark bg-fixed' lang="en">
      
      <body className={iransens.className }>
      <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
