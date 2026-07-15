(() => {
  const progress = document.getElementById("scroll-progress");
  const progressBar = progress?.querySelector(".scroll-progress-bar");
  const navbar = document.getElementById("navbar");

  if (!progress || !progressBar) return;

  let frameRequested = false;

  const updateProgress = () => {
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 56;
    const scrollDistance = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollDistance > 0 ? (window.scrollY / scrollDistance) * 100 : 0;

    document.body.style.paddingTop = `${navbarHeight}px`;
    progress.style.top = `${navbarHeight}px`;
    progressBar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    frameRequested = false;
  };

  const scheduleUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateProgress);
  };

  document.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", updateProgress);
  updateProgress();
})();
