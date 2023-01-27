"use client"

import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import muiTheme from './core/muiTheme'
import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <>
            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}
