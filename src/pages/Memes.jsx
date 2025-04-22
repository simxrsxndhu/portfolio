import React, { useEffect, useState, useRef } from "react";

export default function Memes() {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    document.title = "Memes | Simar";
    window.scrollTo(0, 0);
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      fetchMeme();
    }
  }, []);

  const isImage = (url) => {
    return url?.match(/\.(jpg|jpeg|png|gif)$/i) != null;
  };

  const fetchMeme = async () => {
    try {
      const response = await fetch(
        "https://www.reddit.com/r/memes.json?limit=100"
      );
      const data = await response.json();
      const posts = data.data.children;

      const qualityPosts = posts.filter((post) => {
        const { data } = post;
        return isImage(data.url) && !data.over_18;
      });

      if (qualityPosts.length === 0) {
        throw new Error("No suitable memes found. Try refreshing.");
      }

      // Get a random post from quality posts
      const selectedPost =
        qualityPosts[Math.floor(Math.random() * qualityPosts.length)];

      if (!selectedPost) {
        throw new Error("Failed to select a meme. Try refreshing.");
      }

      setMeme(selectedPost.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching meme:", err);
      setError(err.message || "Failed to fetch meme. Try refreshing.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl">🫨</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-0 py-8">
      <h1 className="text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-20">
        /memes
      </h1>
      {meme && (
        <div className="max-w-4xl mx-auto space-y-6">
          <a
            href={`https://reddit.com${meme.permalink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform hover:scale-[1.01] focus:scale-[1.01]"
          >
            <img
              src={meme.url}
              alt={meme.title}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </a>

          <p className="py-3 text-gray-800 dark:text-[var(--color-text-light)]">
            This is my little meme 🤡 machine powered by{" "}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)]"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)]"
            >
              Fetch API
            </a>
            . It pulls random memes from{" "}
            <a
              href="https://reddit.com/r/memes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)]"
            >
              r/memes
            </a>{" "}
            using the{" "}
            <a
              href="https://www.reddit.com/dev/api/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)]"
            >
              Reddit API
            </a>
            . Hit refresh for a new dose of memes! 🎯
          </p>
        </div>
      )}
    </div>
  );
}
