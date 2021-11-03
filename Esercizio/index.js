const q = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = q("#boxForm");
    render(form, quote);
});

const render = (container, items) => {
    const elements = items.map(
        (element) => {
            if (element.completed === true) {
                return `<li>
                <label for="search">  ${element.title} <input type="checkbox" checked /></label>
                </li>`
            } else {
                return `<li>
                <label for="search">  ${element.title} <input type="checkbox"/></label>
                </li>`
            }
        }
    );
    const output = elements.join(" ");
    container.innerHTML = output;
};