"use client";

import { useState } from "react";

export default function TestErrorButton() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Тестова помилка завантаження каталогу");
  }

  return (
    <button
      className="test-error-button"
      onClick={() => setShouldThrow(true)}
    >
      Перевірити обробку помилок
    </button>
  );
}