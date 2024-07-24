import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ReduxProvider } from '@/redux/ReduxProvider'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='w-full block h-auto' >
      <body className="w-full flex  min-h-screen flex-col bg-white">
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
