import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "Hello hello! | Simar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="text-6xl text-center py-10 mb-10  font-bold text-gray-800 dark:text-[var(--color-text-light)]">
        Hey, I'm Simar! 👋
      </h1>

      <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
        I'm a full-stack developer with 3+ years of experience building modern
        web applications and e-commerce platforms using{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          JavaScript
        </a>
        ,{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nodejs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          Node.js
        </a>
        , and{" "}
        <a
          href="https://www.mongodb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          MongoDB
        </a>
        . I specialize in the{" "}
        <a
          href="https://www.mongodb.com/mern-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          MERN stack
        </a>{" "}
        and love bringing ideas to life through clean code and{" "}
        <a
          href="https://aws.amazon.com/what-is-cloud-computing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          cloud-powered
        </a>{" "}
        architectures.
      </p>

      <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
        I've built everything from custom{" "}
        <a
          href="https://shopify.dev/docs/storefronts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          Shopify
        </a>{" "}
        storefronts to full-fledged cloud-native platforms — deploying with{" "}
        <a
          href="https://aws.amazon.com/lambda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          AWS Lambda
        </a>
        ,{" "}
        <a
          href="https://aws.amazon.com/api-gateway"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          API Gateway
        </a>
        ,{" "}
        <a
          href="https://aws.amazon.com/s3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          S3
        </a>
        , and integrating tools like{" "}
        <a
          href="https://stripe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          Stripe
        </a>{" "}
        and{" "}
        <a
          href="https://firebase.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          Firebase
        </a>
        . Lately, I've been diving deeper into{" "}
        <a
          href="https://aws.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          AWS
        </a>{" "}
        and{" "}
        <a
          href="https://devops.com/what-is-devops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          DevOps
        </a>{" "}
        practices, setting up CI/CD pipelines using{" "}
        <a
          href="https://github.com/features/actions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          GitHub Actions
        </a>{" "}
        and automating deployments like a pro 🚀
      </p>

      <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
        I really enjoy{" "}
        <a
          href="https://opensource.guide"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          open source
        </a>
        , and when I'm not coding, you'll find me nerding out on{" "}
        <a
          href="https://aws.amazon.com/architecture"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          cloud architecture
        </a>
        , optimizing performance, or occasionally sketching up{" "}
        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          UI layouts
        </a>{" "}
        in Figma just for fun. 😄
      </p>

      <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
        This site is my little playground where I tinker with{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          Tailwind CSS
        </a>
        ,{" "}
        <a
          href="https://www.reactbits.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-primary)]"
        >
          React animations
        </a>
        , and over-engineered ideas that probably don't belong in a portfolio.
        Here's a non-exhaustive list of things that a simple-ish website like
        this does not need but I've had genuine fun building anyway:
      </p>

      <ul className="space-y-4 py-3 text-gray-800 dark:text-[var(--color-text-light)]">
        <li className="flex">
          <span className="pr-1 text-[var(--color-primary)]">➜ </span>
          <span>
            <Link to="/memes" className="text-[var(--color-primary)]">
              &nbsp;Meme
            </Link>{" "}
            injection every visit — because code + chaos = joy ( ͡° ͜ʖ ͡°)
          </span>
        </li>

        <li className="flex">
          <span className="pr-2 text-[var(--color-primary)]">➜ </span>
          <span>
            Quick
            <Link to="/game" className="text-[var(--color-primary)]">
              &nbsp;game,
            </Link>{" "}
            quicker ego boost (if you win) 🎮
          </span>
        </li>

        <li className="flex">
          <span className="pr-2 text-[var(--color-primary)]">➜ </span>
          <span>
            Flip the
            <a
              href="https://v3.tailwindcss.com/docs/dark-mode"
              target="_blank"
              className="text-[var(--color-primary)]"
            >
              &nbsp;switch,
            </a>{" "}
            feel the vibe — even your UI deserves options 🌓
          </span>
        </li>

        {/* <li className="flex items-center gap-2">
          <span className="text-[var(--color-primary)]">➜</span> 
          <span><span className="text-[var(--color-primary)]">Interactive</span> elements and demos</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[var(--color-primary)]">➜</span> 
          <span>Fun side <span className="text-[var(--color-primary)]">projects</span> and experiments</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[var(--color-primary)]">➜</span> 
          <span>A <span className="text-[var(--color-primary)]">technical blog</span> (coming soon! <span>⌐■_■</span>)</span>
        </li> */}
      </ul>
    </>
  );
}
