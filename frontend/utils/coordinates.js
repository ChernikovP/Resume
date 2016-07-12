'use strict';

export default function(elem) {
    const box = elem.getBoundingClientRect();

    return {
        top: window.pageYOffset + box.top,
        left: window.pageXOffset + box.left
    };
}