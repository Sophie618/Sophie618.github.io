document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-goatcounter-path]').forEach(async (counter) => {
    const output = counter.querySelector('.goatcounter-count');
    try {
      const base = window.goatcounterEndpoint.replace(/\/count\/?$/, '/');
      const response = await fetch(`${base}counter/${encodeURIComponent(counter.dataset.goatcounterPath)}.json`);
      if (!response.ok) throw new Error();
      const data = await response.json();
      output.textContent = Number(data.count || 0).toLocaleString();
    } catch (_) { output.textContent = '—'; }
  });
});
