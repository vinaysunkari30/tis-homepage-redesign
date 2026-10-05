import { useEffect } from "react";

export function useSectionUrl() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.history.replaceState(
              null,
              "",
              `#${entry.target.id}`
            );
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-30% 0px -60% 0px",
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}