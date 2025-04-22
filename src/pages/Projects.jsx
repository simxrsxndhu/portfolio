import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import exoticcarsrental from "../assets/exoticcarsrental.jpeg";
import notes from "../assets/notes.png";
import dip from "../assets/dip.png";
import dogishuman from "../assets/dogishuman.png";
import drinkbev from "../assets/drinkbev.png";
import game from "../assets/game.png";
import meme from "../assets/meme.png";
import shaztoys from "../assets/shaztoys.png";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Simar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="text-6xl md:text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-16">
        /projects
      </h1>
      
      {/* E-commerce Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8 flex items-center gap-2">
          <FaArrowRight className="text-xl" /> E-commerce
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="https://wearedip.co.uk/pages/bundle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={dip} 
              alt="We Are Dip" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                We Are Dip
              </h3>
            </div>
          </a>

          <a href="https://www.drinkbev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={drinkbev} 
              alt="Drink Bev" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Drink Bev
              </h3>
            </div>
          </a>

          <a href="https://dogishuman.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={dogishuman} 
              alt="Dog is Human" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Dog is Human
              </h3>
            </div>
          </a>

          <a href="https://www.shaztoys.com.au" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={shaztoys} 
              alt="Shaz Toys" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Shaz Toys
              </h3>
            </div>
          </a>
        </div>
      </div>

      {/* Full Stack & Cloud Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8 flex items-center gap-2">
          <FaArrowRight className="text-xl" /> Full Stack & Cloud
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="https://github.com/simxrsxndhu/exotic-cars-rental" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={exoticcarsrental} 
              alt="Exotic Cars Rental" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Exotic Cars Rental
              </h3>
            </div>
          </a>

          <a href="https://github.com/simxrsxndhu/notesapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={notes} 
              alt="Notes App" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Notes App
              </h3>
            </div>
          </a>
        </div>
      </div>

      {/* Fun Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8 flex items-center gap-2">
          <FaArrowRight className="text-xl" /> Fun Stuff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="/memes" 
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={meme} 
              alt="Meme Generator" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Meme Generator
              </h3>
            </div>
          </a>

          <a href="/game" 
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img 
              src={game} 
              alt="Tic Tac Toe" 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Tic Tac Toe
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}