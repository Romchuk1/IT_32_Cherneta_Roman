import Link from "next/link";
import TestErrorButton from "./TestErrorButton";

const categories = [
  {
    title: "Смартфони",
    description: "Сучасні телефони для роботи, навчання та розваг.",
    icon: "📱",
    href: "/catalog/smartphones",
    count: "120+ моделей",
  },
  {
    title: "Ноутбуки",
    description: "Потужні пристрої для будь-яких завдань.",
    icon: "💻",
    href: "/catalog/laptops",
    count: "80+ моделей",
  },
];

export default async function CatalogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <section className="catalog-page">
      <div className="container">
        <div className="page-heading">
          <span className="section-label">TECHSTORE / КАТАЛОГ</span>

          <h1>Каталог товарів</h1>

          <p>
            Обирай техніку, яка відповідає твоїм потребам.
            Знайди свій наступний пристрій у TechStore.
          </p>
        </div>

        <div className="catalog-grid">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="catalog-card"
              key={category.title}
            >
              <div className="catalog-card-icon">{category.icon}</div>

              <span className="catalog-count">{category.count}</span>

              <h2>{category.title}</h2>

              <p>{category.description}</p>
              

              <span className="catalog-link">
                Переглянути товари →
              </span>
            </Link>
          ))}
        </div>

        <div className="test-error-section">
          <TestErrorButton />
        </div>
      </div>
    </section>
  );
}