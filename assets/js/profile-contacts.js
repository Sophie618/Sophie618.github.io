const initializeProfileContacts = () => {
  const button = document.getElementById("profile-email-button");
  const popover = document.getElementById("profile-email-popover");

  if (!button || !popover) return;

  const closePopover = () => {
    popover.hidden = true;
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", () => {
    const willOpen = popover.hidden;
    popover.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
  });

  document.addEventListener(
    "pointerdown",
    (event) => {
      if (!button.parentElement.contains(event.target)) closePopover();
    },
    true
  );

  document.addEventListener("focusin", (event) => {
    if (!button.parentElement.contains(event.target)) closePopover();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopover();
      button.focus();
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeProfileContacts, { once: true });
} else {
  initializeProfileContacts();
}
