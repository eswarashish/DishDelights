"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export async function Themeprovider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
