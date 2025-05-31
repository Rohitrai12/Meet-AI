import React from 'react'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="bg-muted flex flex-col min-h-svh p-6 md:p-10 items-center justify-center h-screen">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  )
}

export default Layout
