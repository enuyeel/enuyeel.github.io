//[https://stackoverflow.com/questions/9521298/verify-external-script-is-loaded]

//[https://stackoverflow.com/a/51242436]
// function isScriptLoaded(src)
// {
//   return Boolean(document.querySelector('script[src="' + src + '"]'));
// }

//[https://stackoverflow.com/a/9521311]
// function loadCheck(src){
//   var desiredSource = src;
//   console.log(desiredSource);
//   var scripts = document.getElementsByTagName('script');
//   var alreadyLoaded = false;

//   for(var scriptIndex in document.scripts) {
//     console.log(scripts[scriptIndex]);
//     if(!alreadyLoaded && desiredSource === scripts[scriptIndex].src) {
//         alreadyLoaded = true;
//     }
//   }

//   return alreadyLoaded;
// };

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

let button = document.getElementById("color_scheme_btn");
if (typeof button !== 'undefined')
{
  button.addEventListener("afterThemeChange", utterancesTheme);
}

// if (typeof document.querySelector('.utterances-frame') !== 'undefined') 
// {
//   utterancesTheme();
// }
// else
// {
  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    //TODO: Might be able to trim down these loops a bit.
    // for (let mutation of mutationList) {
    //   for (let node of mutation.addedNodes) {
    //     if (node.className === "utterances")
    //     {
          let commentSection = document.querySelector('.utterances-frame');
          if (typeof commentSection !== 'undefined' &&
              commentSection !== null) {
            document.querySelector('.utterances-frame').addEventListener('load', (event) => 
              {
                utterancesTheme();
                // Later, you can stop observing
                observer.disconnect();
              }
            );
          }
    //     }
    //   }
    // }
  }

  //[https://javascript.info/mutation-observer]

  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('main');

  // Options for the observer (which mutations to observe)
  const config = { childList: true };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
// }

//utterancesTheme();

// function checkJSLoaded() {
//   // create the script element
//   let script = document.createElement('script');
  
//   // assign an onload event handler
//   script.addEventListener('load', (event) => {
//     console.log('app.js file has been loaded');
//     utterancesTheme();
//   });

//   script.setAttribute('repo', 'enuyeel/enuyeel.github.io');
//   script.setAttribute('issue-term', 'pathname');
//   script.setAttribute('crossorigin', 'anonymous');
//   //script.setAttribute('async', 'true');

//   // load the script file
//   script.src = 'https://utteranc.es/client.js';
//   //document.body.appendChild(script);
//   document.querySelector('main').appendChild(script);
// }

//checkJSLoaded();