'use client'

import { Box, Container, Typography, Grid, Paper, Chip, IconButton } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useLang } from '@/lib/i18n/context'

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)

export default function Projetos() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const projects = [
    {
      title: t.projetos.p1_title,
      desc: t.projetos.p1_desc,
      tags: ['OpenAI', 'Node.js', 'WhatsApp API', 'Redis'],
      category: t.projetos.p1_cat,
      color: '#6C63FF',
      highlight: true,
    },
    {
      title: t.projetos.p2_title,
      desc: t.projetos.p2_desc,
      tags: ['Next.js', 'Laravel', 'MySQL', 'Mercado Pago'],
      category: t.projetos.p2_cat,
      color: '#00D4AA',
    },
    {
      title: t.projetos.p3_title,
      desc: t.projetos.p3_desc,
      tags: ['React', 'NestJS', 'PostgreSQL', 'WhatsApp'],
      category: t.projetos.p3_cat,
      color: '#6C63FF',
    },
    {
      title: t.projetos.p4_title,
      desc: t.projetos.p4_desc,
      tags: ['Python', 'OpenAI', 'Laravel', 'Docker'],
      category: t.projetos.p4_cat,
      color: '#9B94FF',
      highlight: true,
    },
    {
      title: t.projetos.p5_title,
      desc: t.projetos.p5_desc,
      tags: ['Next.js', 'Node.js', 'Stripe', 'MongoDB'],
      category: t.projetos.p5_cat,
      color: '#00D4AA',
    },
    {
      title: t.projetos.p6_title,
      desc: t.projetos.p6_desc,
      tags: ['NestJS', 'Redis', 'Docker', 'PostgreSQL'],
      category: t.projetos.p6_cat,
      color: '#6C63FF',
    },
  ]

  return (
    <Box
      component="section"
      id="projetos"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.02) 50%, transparent 100%)',
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
            {t.projetos.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.projetos.heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 500, mx: 'auto' }}
          >
            {t.projetos.subtitle}
          </Typography>
        </MotionBox>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: project.highlight
                    ? 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,212,170,0.04))'
                    : 'rgba(255,255,255,0.02)',
                  border: project.highlight
                    ? '1px solid rgba(108,99,255,0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: project.color + '55',
                    transform: 'translateY(-4px)',
                    boxShadow: `0 16px 48px ${project.color}14`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      background: project.color + '20',
                      color: project.color,
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      border: `1px solid ${project.color}40`,
                    }}
                  />
                  <Box>
                    <IconButton
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}
                    >
                      <OpenInNewIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7, mb: 2.5, flexGrow: 1 }}
                >
                  {project.desc}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {project.tags.map((tag) => (
                    <Box
                      key={tag}
                      component="span"
                      sx={{
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 1,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        background: 'rgba(255,255,255,0.05)',
                        color: 'text.secondary',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      {tag}
                    </Box>
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
