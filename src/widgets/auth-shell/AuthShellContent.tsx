'use client'

import { clsx, LogOut, Menu, Sidebar } from '@candy.thieves/ui-kit-lumos'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { useAuth } from '@/features/auth/model/hooks'
import { useActiveMenuItem } from '@/shared/lib/hooks'
import { isMobileMenuHiddenByPath, mobileMenuItems, sidebarItems } from '@/shared/navigation'
import { LogoutModal } from '@/shared/ui/modal/LogoutModal'
import s from './AuthShell.module.scss'

export const AuthShellContent = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const { user } = useAuth()
  const { sidebarId: activeSidebarId, mobileMenuId: activeMobileMenuId } = useActiveMenuItem(
    user?.id
  )
  const isMobileMenuHidden = isMobileMenuHiddenByPath(pathname)
  const [logoutOpen, setLogoutOpen] = useState(false)

  const userId = user?.id

  return (
    <div className={clsx(s.container, s.containerAuthenticated)}>
      <aside className={s.sidebar}>
        <Sidebar
          linkTag={Link}
          userId={userId}
          activeId={activeSidebarId}
          items={sidebarItems}
          logOutIcon={<LogOut />}
          onLogout={() => setLogoutOpen(true)}
        />
      </aside>

      <LogoutModal open={logoutOpen} onClose={() => setLogoutOpen(false)} />

      <div className={s.content}>{children}</div>

      {!isMobileMenuHidden && (
        <div className={s.bottomNavigation}>
          <Menu
            userId={userId}
            linkTag={Link}
            activeId={activeMobileMenuId}
            items={mobileMenuItems}
          />
        </div>
      )}
    </div>
  )
}
