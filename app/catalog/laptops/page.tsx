const laptops = [
  {
    id: 1,
    name: "MacBook Air",
    description: "Легкий ноутбук для роботи, навчання та подорожей.",
    price: "49 999 ₴",
    icon: "💻",
  },
  {
    id: 2,
    name: "ASUS ROG",
    description: "Потужний ноутбук для ігор і складних завдань.",
    price: "64 999 ₴",
    icon: "🎮",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad",
    description: "Практичний ноутбук для щоденного використання.",
    price: "27 999 ₴",
    icon: "💻",
  },
];

export default function LaptopsPage() {
  return (
    <section className="catalog-page">
      <div className="container">
        <div className="page-heading">
          <span className="section-label">КАТЕГОРІЯ / НОУТБУКИ</span>
          <h1>Ноутбуки</h1>
          <p>Пристрої для навчання, роботи, творчості та ігор.</p>
        </div>

        <div className="catalog-products">
          {laptops.map((laptop) => (
            <article className="catalog-product-card" key={laptop.id}>
              <div className="catalog-product-icon">{laptop.icon}</div>

              <div className="catalog-product-info">
                <h2>{laptop.name}</h2>
                <p>{laptop.description}</p>

                <div className="catalog-product-bottom">
                  <strong>{laptop.price}</strong>
                  <span className="stock-label">У наявності</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}