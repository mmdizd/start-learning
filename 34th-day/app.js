let anchorElement = document.body.children[2].children[0];
anchorElement.href = "https://google.com";

anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("body p a");
anchorElement.href = "https://yahoo.com";

// ADD ELEMENTS
// 1. Create the new element.
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = " This leads to Google";
// 2.Get access to the parent element.
let firstParagraph = document.querySelector("p");
// 3.insert the new element to into the parent element content.
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed.
let firstH1Element = document.querySelector("h1");
// 2. Remove it!
firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);//for old browsers
