let storeDropdown = document.getElementById('storeDropdown');
let storeLink = document.getElementById('link');

let communityDropdown = document.getElementById('communityDropdown')
let communityLink = document.getElementById('communityLink')

let languageDropdown = document.getElementById('languageDropdown')
let languageButton = document.getElementById('languageButton')

function showStoreDropdown(){
 storeDropdown.style.display = 'block';
}
function hideStoreDropdown(){
   storeDropdown.style.display = 'none';
}
function hideStoreDropdownWithDelay(){
    setTimeout(function(){
        if(!storeDropdown.matches(':hover')){
            hide();
        }
    },200);
}
storeLink.addEventListener('mouseenter', showStoreDropdown);
storeLink.addEventListener('mouseleave',hideStoreDropdownWithDelay);
storeDropdown.addEventListener('mouseleave', hideStoreDropdown)

function showCommunityDropdown(){
 communityDropdown.style.display = 'block';
}
function hideCommunityDropdown(){
 communityDropdown.style.display = 'none';
}
function hideCommunityDropdownWithDelay(){
    setTimeout(function(){
        if(!communityDropdown.matches(':hover')){
            hide();
        }
    },200);
}
communityLink.addEventListener('mouseenter', showCommunityDropdown);
communityLink.addEventListener('mouseleave',hideCommunityDropdownWithDelay);
communityDropdown.addEventListener('mouseleave', hideCommunityDropdown);

function showLanguageDropdown(){
 languageDropdown.style.display = 'block';
}
function hideLanguageDropdown(){
 languageDropdown.style.display = 'none';
}
function hideLanguageDropdownWithDelay(){
    setTimeout(function(){
        if(!languageDropdown.matches(':hover')){
            hide();
        }
    },200);
}
languageButton.addEventListener('mouseenter', showLanguageDropdown);
languageButton.addEventListener('mouseleave',hideLanguageDropdownWithDelay);
languageDropdown.addEventListener('mouseleave', hideLanguageDropdown);

