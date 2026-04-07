'use client'

import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import TranslateIcon from '@mui/icons-material/Translate'
import { useLang } from '@/lib/i18n/context'

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()
  return <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
}

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: t.nav.sobre, href: '#sobre' },
    { label: 'Stack', href: '#stack' },
    { label: t.nav.servicos, href: '#servicos' },
    { label: t.nav.projetos, href: '#projetos' },
    { label: t.nav.experiencia, href: '#experiencia' },
    { label: t.nav.contato, href: '#contato' },
  ]

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled ? 'rgba(5, 8, 22, 0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(108, 99, 255, 0.15)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {'<_muller.dev />'}
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Button>
              ))}

              {/* Language toggle */}
              <Button
                onClick={toggleLang}
                startIcon={<TranslateIcon sx={{ fontSize: 16 }} />}
                size="small"
                sx={{
                  ml: 1,
                  color: 'text.secondary',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  px: 1.5,
                  minWidth: 0,
                  '&:hover': {
                    borderColor: 'primary.main',
                    color: 'primary.light',
                    background: 'rgba(108,99,255,0.08)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {lang === 'pt' ? 'EN' : 'PT'}
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleNavClick('#contato')}
                sx={{ ml: 1 }}
              >
                {t.nav.contratar}
              </Button>
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: '#0D1117',
            borderLeft: '1px solid rgba(108, 99, 255, 0.2)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Language toggle mobile */}
          <Button
            onClick={toggleLang}
            startIcon={<TranslateIcon sx={{ fontSize: 15 }} />}
            size="small"
            sx={{
              color: 'text.secondary',
              fontSize: '0.78rem',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 2,
              px: 1.5,
              '&:hover': { borderColor: 'primary.main', color: 'primary.light' },
            }}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </Button>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton onClick={() => handleNavClick(link.href)}>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 500, color: 'text.secondary' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, px: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleNavClick('#contato')}
            >
              {t.nav.contratar}
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
