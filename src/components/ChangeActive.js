export default (e) => {
    let elem = e.target;
    if (elem.classList.contains('active')) return;
    let ul = elem.parentElement.parentElement;
    let index = Array.from(ul.children).indexOf(elem.parentNode);
    let choices = ul.parentElement.nextElementSibling.children[0];

    for (let i = 0; i < choices.children.length; i++) {
        ul.children[i].children[0].classList.remove('active');
        choices.children[i].classList.remove('active');
    }

    let toActiveElem = choices.children[index];

    elem.classList.add('active');
    toActiveElem.classList.add('active');
};
