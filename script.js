var tab;
var tabcontent; 

window.addEventListener('load',function()
{
 tabcontent=document.getElementsByClassName('tabcontent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);

});

function hideTabsContent(a){
    for (var i=a; i<tabcontent.length; i++){
        tabcontent[i].classList.remove('show');
        tabcontent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick=function(event){
    var target=event.target;
    if (target.className=='tab'){
        for (var i=0; i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if (tabcontent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabcontent[b].classList.remove('hide');
        tabcontent[b].classList.add('show');
    }
}

var members_tab;
var members; 


window.addEventListener('load',function(){
    members=document.getElementsByClassName('members');
    members_tab=document.getElementsByClassName('members_tab');
    hideTabContent(1);
});

function hideTabContent(d){
    for (var y=d; y<members.length; y++){
        members[y].classList.remove('show');
        members[y].classList.add('hide');
        members_tab[y].classList.remove('whiteboard');
    }
}

document.getElementById('slides').onclick=function(event1){
    var targets=event1.target;
    if (targets.className=='members_tab'){
        for (var y=0; y<members_tab.length; y++){
            if(targets == members_tab[y]){
                showTabContent(y);
                break;
            }
        }
    }
}

function showTabContent(c){
    if (members[c].classList.contains('hide')){
        hideTabContent(0);
        members_tab[c].classList.add('whiteboard');
        members[c].classList.remove('hide');
        members[c].classList.add('show');
    }
}

