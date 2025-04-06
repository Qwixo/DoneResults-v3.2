import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <img
          src="https://i.imgur.com/kpHtGKX.png"
          alt="DoneResults Logo"
          className="h-12 md:h-16"
        />
        <p className="text-sm md:text-base text-center">
          <a
            href="mailto:jan.lisy123@gmail.com"
            className="hover:underline text-white"
          >
            jan.lisy123@gmail.com
          </a>{" "}
          | DoneResults © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
