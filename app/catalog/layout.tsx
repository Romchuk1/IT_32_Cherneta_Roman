import Link from "next/link";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="catalog-navigation">
        <div className="container catalog-navigation-content">
          <span className="catalog-navigation-title">
            Категорії товарів
          </span>

          <nav>
            <Link href="/catalog">Усі товари</Link>
            <Link href="/catalog/smartphones">Смартфони</Link>
            <Link href="/catalog/laptops">Ноутбуки</Link>
          </nav>
        </div>
      </div>

      {children}
    </div>
  );
}