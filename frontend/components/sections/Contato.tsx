'use client'

import { Box, Container, Typography, Grid, Paper, Button, IconButton } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLang } from '@/lib/i18n/context'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

export default function Contato() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: 'https://github.com/muller-g',
      color: '#fff',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muller-g/',
      color: '#0A66C2',
    },
  ]

  const infoItems = [
    { label: t.contato.info1_label, value: t.contato.info1_value },
    { label: t.contato.info2_label, value: t.contato.info2_value },
    { label: t.contato.info3_label, value: t.contato.info3_value },
    { label: t.contato.info4_label, value: t.contato.info4_value },
  ]

  return (
    <Box
      component="section"
      id="contato"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent 0%, rgba(108,99,255,0.04) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
              >
                {t.contato.overline}
              </Typography>
              <Typography
                variant="h2"
                sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}
              >
                {t.contato.heading1}{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t.contato.heading2}
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 460 }}>
                {t.contato.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  endIcon={<ArrowForwardIcon />}
                  href="https://wa.me/5547997003649"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ justifyContent: 'flex-start', px: 3, maxWidth: 320 }}
                >
                  {t.contato.btn_whatsapp}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  href="mailto:gabriel_muller98@hotmail.com"
                  sx={{
                    justifyContent: 'flex-start',
                    px: 3,
                    maxWidth: 320,
                    borderColor: 'rgba(255,255,255,0.15)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      background: 'rgba(108,99,255,0.08)',
                    },
                  }}
                >
                  {t.contato.btn_email}
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {socialLinks.map((s) => (
                  <IconButton
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 2,
                      '&:hover': {
                        color: s.color,
                        borderColor: s.color + '60',
                        background: s.color + '15',
                      },
                      transition: 'all 0.2s',
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <MotionPaper
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              elevation={0}
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.04))',
                border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#00D4AA',
                    boxShadow: '0 0 8px #00D4AA',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.4 },
                    },
                  }}
                />
                <Typography variant="body2" sx={{ color: '#00D4AA', fontWeight: 600 }}>
                  {t.contato.status}
                </Typography>
              </Box>

              {infoItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    py: 1.5,
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
// teste
