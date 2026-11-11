import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main>
      <h1>Запис на консультацію викладача</h1>

      <p>
        Заповніть форму нижче, щоб залишити запит на консультацію.
      </p>

      <RequestForm />
    </main>
  );
}