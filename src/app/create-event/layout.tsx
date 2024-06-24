export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="bg-admin-back bg-cover bg-bottom h-[120vh]">
          {children}
      </main>
    );
  }
  