function play1(){
    var auda=new Audio("tink.wav");
    auda.play();
};
function play2(){   
    var auda=new Audio('boom.wav');
    auda.play()
};

function play3(){
    var auda=new Audio("tom.wav")
    auda.play()
};

function play4(){
    var auda=new Audio("hihat.wav")
    auda.play()
};
function play5(){   
    var auda=new Audio("snare.wav")
    auda.play()
};

function play6(){
    var auda=new Audio("kick.wav")
    auda.play()
};

function play7(){
    var auda=new Audio("ride.wav")
    auda.play();
};
function play8(){   
    var auda=new Audio("openhat.wav")
    auda.play()
};

function play9(){
    var auda=new Audio("clap.wav")
    auda.play()
};

document.getElementById("drums-component").addEventListener("click", function() {
    var dropdownList = document.getElementById("dropdown-list");
    if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
      dropdownList.style.display = "block";
    } else {
      dropdownList.style.display = "none";
    }
  });

  document.getElementById('ride').addEventListener("click", function() {
    var rideShowContent = document.getElementById("ride-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
//   document.getElementById('rack').addEventListener("click", function() {
//     var rideShowContent = document.getElementById("rack-show").innerHTML;
//     document.getElementById("details").innerHTML = rideShowContent;
//   });
  
  document.getElementById('medium').addEventListener("click", function() {
    var rideShowContent = document.getElementById("medium-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
  document.getElementById('tom').addEventListener("click", function() {
    var rideShowContent = document.getElementById("tom-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
  document.getElementById('floor').addEventListener("click", function() {
    var rideShowContent = document.getElementById("floor-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
  document.getElementById('snare').addEventListener("click", function() {
    var rideShowContent = document.getElementById("snare-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
 
  document.getElementById('crash').addEventListener("click", function() {
    var rideShowContent = document.getElementById("crash-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
  document.getElementById('hat').addEventListener("click", function() {
    var rideShowContent = document.getElementById("hat-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });
  
  document.getElementById('bass').addEventListener("click", function() {
    var rideShowContent = document.getElementById("bass-show").innerHTML;
    document.getElementById("details").innerHTML = rideShowContent;
  });

  
  
