function smoothScroll(target) {
    const element = document.querySelector(target);
    const position = element.offsetTop;
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  }
  
  const links = document.querySelectorAll('a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  }