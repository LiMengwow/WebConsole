class WebConsole{
    constructor(){
        this.num = 0;
        this.modConsole()
        this.modOpen = document.getElementsByClassName('mod-open')[0];
        this.modWrapper = document.getElementsByClassName('mod-console')[0];
        this.startY
        this.divHeight
        this.openClick()
        this.timeOutEvent
        this.modTouchstart()
        this.modTouchmove()
        this.modTouchend()
    }
    modConsole(){
        var div = document.createElement('div');
        div.className = 'mod-console';
        document.body.appendChild(div);
        var div2 = document.createElement('div');
        div2.className = 'mod-open';
        div2.innerHTML = '开启'
        document.body.appendChild(div2);
    }
    dataOut(obj, name){
        if(!obj) return false;
        this.num++;
        var str = name ? (this.num + ' : ' + name + ' : ' + obj) : this.num + ' : ' + obj;
        var divItem = document.createElement('div');
        divItem.className = 'mod-console-item';
        divItem.innerHTML = str;
        document.getElementsByClassName('mod-console')[0].appendChild(divItem)
    }
    openClick(){
        var that = this;
        that.modOpen.onclick = function(){
            if(that.modOpen.innerHTML == '开启'){
                that.modWrapper.style.display = 'block';
                that.modOpen.innerHTML = '关闭'
            } else {
                that.modWrapper.style.display = 'none';
                that.modOpen.innerHTML = '开启'
            }
        }
    }
    modTouchstart(){
        var that = this;
        that.modWrapper.addEventListener('touchstart', function(e){
            that.timeOutEvent = setTimeout(function() {
                that.timeOutEvent = 0;
                that.dataOut('你长按了')
            }, 350);
            that.startY = e.touches[0].pageY
            that.divHeight = that.modWrapper.offsetHeight;
        })
    }
    modTouchmove(){
        var that = this;
        that.modWrapper.addEventListener('touchmove', function(e){
            clearTimeout(that.timeOutEvent);
            that.timeOutEvent = 0;
            that.modWrapper.style.height = that.divHeight - e.touches[0].pageY + that.startY + 'px'
        })
    }
    modTouchend(){
        var that = this;
        that.modWrapper.addEventListener('touchend', function(){
            clearTimeout(that.timeOutEvent);
            if (that.timeOutEvent != 0) {
                that.dataOut('你点击了')
            }
            return false;
        })
    }
}
var cons = new WebConsole();
cons.dataOut('222')
