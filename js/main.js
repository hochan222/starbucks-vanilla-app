const searchEl = document.querySelector('.search');
const seearchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    seearchInputEl.focus();
})

seearchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    seearchInputEl.setAttribute('placeholer', '통합검색');
})

seearchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    seearchInputEl.setAttribute('placeholer', '');
})