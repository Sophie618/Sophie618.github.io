document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-goatcounter-path]").forEach(async (counter) => {
    const output = counter.querySelector(".goatcounter-count");
    try {
      const base = window.goatcounterEndpoint.replace(/\/count\/?$/, "/");
      const paths = [counter.dataset.goatcounterPath, ...(counter.dataset.goatcounterLegacyPaths || "").split("|")];
      const uniquePaths = [...new Set(paths.filter(Boolean))];
      const counts = await Promise.all(
        uniquePaths.map(async (path) => {
          const response = await fetch(`${base}counter/${encodeURIComponent(path)}.json`);
          if (!response.ok) throw new Error();
          const data = await response.json();
          return Number(data.count || 0);
        })
      );
      output.textContent = counts.reduce((total, count) => total + count, 0).toLocaleString();
    } catch (_) {
      output.textContent = "—";
    }
  });
});
