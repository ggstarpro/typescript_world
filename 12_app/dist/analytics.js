"use strict";
const button = document.getElementById('button');
function clickHandler(message) {
    console.log('clicked' + message);
}
button.addEventListener('click', clickHandler.bind(null, '天寸都'));
//# sourceMappingURL=analytics.js.map