(function(document) {
  'use strict';

  console.info("Enabling Cheetovision");

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const drumfMatcher = /(Donald )?((J\.|John) )?Trump/g;
  const ALT_NAMES = [
    "Cheeto Mussolini",
    "Pumpkin Pinochet",
    "Apricot Pol Pot",
    "Orange Julius",
    "Mao ZeTang",
    "The Yamchurian Candidate"
  ];

  while (walker.nextNode()) {
    walker.currentNode.nodeValue = walker.currentNode.nodeValue
        .replace(drumfMatcher, ()=> ALT_NAMES[Math.floor(Math.random() * ALT_NAMES.length)]);
  }
})(document);