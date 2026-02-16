import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import './globals.css'
import { Preloader } from "@/components/Preloader"
import { CustomCursor } from "@/components/ui/CustomCursor"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'Hue - Premium Social Media Agency',
  description: 'Short form done right. Turning content chaos into consistent growth.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased bg-[#F3F2ED] text-[#121212] overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
