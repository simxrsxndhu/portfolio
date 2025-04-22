import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "About | Simar";
    window.scrollTo(0, 0); // Add this line to scroll to top
  }, []);

  return (
    <div>
      <h1 className="text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)]">
        /about
      </h1>

      <div className="mt-12 space-y-6">
        <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
          I'm a full-stack web developer who enjoys crafting seamless user experiences backed by clean backend logic — whether that's building full-featured apps with the{" "}
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            MERN stack
          </a>{" "}
          ({" "}
          <a
            href="https://www.mongodb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            MongoDB
          </a>
          ,{" "}
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Express
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
          ) or shipping custom storefronts on{" "}
          <a
            href="https://www.shopify.com/partners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Shopify
          </a>{" "}
          using{" "}
          <a
            href="https://shopify.dev/docs/themes/liquid/reference"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Liquid
          </a>{" "}
          and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            JavaScript
          </a>
          .
        </p>

        <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
          Over the past few years, I've worked with startups and clients across the globe
          to bring ideas to life — designing web apps, dashboards, and e-commerce platforms that blend good design with great functionality. From developing reusable{" "}
          <a
            href="https://react.dev/learn/your-first-component"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            React components
          </a>{" "}
          to integrating payment flows with{" "}
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Stripe
          </a>
          , and styling UIs with{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Tailwind CSS
          </a>
          , my focus is always on building scalable and maintainable products.
        </p>

        <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
          While I'm deeply rooted in web development, I've also been expanding into cloud engineering — and I genuinely enjoy combining full-stack builds with modern{" "}
          <a
            href="https://aws.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            AWS
          </a>{" "}
          services. I've deployed static frontends with{" "}
          <a
            href="https://aws.amazon.com/s3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            S3
          </a>{" "}
          +{" "}
          <a
            href="https://aws.amazon.com/cloudfront"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            CloudFront
          </a>
          , built serverless APIs using{" "}
          <a
            href="https://aws.amazon.com/lambda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Lambda
          </a>{" "}
          and{" "}
          <a
            href="https://aws.amazon.com/api-gateway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            API Gateway
          </a>
          , configured secure access via{" "}
          <a
            href="https://aws.amazon.com/iam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            IAM
          </a>
          , and automated deployments using{" "}
          <a
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            GitHub Actions
          </a>
          .
        </p>

        <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
          Lately, I've been working with{" "}
          <a
            href="https://aws.amazon.com/amplify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            AWS Amplify
          </a>{" "}
          for rapid full-stack deployment, including hosting, authentication, and CI/CD pipelines — all in one seamless setup. I'm also exploring{" "}
          <a
            href="https://aws.amazon.com/cloudformation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            CloudFormation
          </a>{" "}
          and{" "}
          <a
            href="https://www.terraform.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            Terraform
          </a>{" "}
          to manage infrastructure more declaratively. I recently completed the{" "}
          <a
            href="https://aws.amazon.com/certification/certified-cloud-practitioner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)]"
          >
            AWS Cloud Practitioner Essentials
          </a>{" "}
          and am constantly experimenting through real-world projects and my own cloud lab.
        </p>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-6">
            👾 Off the Clock...
          </h2>
          <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
            When I'm not coding, you'll probably find me:
          </p>
          <ul className="space-y-4 py-3 text-gray-800 dark:text-[var(--color-text-light)]">
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>Repping{" "}
                <a
                  href="https://www.manutd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)]"
                >
                  Manchester United
                </a>
                , even when it hurts (which is... often) ⚽
              </span>
            </li>
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>Dropping flashes in{" "}
                <a
                  href="https://www.counter-strike.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)]"
                >
                  CSGO
                </a>
                , yelling "rotate!" like it actually helps 🎮
              </span>
            </li>
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>Vibing to a genre-bending <a
                  href="https://open.spotify.com/track/74VR3AkGPhbYXnxcOYa16x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)]"
                >
                  playlist
                </a> 🎧</span>
            </li>
          </ul>
          <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
            I'm also guilty of spending too much time on personal UI tweaks, side projects I over-engineer for no reason. 🫠
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-6">
            🧭 Around this site:
          </h2>
          <ul className="space-y-4 py-3 text-gray-800 dark:text-[var(--color-text-light)]">
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/projects" className="text-[var(--color-primary)]">
                  /projects
                </Link>{" "}
                — full-stack builds, cloud experiments, and fun experiments
              </span>
            </li>
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/resume" className="text-[var(--color-primary)]">
                  /resume
                </Link>{" "}
                — the formal version for recruiters and humans alike
              </span>
            </li>
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/memes" className="text-[var(--color-primary)]">
                  /memes
                </Link>{" "}
                — meme of the day, handpicked for dev sanity (or insanity)
              </span>
            </li>
            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/game" className="text-[var(--color-primary)]">
                  /fun
                </Link>{" "}
                — Tic Tac Toe, hidden routes, and pointless features I love
              </span>
            </li>
            {/* <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/cloud-lab" className="text-[var(--color-primary)]">
                  /cloud-lab
                </Link>{" "}
                — personal AWS playground logs and experiments
              </span>
            </li> */}
            {/* <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/uses" className="text-[var(--color-primary)]">
                  /uses
                </Link>{" "}
                — tools, extensions, and my developer setup
              </span>
            </li> */}

            <li className="flex">
              <span className="pr-2 text-[var(--color-primary)]">➜</span>
              <span>
                <Link to="/credits" className="text-[var(--color-primary)]">
                  /credits
                </Link>{" "}
                — thank-yous to people, tools, and libraries that power this place
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
