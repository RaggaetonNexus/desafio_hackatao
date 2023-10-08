'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import VLibras from './components/vLibras/vLibras';

import Header from './components/header/header'
import Footer from './components/footer/footer'
import SideBar from './components/sideBar/sideBar';
import AccessibilityBar from './components/accessibilityBar/accessibilityBar';
import { FontSizeProvider } from './components/fontSizeProvider/fontSizeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.variable}>
        <FontSizeProvider>
          <VLibras/>
          <AccessibilityBar />
          <Header />
          <div id='appContainer'>
            <SideBar/>   
            <div id='pageContainer'>
              {children}
            </div>
          </div>
          <Footer />
        </FontSizeProvider>
      </body>
    </html>
  )
}
