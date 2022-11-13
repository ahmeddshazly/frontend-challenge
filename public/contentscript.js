let element = document.createElement('div');

//Budget value

const btb = document.querySelector("[class*='btb']");
const btbvalue = btb.innerHTML.trim();
const injectedText = document.createTextNode('Budget-to-Beat: ' + btbvalue);
element.appendChild(injectedText);

//logo
let logoelement = document.createElement('img');
logoelement.src = 'images/favicon-32x32.png';
logoelement.style.float = 'left';
logoelement.style.marginRight = '10px';
logoelement.style.width = '20px';
logoelement.style.padding = '2px 0 ';
element.appendChild(logoelement);

//injected element styling
element.style.backgroundColor = '#00008B';
element.style.color = 'white';
element.style.padding = '20px ';
element.style.borderRadius = '8px';
element.style.margin = '-50px 20px 30px';
element.style.float = 'right';
element.style.fontSize = 'medium';
element.style.display = 'block';

//dummy climate data
const climateText = document.createTextNode(
  'Rose interviewed John Bates, a retired NOAA scientist, who has a very specific criticism about the methodology used by fellow NOAA researcher Thomas Karl in a 2015 paper. That paper looked into a specific question in climate science: Why, according to some analyses, did the global rise in temperatures seem to pause or slow down during the first decade of the 21st Century?',
);
let hoverelement = document.createElement('div');
hoverelement.appendChild(climateText);
hoverelement.style.backgroundColor = 'white';
hoverelement.style.color = '#00008B';
hoverelement.style.padding = '20px ';
hoverelement.style.borderRadius = '8px';
hoverelement.style.margin = '-50px 20px 30px 700px';
hoverelement.style.float = 'right';
hoverelement.style.fontSize = 'medium';
hoverelement.style.display = 'None';
element.onmouseenter = () => {
  hoverelement.style.display = 'block';
  element.style.display = 'None';
};
element.onmouseleave = () => {
  hoverelement.style.display = 'None';
  element.style.display = 'block';
};

//changed the parent element to adjust with the theme changing classnames

// const parentElement = document.querySelector(
//   '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
// );
const parentElement = document.querySelector("[class*='header2']");
parentElement.appendChild(element);
parentElement.appendChild(hoverelement);
