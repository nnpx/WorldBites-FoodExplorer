//didn't use

import { useEffect } from "react";

const StickyHeader = () => {
  useEffect(() => {
    const waitForHeroSection = () => {
      const sectionHeroEl = document.querySelector(".section-hero");

      if (!sectionHeroEl) {
        console.warn(".section-hero not found. Retrying...");
        // Retry after a short delay
        setTimeout(waitForHeroSection, 100);
        return;
      }

      console.log(".section-hero found. Initializing IntersectionObserver...");
      const obs = new IntersectionObserver(
        (entries) => {
          const ent = entries[0];
          if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
          } else {
            document.body.classList.remove("sticky");
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-80px",
        }
      );

      obs.observe(sectionHeroEl);

      // Cleanup observer on unmount
      return () => obs.disconnect();
    };

    waitForHeroSection();
  }, []);

  return null; // Utility component doesn't render anything
};

export default StickyHeader;
