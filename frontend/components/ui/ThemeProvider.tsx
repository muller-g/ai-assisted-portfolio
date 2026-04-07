'use client'

import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/lib/theme'
import StyledRegistry from '@/lib/registry'
import { LangProvider } from '@/lib/i18n/context'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledRegistry>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LangProvider>{children}</LangProvider>
      </MuiThemeProvider>
    </StyledRegistry>
  )
}
