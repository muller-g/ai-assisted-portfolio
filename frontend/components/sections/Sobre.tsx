'use client'

import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import PsychologyIcon from '@mui/icons-material/Psychology'
import { useLang } from '@/lib/i18n/context'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

export default function Sobre() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const diferenciais = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 32, color: '#6C63FF' }} />,
      title: t.sobre.card1_title,
      desc: t.sobre.card1_desc,
    },
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 32, color: '#00D4AA' }} />,
      title: t.sobre.card2_title,
      desc: t.sobre.card2_desc,
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 32, color: '#6C63FF' }} />,
      title: t.sobre.card3_title,
      desc: t.sobre.card3_desc,
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 32, color: '#00D4AA' }} />,
      title: t.sobre.card4_title,
      desc: t.sobre.card4_desc,
    },
  ]

  return (
    <Box
      component="section"
      id="sobre"
      ref={ref}
      sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
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
                {t.sobre.overline}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {t.sobre.heading1}{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t.sobre.heading2}
                </Box>
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {t.sobre.p1} <strong>{t.sobre.p1_tech}</strong> {t.sobre.p1_mid}{' '}
                <strong>{t.sobre.p1_tech2}</strong>.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                {t.sobre.p2} <strong>{t.sobre.p2_highlight}</strong>
                {t.sobre.p2_end}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {t.sobre.p3}
              </Typography>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {diferenciais.map((item, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                  <MotionPaper
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    elevation={0}
                    sx={{
                      p: 3,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 2,
                      height: '100%',
                      transition: 'border-color 0.2s, transform 0.2s',
                      '&:hover': {
                        borderColor: 'rgba(108, 99, 255, 0.3)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ mb: 1.5 }}>{item.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '0.95rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
