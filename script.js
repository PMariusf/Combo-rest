document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.menu-toggle')) {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');

    for (let i = 0; i < 3; i++) {
      const bar = document.createElement('div');
      menuToggle.appendChild(bar);
    }

    const navbar = document.querySelector('.navbar');
    const navList = navbar.querySelector('ul');

    navbar.insertBefore(menuToggle, navList);

    menuToggle.addEventListener('click', function () {
      navList.classList.toggle('active');
      if (navList.classList.contains('active')) {
        navList.style.position = 'absolute';
        navList.style.right = '0';
        navList.style.top = '100%';
        navList.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        navList.style.width = '200px';
      } else {
        navList.removeAttribute('style');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 568) {
        navList.classList.remove('active');
        navList.removeAttribute('style');
      }
    });
  }
});