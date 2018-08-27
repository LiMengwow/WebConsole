function modConsole(){
    var div = document.createElement('div');
    div.className = 'mod-console';
    document.body.appendChild(div);
    var div2 = document.createElement('div');
    div2.className = 'mod-open';
    div2.innerHTML = '开启'
    document.body.appendChild(div2);
}
modConsole()
function dataOut(obj, name){
    if(!obj) return false;
    var str = name ? (name + ' : ' + obj) : obj;
    var divItem = document.createElement('div');
    divItem.className = 'mod-console-item';
    divItem.innerHTML = str;
    document.getElementsByClassName('mod-console')[0].appendChild(divItem)
}
dataOut('5445')

var modOpen = document.getElementsByClassName('mod-open')[0];
var modWrapper = document.getElementsByClassName('mod-console')[0];
var startY, divHeight;
modOpen.onclick = function(){
    modWrapper.style.display = 'block';
}
var timeOutEvent;
modWrapper.addEventListener('touchstart', function(e){
    timeOutEvent = setTimeout(function() {
        timeOutEvent = 0;
        modWrapper.style.display = 'none';
    }, 350);
    startY = e.touches[0].pageY
    divHeight = modWrapper.offsetHeight;
})

modWrapper.addEventListener('touchmove', function(e){
    clearTimeout(timeOutEvent);
    timeOutEvent = 0;
    modWrapper.style.height = divHeight - e.touches[0].pageY + startY + 'px'
})

modWrapper.addEventListener('touchend', function(){
    clearTimeout(timeOutEvent);
    if (timeOutEvent != 0) {
        console.log('你点击了')
    }
    return false;
})