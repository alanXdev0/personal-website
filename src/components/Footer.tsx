export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
