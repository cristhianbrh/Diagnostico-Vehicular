
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
        <p>Contenedor padre</p>
      {children}
    </div>
  )
}
