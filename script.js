var buildUrl = "Build";
var loaderUrl = buildUrl + "/Maricat.loader.js";
var config = {
    dataUrl: buildUrl + "/Maricat.data",
    frameworkUrl: buildUrl + "/Maricat.framework.js",
    codeUrl: buildUrl + "/Maricat.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Maricat",
    productVersion: "1.0",
};

var container = document.querySelector("#unityContainer");
var canvas = document.createElement("canvas");
container.appendChild(canvas);

var loadingBar = document.createElement("div");
loadingBar.id = "loadingBar";
var loadingBarBackground = document.createElement("div");
loadingBarBackground.id = "loadingBarBackground";
loadingBar.appendChild(loadingBarBackground);
container.appendChild(loadingBar);

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        loadingBarBackground.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingBar.remove();
    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(script);

// JavaScript for navigation and setting selected state
document.getElementById('gamecenter').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });

document.getElementById('donate').addEventListener('click', function() {
    window.location.href = 'index.html#donate';
  });

  // Function to set selected state
function setSelectedState() {
    const navItems = document.querySelectorAll('.nav ul li');
    navItems.forEach(item => item.classList.remove('selected'));

    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    if (currentPath.includes('contact.html')) {
      document.getElementById('contact').classList.add('selected');
    } 
    
    else if (currentHash === '#donate') {
      document.getElementById('donate').classList.add('selected');
    } 
    
    else {
      document.getElementById('gamecenter').classList.add('selected');
    }
  }
  // Call function on page load
window.onload = setSelectedState;
