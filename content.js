var elementsInsideBody = [...document.body.getElementsByTagName('yt-formatted-string')];
var anchorsInsideBody = [...document.body.getElementsByTagName('a')];

var 

function findAndHideScore() {
    
    elementsInsideBody.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3) {
                replaceScore(child);
            }
        });
    });

    anchorsInsideBody.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3) {
                replaceScore(child);
            }
        });
    });
}

function replaceScore(node) {
    var pattern = /\d*-\d*/g; //replace with /\d+-\d+/ keep as is for ease of testing
    let value = node.nodeValue;
    value = value.replace(pattern, "\u25AE - \u25AE");
    node.nodeValue = value;
}

window.onload = findAndHideScore();