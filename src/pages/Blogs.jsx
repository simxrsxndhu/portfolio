import React, { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
    document.title = "Blogs | Simar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)]">
        /blogs
      </h1>
      <div className="mt-12 space-y-16">
        <article className="group">
          <a href="https://www.youtube.com/watch?v=dutyOc_cAEU" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              VS Code Agent Mode: The Future of AI-Assisted Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Exploring how VS Code's new Agent Mode is revolutionizing the way developers interact with AI assistants
            </p>
            <time className="text-gray-500 text-sm">April 22, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://app.daily.dev/" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              Why Daily.dev is My Go-to Developer News Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              A deep dive into how Daily.dev helps developers stay updated with personalized tech news and community insights
            </p>
            <time className="text-gray-500 text-sm">April 22, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://react.dev/learn/sharing-state-between-components" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              Building a Sticky Notes App with React & Tailwind
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Create a minimal yet interactive sticky notes app UI inspired by real-world note-taking
            </p>
            <time className="text-gray-500 text-sm">April 22, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://docs.amplify.aws/react/start/getting-started/installation/" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              From Zero to Deployed: Hosting React Apps with AWS Amplify
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              A simple guide to deploying full-stack apps using AWS Amplify, from setup to live in minutes
            </p>
            <time className="text-gray-500 text-sm">April 20, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://www.mongodb.com/languages/mern-stack-tutorial" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              How I Built a Full-Stack Car Rental Platform (and What I Learned)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Lessons from building "Exotic Cars Rental" using the MERN stack with cloud deployment
            </p>
            <time className="text-gray-500 text-sm">April 18, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://docs.github.com/en/actions/quickstart" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              CI/CD with GitHub Actions: Automate Your Deployments
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Break down the magic of continuous integration and deployment using GitHub Actions
            </p>
            <time className="text-gray-500 text-sm">April 16, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://tailwindcss.com/blog/automatic-class-sorting-with-prettier" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              Tailwind Tips You'll Wish You Knew Sooner
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Quick wins and productivity boosters using Tailwind CSS in real projects
            </p>
            <time className="text-gray-500 text-sm">April 15, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://dev.to/kevinkaarl/lessons-learned-from-developer-burnout-1e5h" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              Memes, Dev Burnout & Finding Joy in Side Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              How fun distractions like meme generators and Tic Tac Toe can actually improve your dev life
            </p>
            <time className="text-gray-500 text-sm">April 13, 2025</time>
          </a>
        </article>

        <article className="group">
          <a href="https://www.patterns.dev/react" target="_blank" rel="noopener noreferrer" className="block">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors mb-2">
              React Component Patterns I Use Almost Every Day
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Smart patterns for reusable, readable, and scalable components in React
            </p>
            <time className="text-gray-500 text-sm">April 11, 2025</time>
          </a>
        </article>
      </div>
    </div>
  );
}
