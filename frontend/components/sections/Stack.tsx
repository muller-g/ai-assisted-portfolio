'use client'

import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/lib/i18n/context'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

const techsByCategory = {
  backend: ['Laravel', 'Node.js', 'NestJS', 'PHP', 'Express'],
  frontend: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'MUI'],
  db: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
  devops: ['Docker', 'Linux', 'Nginx', 'Git', 'CI/CD'],
  ia: ['OpenAI API', 'LLMs', 'Agentes de IA', 'Engenharia de Prompts', 'Automação IA'],
  integracoes: ['WhatsApp API', 'Stripe', 'Mercado Pago', 'REST APIs', 'Webhooks'],
}

export default function Stack() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const categories = [
    { key: 'backend', label: t.stack.cat_backend, color: '#6C63FF', techs: techsByCategory.backend },
    { key: 'frontend', label: t.stack.cat_frontend, color: '#00D4AA', techs: techsByCategory.frontend },
    { key: 'db', label: t.stack.cat_db, color: '#6C63FF', techs: techsByCategory.db },
    { key: 'devops', label: t.stack.cat_devops, color: '#00D4AA', techs: techsByCategory.devops },
    { key: 'ia', label: t.stack.cat_ia, color: '#9B94FF', highlight: true, techs: techsByCategory.ia },
    { key: 'integracoes', label: t.stack.cat_integracoes, color: '#00D4AA', techs: techsByCategory.integracoes },
  ]

  return (
    <Box
      component="section"
      id="stack"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent 0%, rgba(108,99,255,0.03) 50%, transparent 100%)',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
          >
            {t.stack.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.stack.heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 520, mx: 'auto' }}
          >
            {t.stack.subtitle}
          </Typography>
        </MotionBox>

        <Grid container spacing={3}>
          {categories.map((cat, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cat.key}>
              <MotionPaper
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  background: cat.highlight
                    ? 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.05))'
                    : 'rgba(255,255,255,0.02)',
                  border: cat.highlight
                    ? '1px solid rgba(108,99,255,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, transform 0.2s',
                  '&:hover': {
                    borderColor: cat.color + '55',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {cat.highlight && (
                  <Chip
                    label={t.stack.badge}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: 'rgba(108, 99, 255, 0.2)',
                      border: '1px solid rgba(108,99,255,0.4)',
                      color: 'primary.light',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                    }}
                  />
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color: cat.color,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    display: 'block',
                    mb: 2,
                  }}
                >
                  {cat.label}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {cat.techs.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        background: 'rgba(255,255,255,0.05)',
                        color: 'text.secondary',
                        fontSize: '0.78rem',
                        border: '1px solid rgba(255,255,255,0.08)',
                        '&:hover': { background: 'rgba(108,99,255,0.1)', color: 'text.primary' },
                        transition: 'all 0.2s',
                      }}
                    />
                  ))}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
