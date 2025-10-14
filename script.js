//скрипт для скачивания
document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'downloadFiles/Junior_UiUxDesigner_Bewerbung_Sharyi_Vladjislav.pdf.pdf'; // путь к файлу
    link.download = 'Резюме';   // имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function copyText(el) {
  navigator.clipboard.writeText(el.innerText)
    .then(() => {
      showPopup(); // показываем уведомление
    })
    .catch(err => console.error("Ошибка копирования:", err));
}

function showPopup() {
  const popup = document.getElementById("copy-popup");
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 1500);
}

const burger = document.createElement('div');
burger.classList.add('burger');
burger.innerHTML = '<div></div><div></div><div></div>';
document.querySelector('.navBar').appendChild(burger);

const nav = document.querySelector('.navigation');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Клонируем ссылки меню для мобильной версии
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.innerHTML = nav.innerHTML;
document.body.appendChild(mobileMenu);

burger.addEventListener('click', () => {
  const isActive = burger.classList.toggle('active');
  document.body.classList.toggle('menu-open', isActive);
  mobileMenu.style.display = isActive ? 'flex' : 'none';
  overlay.classList.toggle('show', isActive);
});

// При клике на overlay или пункт — закрываем меню
overlay.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  burger.classList.remove('active');
  document.body.classList.remove('menu-open');
  mobileMenu.style.display = 'none';
  overlay.classList.remove('show');
}
    // const toggleBtn = document.getElementById('theme-toggle');
    // const body = document.body;

    // // Проверяем сохранённую тему
    // if (localStorage.getItem('theme') === 'dark') {
    //     body.classList.add('dark');
    //     toggleBtn.textContent = './ico/iconamoon_mode-dark-light.png';
    // }

    // // Переключаем тему
    // toggleBtn.addEventListener('click', () => {
    // body.classList.toggle('dark');

    // if (body.classList.contains('dark')) {
    //     toggleBtn.textContent = '☀️ Светлая тема';
    //     localStorage.setItem('theme', 'dark');
    // } else {
    //     toggleBtn.textContent = '🌙 Тёмная тема';
    //     localStorage.setItem('theme', 'light');
    // }
    // });
