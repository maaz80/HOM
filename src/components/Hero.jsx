import { useEffect, useState } from 'react';

const typingText = [
  'Welcome to House Of Marktech',
  'Innovative solutions for digital success',
  'Your growth starts here'
];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

//   Typing animation 
  useEffect(() => {
    const currentText = typingText[index % typingText.length];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingText.length);
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentText.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden" id="hero">
      <video
        className="absolute w-full h-full object-cover z-0"
        src="/src/video/LandingPage.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 text-center px-4 max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg transition-all duration-300">
          <span className="border-r-2 border-white pr-2 ">{displayedText}</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white max-w-2xl mx-auto">
          Innovative services tailored for your business success.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-2xl shadow-xl hover:bg-blue-100 transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-700 rounded-2xl transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
