document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({
    startOnLoad: false,
    theme: "default"
  });
  
  // Find all mermaid code blocks and render them
  document.querySelectorAll("pre > code.language-mermaid").forEach(function(el) {
    const pre = el.parentElement;
    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = el.textContent;
    pre.parentElement.replaceChild(container, pre);
  });
  
  mermaid.init(undefined, ".mermaid");
});
