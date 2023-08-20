import './globals.scss'
import { Inter } from 'next/font/google'
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next13 + Auth',
  description: 'Next13 with Auth.js base build',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
