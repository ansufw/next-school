

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
        Dashboard layout
        {children}
    </div>
  ;
}
