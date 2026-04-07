import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ui/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://www.gabrielmullerdev.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gabriel Muller — Desenvolvedor Fullstack & IA',
    template: '%s | Gabriel Muller Dev',
  },
  description:
    'Desenvolvedor Fullstack desde 2021, especializado em automação com inteligência artificial, agentes de IA, integrações com OpenAI, Laravel, Next.js, Node.js e sistemas escaláveis.',
  keywords: [
    'Desenvolvedor Fullstack',
    'Desenvolvedor de agentes de IA',
    'Automação com inteligência artificial',
    'Integração com OpenAI',
    'Laravel + IA',
    'Next.js + IA',
    'Desenvolvimento de chatbots',
    'Automação WhatsApp',
    'Node.js',
    'React',
    'NestJS',
    'PHP',
    'Docker',
    'Gabriel Muller',
  ],
  authors: [{ name: 'Gabriel Muller', url: siteUrl }],
  creator: 'Gabriel Muller',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Gabriel Muller Dev',
    title: 'Gabriel Muller — Desenvolvedor Fullstack & Especialista em IA',
    description:
      'Fullstack desde 2021. Especialista em automação com IA, agentes inteligentes, integrações com OpenAI, Laravel, Next.js e sistemas escaláveis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gabriel Muller — Desenvolvedor Fullstack & IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Muller — Desenvolvedor Fullstack & IA',
    description:
      'Fullstack desde 2021. Especialista em automação com IA, agentes inteligentes e integrações com OpenAI.',
    images: ['/og-image.png'],
    creator: '@_muller.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
