import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alco Fraud Exposé</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Exposing fraudulent activities by Alco, a hurricane window and glass door company." />
        <meta name="keywords" content="alco, windows, impact windows, glass, fraud, scam, miami, miami beach" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <div class="min-h-screen bg-gray-100">
        <header class="bg-gray-800 text-white py-4">
          <h1 class="text-center text-4xl font-bold">My Experience with Alco</h1>
        </header>
        <main class="py-8 px-4">
          <h2 class="text-2xl font-semibold mb-4">Alco Impact Is A Fraud</h2>
          <p class="text-lg">
            Do not buy impact windows from Alco. They have a lot of fake reviews
            on Google, but the reality is very different.
          </p>
          <p>
            More content coming here soon...
          </p>
        </main>
        <footer class="bg-gray-800 text-white py-4 text-center">
          <p>© 2024 Alco Fraud Exposé</p>
        </footer>
      </div>
    </>
  );
}