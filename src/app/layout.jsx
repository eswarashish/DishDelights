import { Inter } from 'next/font/google'
import './globals.css'
import {Themeprovider} from '@/components/theme-provider'
import Appnav from '@/components/navbars/appnav'
import AuthProvider from '@/app/context/Authprovider'
import { Suspense } from 'react'
import { Add } from '@/components/buttons/add'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dish Delights',
  description: 'A recipe sharing community',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}><Themeprovider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><AuthProvider><Suspense><nav className="fixed top-0 left-0 right-0 z-20"><Appnav></Appnav></nav><div className='z-0 p-14'>{children}<Add></Add></div></Suspense>

          <footer className="bg-white rounded-lg shadow m-4 fixed bottom-0 justify-stretch dark:bg-gray-800">
              <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 DishDelights. All Rights Reserved.
              </span>
              </div>
          </footer>
          </AuthProvider></Themeprovider></body>
    </html>
  )
}
