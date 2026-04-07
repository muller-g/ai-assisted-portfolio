'use client'

import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import ApiIcon from '@mui/icons-material/Api'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { useLang } from '@/lib/i18n/context'

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)

export default function Servicos() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const services = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 36 }} />,
      color: '#6C63FF',
      title: t.servicos.s1_title,
      desc: t.servicos.s1_desc,
      highlight: true,
      tags: ['OpenAI', 'Agentes de IA', 'LLMs'],
    },
    {
      icon: <ApiIcon sx={{ fontSize: 36 }} />,
      color: '#00D4AA',
      title: t.servicos.s2_title,
      desc: t.servicos.s2_desc,
      tags: ['Laravel', 'Node.js', 'NestJS'],
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 36 }} />,
      color: '#25D366',
      title: t.servicos.s3_title,
      desc: t.servicos.s3_desc,
      highlight: true,
      tags: ['WhatsApp API', 'Automação IA', 'Chatbot'],
    },
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 36 }} />,
      color: '#00D4AA',
      title: t.servicos.s4_title,
      desc: t.servicos.s4_desc,
      tags: ['Next.js', 'Laravel', 'Stripe'],
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 36 }} />,
      color: '#6C63FF',
      title: t.servicos.s5_title,
      desc: t.servicos.s5_desc,
      tags: ['React', 'Node.js', 'SQL'],
    },
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 36 }} />,
      color: '#9B94FF',
      title: t.servicos.s6_title,
      desc: t.servicos.s6_desc,
      highlight: true,
      tags: ['Automação IA', 'Integrações', 'Engenharia de Prompts'],
    },
  ]

  return (
    <Box component="section" id="servicos" ref={ref} sx={{ py: { xs: 8, md: 12 } }}>
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
            {t.servicos.overline}
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            {t.servicos.heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 540, mx: 'auto' }}
          >
            {t.servicos.subtitle}
          </Typography>
        </MotionBox>

        <Grid container spacing={3}>
          {services.map((service, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
              <MotionPaper
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: service.highlight
                    ? 'linear-gradient(135deg, rgba(108,99,255,0.07), rgba(0,212,170,0.04))'
                    : 'rgba(255,255,255,0.02)',
                  border: service.highlight
                    ? '1px solid rgba(108,99,255,0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 2,
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: service.color + '55',
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${service.color}18`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 2,
                    background: service.color + '18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1rem' }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7, mb: 2.5, flexGrow: 1 }}
                >
                  {service.desc}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {service.tags.map((tag) => (
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

        <MotionBox
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          sx={{ textAlign: 'center', mt: 6 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{ px: 5 }}
          >
            {t.servicos.cta}
          </Button>
        </MotionBox>
      </Container>
    </Box>
  )
}
