'use strict';

export default function(func, timeout) {
    let savedContext, savedArgs;

    let isThrottled = false;

    return function (...args) {
        if (isThrottled) {
            savedContext = this;
            savedArgs = args;

            return;
        }

        isThrottled = true;

        func.apply(this, args);

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                func.apply(savedContext, savedArgs);

                savedContext = savedArgs = null;
            }
        }, timeout);
    }
}