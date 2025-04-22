import React, { useEffect } from "react";

export default function Credits() {
  useEffect(() => {
    document.title = "Credits | Simar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)]">
        /credits
      </h1>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-6">
            Built With
          </h2>
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-[var(--color-text-light)]">
              This site is built using modern web technologies and tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-[var(--color-text-light)]">
              <li>
                <a href="https://react.dev" className="text-[var(--color-primary)]">
                  React
                </a>{" "}
                - For building the user interface
              </li>
              <li>
                <a href="https://vitejs.dev" className="text-[var(--color-primary)]">
                  Vite
                </a>{" "}
                - For lightning-fast development and building
              </li>
              <li>
                <a href="https://tailwindcss.com" className="text-[var(--color-primary)]">
                  Tailwind CSS
                </a>{" "}
                - For styling and responsive design
              </li>
              <li>
                <a href="https://reactrouter.com" className="text-[var(--color-primary)]">
                  React Router
                </a>{" "}
                - For seamless navigation
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-6">
            Special Thanks
          </h2>
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-[var(--color-text-light)]">
              A big thank you to the open-source community and the creators of all the tools and libraries that made this site possible.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-6">
            Inspiration
          </h2>
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-[var(--color-text-light)]">
              This site's design and functionality draws inspiration from various developer portfolios and blogs in the community.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}