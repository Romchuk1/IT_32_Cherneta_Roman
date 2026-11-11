
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Сталася помилка!</h1>

      <p>Не вдалося завантажити публікації.</p>

      <button onClick={() => reset()}>
        Спробувати ще раз
      </button>
    </main>
  );
}
