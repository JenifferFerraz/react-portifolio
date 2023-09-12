import './globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '@/Components/NavBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export const metadata = {
  title: 'FTT',
  description: 'Fábrica de Tecnologia Turing'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className={` ${montserrat.variable} font-mont`}>
        {children}
      </header>
    </html>
  )
}
