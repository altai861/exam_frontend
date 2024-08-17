import './style.css'
import { homePage } from './pages/home.ts';
import { loginPage } from './pages/login.ts';
import { registerPage } from './pages/register.ts';
import { NotFoundPage } from './pages/404.ts';
import { examPage } from './pages/exam.ts';

function router() {
  let path = window.location.hash
  console.log(path)
  if (!path) {
    homePage();
  } else if (path === "#login") {
    loginPage();
  } else if (path === "#register") {
    registerPage();
  } else if (path.startsWith("#exams")) {
    let pathStrings = path.split("#");
    examPage(pathStrings[pathStrings.length - 1]);
  } else {
    NotFoundPage();
  }
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);