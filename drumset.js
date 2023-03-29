var a=document.getElementById('first');
var s=document.getElementById('second');
var d=document.getElementById('third');
var f=document.getElementById('fourth');
var g=document.getElementById('fifth');
var h=document.getElementById('sixth');
var j=document.getElementById('seventh');
var k=document.getElementById('eighth');
var l=document.getElementById('ninth');

a.addEventListener('click',function(){
    var auda=new Audio("tink.wav")
    auda.play()
    
});

s.addEventListener('click',function(){
    var auda=new Audio("boom.wav")
    auda.play()
});

d.addEventListener('click',function(){
    var auda=new Audio("tom.wav")
    auda.play()
});

f.addEventListener('click',function(){
    var auda=new Audio("hihat.wav")
    auda.play()
});

g.addEventListener('click',function(){
    var auda=new Audio("snare.wav")
    auda.play()
});

h.addEventListener('click',function(){
    var auda=new Audio("kick.wav")
    auda.play()
});

j.addEventListener('click',function(){
    var auda=new Audio("ride.wav")
    auda.play()
});

k.addEventListener('click',function(){
    var auda=new Audio("openhat.wav")
    auda.play()
});

l.addEventListener('click',function(){
    var auda=new Audio("clap.wav")
    auda.play()
});
