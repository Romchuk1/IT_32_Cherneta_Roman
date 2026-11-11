"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "@/app/actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction} noValidate>
      <div>
        <label htmlFor="fullName">ПІБ студента:</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Введіть ваше ПІБ"
        />
        {state.errors.fullName && (
          <p className="error">{state.errors.fullName[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">Електронна пошта:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        {state.errors.email && (
          <p className="error">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="topic">Тема консультації:</label>
        <select id="topic" name="topic" defaultValue="">
          <option value="" disabled>
            Оберіть тему
          </option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Next.js">Next.js</option>
        </select>
        {state.errors.topic && (
          <p className="error">{state.errors.topic[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="details">Ваше запитання:</label>
        <textarea
          id="details"
          name="details"
          placeholder="Опишіть, що вас цікавить..."
          rows={5}
        />
        {state.errors.details && (
          <p className="error">{state.errors.details[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати"}
      </button>

      {state.message && (
        <p
          className={state.success ? "success" : "error"}
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}