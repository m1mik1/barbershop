import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-2 text-xs text-neutral-600 dark:text-neutral-400 divide-x divide-neutral-200 dark:divide-neutral-800">
          <li className="px-3">© {year}</li>
          <li className="px-3">Щодня 09:00–20:00</li>
          <li className="px-3">
            <a href="tel:+380221351488" className="underline-offset-4 hover:underline hover:text-neutral-900 dark:hover:text-white">
              +380 221 351 488
            </a>
          </li>
          <li className="px-3">
            <a href="mailto:r.pastushenko.work13@gmail.com" className="underline-offset-4 hover:underline hover:text-neutral-900 dark:hover:text-white">
              r.pastushenko.work13@gmail.com
            </a>
          </li>
          <li className="px-3">
            <Link href="/privacy" className="underline-offset-4 hover:underline hover:text-neutral-900 dark:hover:text-white">
              Політика конфіденційності
            </Link>
          </li>
          <li className="px-3">
            <Link href="/terms" className="underline-offset-4 hover:underline hover:text-neutral-900 dark:hover:text-white">
              Умови використання
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
