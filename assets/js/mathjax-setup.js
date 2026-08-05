window.MathJax = {
  loader: { load: ["[tex]/boldsymbol"] },
  startup: {
    typeset: false,
    ready() {
      MathJax.startup.defaultReady();
      const roots = Array.from(document.querySelectorAll(".post, #toc-sidebar"));
      const targets = roots.length > 0 ? roots : [document.body];

      MathJax.startup.promise = MathJax.startup.promise
        .then(() => MathJax.typesetPromise(targets))
        .then(() => {
          const mathDocument = MathJax.startup.document;
          if (!mathDocument || !mathDocument.math) return;

          for (const item of mathDocument.math) {
            const node = item.typesetRoot;
            if (!node || !node.setAttribute) continue;
            node.setAttribute("data-tex", item.math);
            if (item.display) node.setAttribute("data-tex-display", "true");
            node.setAttribute("title", "点击复制 LaTeX");
          }
        });
    },
  },
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    packages: { "[+]": ["boldsymbol"] },
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
          mjx-container[display="true"] {
            display: block;
            overflow-x: auto;
            overflow-y: hidden;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};

(function enableMathCopy() {
  let toast = null;
  let toastTimer = null;

  function copyFallback(value) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      return copied;
    } catch (_) {
      return false;
    }
  }

  function showToast(node) {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "math-copy-toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }

    toast.textContent = "已复制 LaTeX";
    const rect = node.getBoundingClientRect();
    toast.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
    toast.style.top = `${window.scrollY + rect.top - 8}px`;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 1200);
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest) return;
    const math = event.target.closest("mjx-container[data-tex]");
    if (!math) return;

    const selection = window.getSelection();
    if (selection && !selection.isCollapsed && selection.toString().trim()) return;

    const tex = math.getAttribute("data-tex");
    if (!tex) return;

    const onCopied = () => showToast(math);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tex).then(onCopied).catch(() => {
        if (copyFallback(tex)) onCopied();
      });
    } else if (copyFallback(tex)) {
      onCopied();
    }
  });
})();
