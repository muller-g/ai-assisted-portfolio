'use client'

import { Box, Container, Typography } from '@mui/material'
import { useLang } from '@/lib/i18n/context'

export default function Footer() {
  const { t } = useLang()

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {'<_muller.dev />'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Gabriel Muller. {t.footer.rights}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
