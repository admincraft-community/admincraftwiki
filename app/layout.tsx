import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
});

const footerLinks = [
  { href: '/docs/getting_started/contribution', label: 'Contribute' },
  { href: '/docs/code-of-conduct', label: 'Code of Conduct' },
  { href: '/docs/license', label: 'License' }
] as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <footer className="py-6 border-t border-border">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Admincraft Wiki. Made with ❤️ by{' '}
              <a 
                href="https://blstmo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                blstmo
              </a>
            </p>
            <nav className="flex gap-4 text-sm">
              {footerLinks.map(({ href, label }) => (
                <Link 
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}