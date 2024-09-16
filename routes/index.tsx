import { Head } from "$fresh/runtime.ts";
import Story from "../components/Story.tsx"

const titleText = "Beware of Alco Windows and Doors | A Miami Doral Window and Door Company"

const descriptionText = "Alco Windows and Doors got paid upfront over a year ago, and they still have not delivered the product. The Miami Beach city permit for the windows is expiring, I messaged the CEO Luis Alvarez directly after learning this but he has not responded. This could be a scam, beware of using them."
const keywordsText = "Window Company,alco, windows, impact windows, glass, fraud, scam, miami, miami beach, doral, florida, southern florida, window installation, window replacement, Alco, Miami Beach, Miami, window replacement company, window replacement contractor, new windows, window installers"

const HeadTag = () =>
  <Head>
    <title>{titleText}</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={descriptionText}/>
    <meta name="keywords" content={keywordsText}/>
    <meta property="og:title" content={titleText} />
    <meta itemprop="name" content={titleText} />
    <meta property="og:description" content={descriptionText} />
    <meta itemprop="description" content={descriptionText} />
    <meta property="og:image" content="https://cmsplatform.blob.core.windows.net/wwwalcoimpactcom/logos/b0152ee5-d59a-4626-a6c8-cf9cd2f82a05.png" />
    <meta itemprop="image" content="https://cmsplatform.blob.core.windows.net/wwwalcoimpactcom/logos/b0152ee5-d59a-4626-a6c8-cf9cd2f82a05.png" />
    <meta property="og:url" content="https://www.alcoimpact.org/" />
    <meta property="og:type" content="article" />
    <meta property="twitter:card" content={titleText} />
    <meta property="twitter:title" content={titleText} />
    <meta property="twitter:description" content={descriptionText} />
    <meta property="twitter:image" content="https://cmsplatform.blob.core.windows.net/wwwalcoimpactcom/logos/b0152ee5-d59a-4626-a6c8-cf9cd2f82a05.png" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://*; script-src 'none';"></meta>
    <link rel="canonical" href="https://www.alcoimpact.org/" />
    <link rel="icon" href="/windows_alert.png" type="image/png"></link>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  </Head>

export default function Home() {
  return (
<>
<HeadTag/>
<div class="min-h-screen bg-gray-100">
<header class="bg-gray-800 text-white py-4">
  <h1 class="text-center text-4xl font-bold">Beware of Alco Windows And Doors</h1>
  <h2 class="text-center text-2xl">Owned by Luis Alvarez</h2>
  <h2 class="text-center">They sell hurricane impact windows in Miami area, took payment in full over a year ago, they have not delivered, and they have stopped responding. There are multiple complaints against them in the BBB. </h2>
</header>
<main class="py-8 px-4">
  <Story/>
  <iframe
    src="https://www.nbcmiami.com/responds/after-months-of-waiting-man-turns-to-nbc6-responds-for-help-with-home-improvement-project/3365036/"
    class="
      w-full
      sm:w-11/12
      md:w-3/4
      h-[65vh]
      sm:h-[75vh]
      md:h-[85vh]
    "
    style="border:0;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</main>
<footer class="bg-gray-800 text-white py-4 text-center">
  <p>Beware of Alco Windows And Doors</p>
</footer>
</div>
</>
  );
}