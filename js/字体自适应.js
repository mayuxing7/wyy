
    function setRem(){
        var ui_w=375;
        var clientwidth=document.documentElement.clientWidth||document.body.clientWidth;
        var html_=document.getElementsByTagName("html")[0];
        html_.style.fontSize=(clientwidth/ui_w)*10+"px";
    }

       window.onresize=setRem;
