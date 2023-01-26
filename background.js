chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
      alert("You switched to tab: "+ tab.url);
    });
  });


  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // check if more than one tab is open
    if (tabId > 1) {
      // show popup message
      alert("You have more than one tab open!");
    }
  });

  chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  });



  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
  //Capturing user information
  //Get user email
  var userEmail = localStorage.getItem('userEmail');
  if (!userEmail) {
    //prompt user for email
    userEmail = prompt('Please enter your email address');
    //store email in localStorage
    localStorage.setItem('userEmail', userEmail);
  }
  
  //Get user name
  var userName = localStorage.getItem('userName');
  if (!userName) {
    //prompt user for name
    userName = prompt('Please enter your name');
    //store name in localStorage
    localStorage.setItem('userName', userName);
  }
  localStorage.clear();


fetch('https://api.ipify.org/?format=json')
 .then(response => response.json())
 .then(data => console.log(data.ip));
