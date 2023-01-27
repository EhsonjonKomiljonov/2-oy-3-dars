var elBody = document.querySelector('body');

let localTheme = false;

const theme = function () {
  localTheme = !localTheme;

  const newBg = localTheme ? 'dark' : 'light';
  localStorage.setItem('theme', newBg);
  elBody.classList.toggle('dark');
  newTheme();
};

let newTheme = () => {
  if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

newTheme();

let openMenu = () => {
  document.body.classList.add('menu');
  document.body.classList.add('bg-menu');
  document.body.style.overflow = 'hidden';
};

let closeMenu = () => {
  document.body.classList.remove('menu');
  document.body.classList.remove('bg-menu');
  document.body.style.overflow = 'auto';
};
