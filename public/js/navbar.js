const showMobileNav = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID), // store nav-toggle element
      nav = document.getElementById(navID); // store nav-menu element
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show"); // show collapsible navbar on mobile
      });
    }
  };
  showMobileNav("nav-toggle", "nav-menu");