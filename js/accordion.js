const headers = document.querySelectorAll('.accordion__header');
const item = document.querySelectorAll('.accordion__item');

  headers.forEach(function(header) {
    header.addEventListener('click', function () {
      let content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  item.forEach(function (elem) {
    elem.addEventListener('click', function () {
        elem.classList.toggle('active')
      })
  })