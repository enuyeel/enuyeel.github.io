document.getElementById("mxmz_btn").addEventListener("click", sizeSwitcher);
document.getElementById("color_scheme_btn").addEventListener("click", modeSwitcher);

let theme = localStorage.getItem('theme');

theme = theme || (window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light');

setTheme(theme);

let size = localStorage.getItem('maximize');

size = ((typeof(size) !== 'undefined') && (size !== null)) ? size : 'false';

toggleMaximize(size);

//[https://github.com/utterance/utterances/issues/549#issuecomment-907606127]
function utterancesTheme () {
  if (document.querySelector('.utterances-frame')) {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'github-dark' : 'github-light'
    const message = {
      type: 'set-theme',
      theme: theme
    };
    const iframe = document.querySelector('.utterances-frame');
    iframe.contentWindow.postMessage(message, 'https://utteranc.es');
  }
}

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("color_scheme_btn").innerHTML = '<i class="fa fa-sun-o"></i> lightMode';
    //document.getElementById("profile-image").src = "/assets/blog2.png";
    //document.getElementById("color_scheme_btn").innerText = "darkMode";
    //document.getElementById("theme-toggle").classList.add('sun');
    //document.getElementById("theme-toggle").classList.remove('moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("color_scheme_btn").innerHTML = '<i class="fa fa-moon-o"></i> darkMode';
    //document.getElementById("profile-image").src = "/assets/blog1.png";
    //document.getElementById("color_scheme_btn").innerText = "lightMode";
    //document.getElementById("theme-toggle").classList.add('moon');
    //document.getElementById("theme-toggle").classList.remove('sun');
  }
  //utterancesTheme();
}

function modeSwitcher() {
  let currentMode = document.documentElement.getAttribute('data-theme');

  if (currentMode === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

function sizeSwitcher() {
  let currentSize = window.localStorage.getItem('maximize');

  if (currentSize === 'false') {
    toggleMaximize('true');
  } else {
    toggleMaximize('false');
  }
}

function toggleMaximize(size) {

  // //https://stackoverflow.com/questions/1535631/static-variables-in-javascript
  // if ( typeof toggle_maximize.ctner_state == 'undefined' ) {
  //   // It has not... perform the initialization
  //   toggle_maximize.ctner_state = 0;
  // }
  // var ctner = document.getElementById("ctner");

  var ctner = document.getElementById("ctner");
  if ((typeof(ctner) === 'undefined') || 
     (ctner === null))
    return;

  if (size === 'true') 
  { 
    //ctner.style.width = "100%";
    ctner.style.maxWidth = "100%";
    if (document.getElementById("mxmz_btn")) 
    {
      //document.getElementById("mxmz_btn").innerHTML = "";
      document.getElementById("mxmz_btn").innerHTML = '<i class="fa fa-window-maximize"></i> restore';
    }

    //if (document.getElementById("maximize_icon"))
    //document.getElementById("maximize_icon").innerHTML = '<i class="fa fa-window-minimize"></i>';
   
    window.localStorage.setItem('maximize', 'true');
  } 
  else
  {
    //ctner.style.width = "90%";
    ctner.style.maxWidth = "500px";
    if (document.getElementById("mxmz_btn")) 
    {
      //document.getElementById("mxmz_btn").innerHTML = "";
      document.getElementById("mxmz_btn").innerHTML = '<i class="fa fa-window-maximize"></i> maximize';
    }
    //if (document.getElementById("maximize_icon"))

    window.localStorage.setItem('maximize', 'false');
  }
}