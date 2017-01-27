(function(document) {
  'use strict';

  console.info("Enabling Cheetovision");

  
  const drumfMatcher = /(^| )(Donald )?((J\.|John) )?Trump/g;
  const ALT_NAMES = [
    "Cheeto Mussolini",
    "Pumpkin Pinochet",
    "Pol Apricot",
    "Orange Julius",
    "Mao ZeTang",
    "The Yamchurian Candidate"
  ];

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => { 
      if (mutation.type === 'characterData') {
        const cheetoed = cheetofy(mutation.target.textContent);
        if (cheetoed !== mutation.target.textContent) {
          mutation.target.textContent = cheetoed;
        }
      } else if (mutation.type === 'childList') {
        cheetofyDom(mutation.target);
      }
    });
  });

  function cheetofy(text) {
    return text.replace(drumfMatcher, (match) => (match[0] === ' ' ? ' ' : '') + ALT_NAMES[Math.floor(Math.random() * ALT_NAMES.length)]);
  }

  function cheetofyDom(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      while (walker.nextNode()) {
      walker.currentNode.nodeValue = cheetofy(walker.currentNode.nodeValue); 
    }
  }

  document.title = cheetofy(document.title);
  cheetofyDom(document.body);
  observer.observe(document.body, { characterData: true, childList: true, subtree: true });
  observer.observe(document.querySelector('title'), { childList: true, subtree: true });

  
})(document);
