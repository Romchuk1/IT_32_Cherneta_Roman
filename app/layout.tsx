import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechStore — Магазин техніки",
  description: "Сучасний інтернет-магазин смартфонів і ноутбуків",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              Tech<span>Store</span>
            </Link>

            <nav className="navigation">
              <Link href="/">Головна</Link>
              <Link href="/catalog">Каталог</Link>
              <Link href="/catalog/smartphones">Смартфони</Link>
              <Link href="/catalog/laptops">Ноутбуки</Link>
              <Link href="/contacts">Контакти</Link>
            </nav>

            <Link href="/catalog" className="header-button">
              До покупок
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-content">
            <Link href="/" className="logo">
              Tech<span>Store</span>
            </Link>

            <p>Твоя техніка. Твій вибір.</p>

            <p>© 2026 TechStore. Усі права захищені.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}