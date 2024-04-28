
function toggleMenu() {
  var menu = document.getElementById("sub-menu-wrap");
  menu.classList.toggle("open-menu");
}

function toggleSearch() {
  var search = document.getElementById("search-box");
  search.classList.toggle("open-search");
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-panes");

const tabActive = $(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-panes.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

 // Lấy tham chiếu đến các phần tử HTML
    var triggerDiv = document.getElementById('triggerDiv');
    var hiddenDiv = document.getElementById('hiddenDiv');

     // Thêm sự kiện vào triggerDiv
    triggerDiv.addEventListener('mouseover', function() {
        // Hiển thị hiddenDiv khi con chuột vào triggerDiv
        hiddenDiv.style.display = 'block';
    });

    // Thêm sự kiện vào hiddenDiv
    hiddenDiv.addEventListener('mouseover', function() {
        // Giữ hiddenDiv hiển thị khi con chuột đi vào hiddenDiv
        hiddenDiv.style.display = 'block';
    });

    // Thêm sự kiện vào hiddenDiv
    hiddenDiv.addEventListener('mouseout', function() {
        // Ẩn hiddenDiv khi con chuột rời khỏi hiddenDiv
        hiddenDiv.style.display = 'none';
    });


const wrapper = document.querySelector('.login-wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const home = document.querySelector('.login-wrapper-container');


registerLink.addEventListener('click', ()=>{
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
  wrapper.classList.remove('active-popup');
});


btnPopup.addEventListener('click', ()=>{
  home.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
  home.classList.remove('active-popup');
});
