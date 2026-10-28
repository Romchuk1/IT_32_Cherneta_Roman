"use client";

import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
};

export default function InteractiveList({ books }: { books: Book[] }) {
  const [query, setQuery] = useState("");
  const [onlyFantasy, setOnlyFantasy] = useState(false);

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesGenre = !onlyFantasy || book.genre === "Фантастика";

    return matchesTitle && matchesGenre;
  });

  return (
    <section>
      <h2>Каталог книг</h2>

      <input
        className="search"
        type="text"
        placeholder="Введіть назву книги..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <label className="filter">
        <input
          type="checkbox"
          checked={onlyFantasy}
          onChange={(event) => setOnlyFantasy(event.target.checked)}
        />
        Лише фантастика
      </label>

      <p className="results">
        Знайдено книг: {filteredBooks.length}
      </p>

      {filteredBooks.length > 0 ? (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <article className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>Автор: {book.author}</p>
              <p>Жанр: {book.genre}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty">Нічого не знайдено</p>
      )}
    </section>
  );
}