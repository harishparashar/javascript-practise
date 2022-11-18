// Dom / Bom difference
// Dom - The Dom is Document Object Modal ,which deals with the document,the html elments themselves.
// Bom - The Bom is Browser object modal, which deals with browser componenets aside from the document,
// like history,location,screen ,navgational,
// iin simple meaning all the window operation which comes under bom are performed using bom.
// function alert/confirm/prompt are also a part of bom

//  window properties = innerHight,innerWidth
// window method = setATimeOut SetIntervel

// * Navigate Through the dom
// 1- document.documentElement (returns the element that is the root element of the document)
// 2- document.head
// 3- document.body
// 4- document.body.childNodes (include tab,enter,whitespace)
// 5- document.children (without text node , only regular elements)
// 6- document.childNodes.length

// Q. how to check weather an element has childnode or not?
// A. we will use hasChildNodes() . ex document.body.hasChildNodes()

//  <p></p> = this is called tag
//  <p>some text </p> = this is called element

//   querySelector return the first matching values whearas
//  querySelectorAll will return all elements

{/* <p class="para">hyyyyy</p>, */}
    <p class="para">hyyyyy</p>
console.log(document.querySelectorAll('.para').innerHtml = 'byyyyyyy')

