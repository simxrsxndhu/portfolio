import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black mt-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <span className="text-gray-800 dark:text-[var(--color-text-light)]">Made with </span>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            Vite
          </a>
          <span className="text-gray-800 dark:text-[var(--color-text-light)]"> + </span>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            React
          </a>
          <span className="text-gray-800 dark:text-[var(--color-text-light)]"> • </span>
          <a
            href="https://github.com/simxrsxndhu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            View source on GitHub
          </a>
        </div>
        <p className="text-gray-800 dark:text-[var(--color-text-light)] text-center mt-5">
          I hope you have a very nice day ;)
        </p>
      </div>
    </footer>
  )
}
