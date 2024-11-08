function loadIframe(element) {
    const iframeSrc = element.getAttribute("data-iframe-src");
    const iframe = document.createElement("iframe");
    iframe.src = iframeSrc;
    iframe.width = "100%";
    iframe.height = "200";
    iframe.setAttribute("title", element.alt);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    element.parentNode.replaceChild(iframe, element);
}

function loadIframecontainer(element) {
    const iframeSrc = element.getAttribute("data-iframe-src");
    const iframe = document.createElement("iframe");
    iframe.src = iframeSrc;
    iframe.width = "100%";
    iframe.height = "400";
    iframe.setAttribute("title", element.alt);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    element.parentNode.replaceChild(iframe, element);
}