'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Provider({children} : {children :any}) {

  return (
    <ThemeProvider  attribute='class'>{children}</ThemeProvider>
  )
}
