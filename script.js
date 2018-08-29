function amountOfHolesPlayed() {
  const HOLESPLAYED = document.getElementsByName('holesPlayed');
  let x;
    for(let i = 0; i < holesPlayed.length; i++){
    if(holesPlayed[i].checked){
        x = holesPlayed[i].value;
    }
}

  const PUTTS = document.getElementById("putts").value;
  let PPG = (putts / x).toFixed(2);         //PPG stands for 'putts per green'
  document.getElementById("results").innerHTML = "You made " + PPG +
  " putts per GIR, well done";
}

function imgChange() {
  document.getElementById('myImage').src=
  'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2017/09/Screen-Shot-2017-03-10-at-10.37.24.jpg';
}
function imgChange2() {
  document.getElementById('myImage').src=
  'https://photos.bluegolf.com/45/3f/d9/b2/693244f28f953a7c20cb670c_l.jpg';
}
function imgChange3() {
  document.getElementById('myImage').src=
  'https://thegolfnewsnet.com/wp-content/uploads/2017/02/2017-bushnell-golf-1-990x556.jpg';
}
function imgChange4() {
  document.getElementById('myImage').src=
  'http://www.golfwrx.com/wp-content/uploads/2013/11/tee-putting-drilkl.jpg';
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
