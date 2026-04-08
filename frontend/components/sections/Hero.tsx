'use client'

import { Box, Typography, Button, Chip, Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CodeIcon from '@mui/icons-material/Code'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { useLang } from '@/lib/i18n/context'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

export default function Hero() {
  const { t } = useLang()

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const highlights = [
    { label: t.hero.chip_fullstack, icon: <CodeIcon sx={{ fontSize: 14 }} /> },
    { label: t.hero.chip_ia, icon: <AutoAwesomeIcon sx={{ fontSize: 14 }} /> },
    { label: t.hero.chip_disponivel, color: '#00D4AA' },
  ]

  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
      }}
    >
      {/* Background blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '-5%',
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Coluna de texto */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Chips */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}
            >
              {highlights.map((h) => (
                <Chip
                  key={h.label}
                  label={h.label}
                  icon={h.icon}
                  size="small"
                  sx={{
                    background: 'rgba(108, 99, 255, 0.12)',
                    border: '1px solid rgba(108, 99, 255, 0.3)',
                    color: h.color || 'primary.light',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                  }}
                />
              ))}
            </MotionBox>

            {/* Heading */}
            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem', lg: '4.2rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              {t.hero.heading1}{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t.hero.heading2}
              </Box>{' '}
            </MotionTypography>

            {/* Subtitle */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: 540,
                lineHeight: 1.75,
              }}
            >
              {t.hero.subtitle}
            </MotionBox>

            {/* CTAs */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollTo('#projetos')}
                sx={{ fontSize: '1rem', px: 4 }}
              >
                {t.hero.cta_projetos}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollTo('#contato')}
                sx={{
                  fontSize: '1rem',
                  px: 4,
                  borderColor: 'rgba(108, 99, 255, 0.5)',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'rgba(108, 99, 255, 0.08)',
                  },
                }}
              >
                {t.hero.cta_contato}
              </Button>
            </MotionBox>

            {/* Stats */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 3, md: 5 },
                mt: 6,
                pt: 4,
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {[
                { value: t.hero.stat1_value, label: t.hero.stat1_label },
                { value: t.hero.stat2_value, label: t.hero.stat2_label },
                { value: t.hero.stat3_value, label: t.hero.stat3_label },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </MotionBox>
          </Grid>

          {/* Coluna da foto */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: { xs: 220, sm: 280, md: 353 },
                  height: { xs: 320, sm: 410, md: 516 },
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '3px solid #6C63FF',
                }}
              >
                <Image
                  src="/eu.jpeg"
                  alt="Gabriel Muller — Desenvolvedor Fullstack e especialista em IA"
                  fill
                  sizes="(max-width: 600px) 220px, (max-width: 900px) 280px, 353px"
                  style={{ objectFit: 'cover', objectPosition: 'center top', transform: 'scale(1.15)', transformOrigin: 'center top' }}
                  priority
                />
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
