import React, { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Simar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-6xl text-left font-mono font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-2">
        Simarpreet Sandhu
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
        <a href="mailto:sssandhu0172@gmail.com" className="hover:text-[var(--color-primary)]">
          sssandhu0172@gmail.com
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/simarpreet-sandhu" className="hover:text-[var(--color-primary)]">
          LinkedIn
        </a>
        <span>|</span>
        <a href="https://github.com/simxrsxndhu" className="hover:text-[var(--color-primary)]">
          GitHub
        </a>
      </div>

      <div className="grid grid-cols-[2fr,1fr] gap-16">
        <div className="space-y-12">
          {/* EXPERIENCE */}
          <section>
            <h2 className="text-xl font-mono text-[var(--color-primary)] mb-6">EXPERIENCE</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <span className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Freelance Web Developer</span>
                    <span className="text-gray-600 dark:text-gray-400"> — Self-employed, Canada</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">JAN 2024 - PRESENT</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Designed and deployed custom Shopify storefronts tailored to business needs and brand identity</li>
                  <li>Built and launched full-stack applications using React, Node.js, Express, and MongoDB</li>
                  <li>Integrated third-party APIs including Stripe for payments and Firebase for authentication</li>
                  <li>Automated deployments using GitHub Actions and version-controlled projects through Git</li>
                  <li>Implemented SEO best practices and optimized site performance across projects</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <span className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Web Developer</span>
                    <span className="text-gray-600 dark:text-gray-400"> — Techtic Solutions Inc., India</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">MAR 2023 - JUL 2023</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Enhanced existing Shopify themes and built reusable React components</li>
                  <li>Integrated real-time analytics for product performance tracking</li>
                  <li>Collaborated with cross-functional teams to roll out updates in weekly Agile sprints</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <span className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Shopify Developer</span>
                    <span className="text-gray-600 dark:text-gray-400"> — Base2Brand Infotech Pvt. Ltd., Mohali</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">SEP 2021 - MAR 2023</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Built and maintained Shopify storefronts with custom themes using Liquid, JavaScript, and APIs</li>
                  <li>Ensured responsive design across devices and optimized page load speed</li>
                  <li>Provided post-launch support and implemented feature enhancements based on user feedback</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <span className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Frontend Developer</span>
                    <span className="text-gray-600 dark:text-gray-400"> — Web Liquids, Chandigarh</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">NOV 2020 - APR 2021</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Developed responsive web interfaces using HTML, CSS, and JavaScript</li>
                  <li>Participated in design reviews and implemented UI/UX enhancements to increase engagement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ACHIEVEMENTS */}
          <section>
            <h2 className="text-xl font-mono text-[var(--color-primary)] mb-6">ACHIEVEMENTS</h2>
            <div className="space-y-6">
              <div>
                <div className="font-mono text-gray-800 dark:text-[var(--color-text-light)] mb-3">Shopify Websites</div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li><a href="https://wearedip.co.uk/pages/bundle" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">We Are Dip</a> - Custom Shopify storefront</li>
                  <li><a href="https://www.drinkbev.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">Drink Bev</a> - E-commerce platform</li>
                  <li><a href="https://dogishuman.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">Dog is Human</a> - Pet products store</li>
                  <li><a href="https://www.shaztoys.com.au" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">Shaz Toys</a> - Toy store platform</li>
                </ul>
              </div>

              <div>
                <div className="font-mono text-gray-800 dark:text-[var(--color-text-light)] mb-3">Notes App with AWS Amplify & React</div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Developed a full-stack serverless web application using React.js, AWS Amplify, and GraphQL</li>
                  <li>Integrated AppSync for real-time data handling and DynamoDB as a NoSQL database</li>
                  <li>Implemented user authentication, CRUD operations, and responsive UI</li>
                  <li>Enhanced skills in cloud-native development, API integration, and frontend-backend interaction using modern AWS tools</li>
                </ul>
              </div>

              <div>
                <div className="font-mono text-gray-800 dark:text-[var(--color-text-light)] mb-3">Exotic Cars Rental</div>
                <ul className="list-disc pl-5 text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
                  <li>Built a full-stack car rental platform using React, Node.js, Express, and MongoDB</li>
                  <li>Implemented user authentication, dynamic listings, and real-time booking logic</li>
                  <li>Deployed frontend via AWS S3 + CloudFront and backend APIs using AWS Lambda + API Gateway</li>
                  <li>Managed CI/CD pipeline using GitHub Actions and hosted data with MongoDB Atlas</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-12">
          {/* SKILLS */}
          <section>
            <h2 className="text-xl font-mono text-[var(--color-primary)] mb-6">SKILLS</h2>
            <p className="text-sm text-gray-800 dark:text-[var(--color-text-light)]">
              JavaScript (ES6+), TypeScript, HTML5, CSS3, React.js, Next.js, Node.js, Express.js, MongoDB, Mongoose, Liquid, AWS (S3, Lambda, API Gateway, IAM, CloudFront), GitHub Actions, CI/CD, Shopify, Stripe API, Figma, Postman, Redux, TailwindCSS, REST APIs, GraphQL, Docker, Git
            </p>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-xl font-mono text-[var(--color-primary)] mb-6">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="text-sm">
                  <div className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Lambton College, Canada</div>
                  <div className="text-gray-600 dark:text-gray-400">Diploma in Full Stack Web Development</div>
                  <div className="text-gray-600 dark:text-gray-400">AUG 2023 - APR 2025</div>
                </div>
              </div>
              
              <div>
                <div className="text-sm">
                  <div className="font-mono text-gray-800 dark:text-[var(--color-text-light)]">Panjab University, India</div>
                  <div className="text-gray-600 dark:text-gray-400">Bachelor of Computer Applications (BCA)</div>
                  <div className="text-gray-600 dark:text-gray-400">MAY 2017 - SEP 2020</div>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section>
            <h2 className="text-xl font-mono text-[var(--color-primary)] mb-6">CERTIFICATIONS</h2>
            <ul className="list-none text-sm space-y-3 text-gray-800 dark:text-[var(--color-text-light)]">
              <li>AWS Cloud Essentials</li>
              <li>React.js – Advanced Frontend Development</li>
              <li>Express Essentials: Build Powerful Web Apps with Node.js</li>
              <li>Responsive Web Design – freeCodeCamp</li>
              <li>Introduction to Shopify Theme Development</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}