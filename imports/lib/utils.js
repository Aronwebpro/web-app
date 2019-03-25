/**
 * Debounce Function
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
const debounce = (func, wait = 10, immediate = true) => {
    let timeout;
    return () => {
        let context = this, args = arguments;
        let later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export {
    debounce,
}