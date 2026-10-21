import Link from "next/link";

export default function ContactsPage() {
  return (
    <section className="contacts-page">
      <div className="container">
        <div className="page-heading">
          <span className="section-label">TECHSTORE / КОНТАКТИ</span>
          <h1>Зв'яжися з нами</h1>
          <p>
            Маєш запитання щодо товарів або замовлення?
            Ми завжди готові допомогти.
          </p>
        </div>

        <div className="contacts-grid">
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <h2>Наша адреса</h2>
            <p>м. Луцьк, Україна</p>
          </div>

          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <h2>Телефон</h2>
            <p>+380 00 000 00 00</p>
          </div>

          <div className="contact-card">
            <span className="contact-icon">✉️</span>
            <h2>Електронна пошта</h2>
            <p>support@techstore.example</p>
          </div>
        </div>

        <div className="contacts-banner">
          <div>
            <h2>Шукаєш нову техніку?</h2>
            <p>Переглянь наш каталог смартфонів і ноутбуків.</p>
          </div>

          <Link href="/catalog" className="primary-button">
            Перейти до каталогу →
          </Link>
        </div>
      </div>
    </section>
  );
}