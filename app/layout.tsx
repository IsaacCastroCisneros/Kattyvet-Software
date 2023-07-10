import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppContext } from './context/AppContext'
import { Popup,Navbar } from '@/.'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KatyVet',
  description: 'nothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppContext>
      <html lang="en" className="bg-bg">
        <body className={`${inter.className} flex items-stretch h-[100vh]`}>
          <Popup/>
          <header className="w-[240px] left-0 top-0 block">
            <Navbar />
          </header>
          <main className="bg-bg flex-1">{children}</main>
        </body>
      </html>
    </AppContext>
  );
}
