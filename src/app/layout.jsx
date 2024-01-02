import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Appnav from '@/components/navbars/appnav'
// import { AuthProvider } from '@/components/auth/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dish Delights',
  description: 'A recipe sharing community',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >< ><nav className="fixed top-0 left-0 right-0 z-20"><Appnav></Appnav></nav><div className='z-0'>{children}</div></></ThemeProvider></body>
    </html>
  )
}
