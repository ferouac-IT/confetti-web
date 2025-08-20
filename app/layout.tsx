import './globals.css';

export const metadata = {
  title: 'Confetti',
  description: 'Admin dashboard and landing page for Confetti event planning platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
