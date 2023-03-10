import '../styles/globals.css';
import StyledRender from '../components/providers/StyledRender';
import AppProvider from '../contexts/contextProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <StyledRender>
        <AppProvider>
          <body>{children}</body>
        </AppProvider>
      </StyledRender>
    </html>
  )
}
