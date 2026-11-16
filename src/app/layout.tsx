import type { Metadata, Viewport } from 'next'
import '@candy.thieves/ui-kit-lumos/dist/index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import '@/shared/styles/index.scss'
import { ReactNode } from 'react'
import { SkeletonProvider } from '@/app/providers'
import { APP_NAME } from '@/shared/constants'
import { ClientLayout } from '@/shared/layout/clientLayout'
import { AuthShell } from '@/widgets'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: 'LumosSuperAdmin — GraphQL admin panel for the Lumos application',
  icons: {
    icon: [
      {
        url: '/favicons/favicon-light-48.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicons/favicon-dark-48.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/favicons/apple-touch-icon.png',
        sizes: '108x108',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_NAME,
    description: 'LumosSuperAdmin — GraphQL admin panel for the Lumos application',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>
        <ClientLayout>
          <SkeletonProvider>
            <AuthShell>{children}</AuthShell>
          </SkeletonProvider>
        </ClientLayout>
      </body>
    </html>
  )
}
