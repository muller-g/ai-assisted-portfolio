'use client'

import { Box, Container, Typography, Paper } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import WorkIcon from '@mui/icons-material/Work'
import { useLang } from '@/lib/i18n/context'

const MotionBox = motion(Box)
const MotionPaper = motion(Paper)

export default function Experiencia() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const timeline = [
    {
      period: t.experiencia.e1_period,
      role: t.experiencia.e1_role,
      company: t.experiencia.e1_company,
      desc: t.experiencia.e1_desc,
      highlight: true,
      techs: ['OpenAI', 'Node.js', 'Next.js', 'Laravel', 'WhatsApp API'],
    },
    {
      period: t.experiencia.e2_period,
      role: t.experiencia.e2_role,
      company: t.experiencia.e2_company,
      desc: t.experiencia.e2_desc,
      techs: ['React', 'Laravel', 'MySQL', 'Docker', 'Stripe'],
    },
    {
      period: t.experiencia.e3_period,
      role: t.experiencia.e3_role,
      company: t.experiencia.e3_company,
      desc: t.experiencia.e3_desc,
      techs: ['NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      period: t.experiencia.e4_period,
      role: t.experiencia.e4_role,
      company: t.experiencia.e4_company,
      desc: t.experiencia.e4_desc,
      techs: ['PHP', 'Vue.js', 'MySQL', 'JavaScript'],
    },
  ]

  return (
    <Box component="section" id="experiencia" ref={ref} sx={{ py: { xs: 8, md: 12 } }}>
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
            {t.experiencia.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.experiencia.heading}
          </Typography>
        </MotionBox>

        <Box sx={{ maxWidth: 780, mx: 'auto', position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 28 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #6C63FF, rgba(108,99,255,0.1))',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {timeline.map((item, i) => (
              <MotionBox
                key={item.period}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 58,
                    height: 58,
                    minWidth: 58,
                    borderRadius: '50%',
                    background: item.highlight
                      ? 'linear-gradient(135deg, #6C63FF, #00D4AA)'
                      : 'rgba(108,99,255,0.15)',
                    border: '2px solid',
                    borderColor: item.highlight ? 'transparent' : 'rgba(108,99,255,0.3)',
                    zIndex: 1,
                  }}
                >
                  <WorkIcon sx={{ fontSize: 22, color: item.highlight ? '#fff' : 'primary.main' }} />
                </Box>

                <MotionPaper
                  elevation={0}
                  sx={{
                    p: 3,
                    flex: 1,
                    background: item.highlight
                      ? 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.04))'
                      : 'rgba(255,255,255,0.02)',
                    border: item.highlight
                      ? '1px solid rgba(108,99,255,0.25)'
                      : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 2,
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: 'rgba(108,99,255,0.3)' },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: 'primary.light', fontWeight: 600, letterSpacing: 1 }}
                  >
                    {item.period}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, mb: 0.25, fontSize: '1rem' }}>
                    {item.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600, mb: 1.5 }}>
                    {item.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    {item.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {item.techs.map((tech) => (
                      <Box
                        key={tech}
                        component="span"
                        sx={{
                          px: 1.25,
                          py: 0.4,
                          borderRadius: 1,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          background: 'rgba(108,99,255,0.1)',
                          color: 'primary.light',
                          border: '1px solid rgba(108,99,255,0.2)',
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </MotionPaper>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
