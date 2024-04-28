
	let slideImages = document.querySelectorAll('.slides img')
	let next = document.querySelector('.next');
	let prev = document.querySelector('.prev');
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	next.addEventListener('click', slideNext);
	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	indicators();
	}

//Nut truoc
	prev.addEventListener('click', slidePrev);
	function slidePrev(){
	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
	if(counter == 0){
		counter = slideImages.length-1;
	}
	else{
		counter--;
	}
	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
	indicators();
	}

//auto
	function autoSliding(){
		deletInterval = setInterval(timer, 5000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});


	container.addEventListener('mouseout', autoSliding);

	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	function switchImage(currentImage){
		currentImage.classList.add('active');
		var imageId = currentImage.getAttribute('attr');
		if(imageId > counter){
		slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(imageId == counter){
			return;
		}
		else{
		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
		counter = imageId;
		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
		}
		indicators();
	}

function toggleMenu() {
  var menu = document.getElementById("sub-menu-wrap");
  menu.classList.toggle("open-menu");
}


const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);

const tabs = aa(".tab-item");
const panes = aa(".tab-panes");

const tabActive = a(".tab-item.active");

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    a(".tab-item.active").classList.remove("active");
    a(".tab-panes.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
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

document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.login-wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const home = document.querySelector('.login-wrapper-container');
    const loginForm = document.querySelector('.login form');
    const registerForm = document.querySelector('.register form');
    const rememberCheckbox = document.querySelector('.login input[type="checkbox"]');
    const loggedIn = localStorage.getItem('loggedIn');
    const storedUsername = localStorage.getItem('username');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
});


function signup(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userLogin = JSON.parse(localStorage.getItem('users')) || {};

  if (userLogin.hasOwnProperty(username)) {
    alert("Tên người dùng đã tồn tại.");
    return;
  }

  for (var key in userLogin) {
    if (userLogin.hasOwnProperty(key)) {
      if (userLogin[key].email === email) {
        alert("Email đã tồn tại.");
        return;
      }
    }
  }
  
  var user = {
    username: username,
    email: email,
    password: password,
  };
  
  userLogin[username] = user;
  localStorage.setItem('users', JSON.stringify(userLogin));
  
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công.");
  
}


function login(e) {
  event.preventDefault();
  var alertError = document.getElementById("alertError");
  var closeBtn = document.querySelector(".close-btn");
  var username = document.getElementById("username1").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password1").value;
  var userLogin = JSON.parse(localStorage.getItem('users')) || {};
  var user = userLogin[username];
     
  if (!user) {
    setTimeout(showAlert, 200);
  } else if (user.username === username && user.password === password) {
    alert("Đăng nhập thành công.");
    window.location.href = "https://cyan-florentine-ginger.glitch.me";
  } else {
    setTimeout(showAlert, 200);
  }
 
  function showAlert() {
    alertError.style.top = "50px";
    setTimeout(function () {
      alertError.style.display = "block";
    }, 500);
  }

  function hideAlert() {
    alertError.style.top = "-100px";
    setTimeout(function () {
      alertError.style.display = "none";
    }, 500);
  }
  
  closeBtn.addEventListener("click", hideAlert);
}

const userLogin = JSON.parse(localStorage.getItem("userLogin"));


const userLoginElement = document.getElementById("userLogin");
if (userLogin){
  userLoginElement.innerHTML = userLogin.username;}
  else{
  userLoginElement.innerHTML = "";} 


function togglePasswordVisibility(inputId) {
  var passwordInput = document.getElementById(inputId);
  var icon = passwordInput.nextElementSibling;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.add("password-hidden");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("password-hidden");
  }
}

