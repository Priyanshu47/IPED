import { Mulish } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'
import Sidebar from '@/components/sidebar'
import Header from '@/components/header'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'IDP',
  description: 'IDP app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
      {/* <GlobalState>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />

              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"> */}
                    {children}
                  {/* </div>
                </main>
              </div>
            </div>
          </GlobalState> */}
      </body>
    </html>
  )
}
