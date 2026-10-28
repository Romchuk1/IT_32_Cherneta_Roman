import InteractiveList from "./InteractiveList";

const books = [
  { id: 1, title: "Гаррі Поттер", author: "Джоан Ролінґ", genre: "Фентезі" },
  { id: 2, title: "Дюна", author: "Френк Герберт", genre: "Фантастика" },
  { id: 3, title: "1984", author: "Джордж Орвелл", genre: "Антиутопія" },
  { id: 4, title: "Марсіанин", author: "Енді Вейр", genre: "Фантастика" },
  { id: 5, title: "Володар перснів", author: "Джон Толкін", genre: "Фентезі" },
  { id: 6, title: "Фундація", author: "Айзек Азімов", genre: "Фантастика" },
];

export default function PracticePage() {
  return (
    <main className="library">
      <h1>Електронна бібліотека</h1>

      <p className="total">
        Усього книг: {books.length}
      </p>

      <InteractiveList books={books} />
    </main>
  );
}