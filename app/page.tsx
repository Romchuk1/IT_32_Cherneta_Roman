import Link from "next/link";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    category: "Смартфон",
    price: "54 999 ₴",
    icon: "📱",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26",
    category: "Смартфон",
    price: "39 999 ₴",
    icon: "📲",
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "Ноутбук",
    price: "49 999 ₴",
    icon: "💻",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-label">МАГАЗИН СУЧАСНОЇ ТЕХНІКИ</span>

            <h1>
              Технології, які
              <br />
              змінюють <span>життя.</span>
            </h1>

            <p>
              Відкривай нові можливості разом із TechStore.
              Смартфони, ноутбуки та найкраща техніка в одному місці.
            </p>

            <div className="hero-actions">
              <Link href="/catalog" className="primary-button">
                Переглянути каталог →
              </Link>

              <Link href="/contacts" className="secondary-button">
                Наші контакти
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>1000+</strong>
                <span>товарів</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>онлайн-доступ</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>зручність</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="hero-device">
              <span>TECH</span>
              <div className="device-circle">T</div>
              <small>THE FUTURE IS HERE</small>
            </div>

            <div className="floating-card">
              <span>✦</span>
              Технології майбутнього
            </div>
          </div>
        </div>
      </section>

      <section className="categories section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">НАШ АСОРТИМЕНТ</span>
              <h2>Обирай свою техніку</h2>
            </div>

            <Link href="/catalog" className="text-link">
              Увесь каталог →
            </Link>
          </div>

          <div className="category-grid">
            <Link href="/catalog/smartphones" className="category-card">
              <span className="category-icon">📱</span>
              <h3>Смартфони</h3>
              <p>Технології завжди поруч</p>
              <span className="category-arrow">↗</span>
            </Link>

            <Link href="/catalog/laptops" className="category-card">
              <span className="category-icon">💻</span>
              <h3>Ноутбуки</h3>
              <p>Для роботи, навчання та ігор</p>
              <span className="category-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="products section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">ВИБІР ПОКУПЦІВ</span>
              <h2>Популярні товари</h2>
            </div>

            <Link href="/catalog" className="text-link">
              Більше товарів →
            </Link>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <span>{product.icon}</span>
                  <span className="product-badge">Популярне</span>
                </div>

                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <strong>{product.price}</strong>

                    <Link
                      href={
                        product.category === "Смартфон"
                          ? "/catalog/smartphones"
                          : "/catalog/laptops"
                      }
                      className="product-button"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}