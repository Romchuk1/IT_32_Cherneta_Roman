const smartphones = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    description: "Потужний смартфон для фото, відео та щоденних завдань.",
    price: "54 999 ₴",
    icon: "📱",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26",
    description: "Сучасний дисплей і висока продуктивність.",
    price: "39 999 ₴",
    icon: "📲",
  },
  {
    id: 3,
    name: "Google Pixel",
    description: "Якісна камера та зручна система.",
    price: "32 999 ₴",
    icon: "📱",
  },
];

export default function SmartphonesPage() {
  return (
    <section className="catalog-page">
      <div className="container">
        <div className="page-heading">
          <span className="section-label">КАТЕГОРІЯ / СМАРТФОНИ</span>
          <h1>Смартфони</h1>
          <p>Обирай смартфон для роботи, навчання та розваг.</p>
        </div>

        <div className="catalog-products">
          {smartphones.map((phone) => (
            <article className="catalog-product-card" key={phone.id}>
              <div className="catalog-product-icon">{phone.icon}</div>

              <div className="catalog-product-info">
                <h2>{phone.name}</h2>
                <p>{phone.description}</p>

                <div className="catalog-product-bottom">
                  <strong>{phone.price}</strong>
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