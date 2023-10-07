import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CidadaniaConectada',
  description: 'Um aplicativo que permite a participação cidadã na forma de relatos de problemas e descobrimento de ofertas de serviços públicos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.variable}>
        <div id='appContainer'>
          {children}
        </div>
      </body>
    </html>
  )
}
