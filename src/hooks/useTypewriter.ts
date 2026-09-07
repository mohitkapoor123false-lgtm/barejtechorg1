'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800
) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(activeWord.substring(0, currentText.length + 1));
          if (currentText === activeWord) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setCurrentText(activeWord.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}