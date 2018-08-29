function amountOfHolesPlayed() {
  let holesPlayed = document.getElementsByName('holesPlayed');
  let x;
    for(let i = 0; i < holesPlayed.length; i++){
    if(holesPlayed[i].checked){
        x = holesPlayed[i].value;
    }
} //declare a function to find out if 9 or 18 holes were played

  const putts = document.getElementById("putts").value; //obtain value from user input

  let PPG = (putts / x).toFixed(2);
  console.log(PPG + " putts per GIR, well done")
  document.getElementById("results").innerHTML = "You made " + PPG + " putts per GIR, well done";
} //calculate scores

function imgChange() {
  document.getElementById('myImage').src='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2017/09/Screen-Shot-2017-03-10-at-10.37.24.jpg';
}
function imgChange2() {
  document.getElementById('myImage').src='  https://photos.bluegolf.com/45/3f/d9/b2/693244f28f953a7c20cb670c_l.jpg';
}
function imgChange3() {
  document.getElementById('myImage').src='  https://thegolfnewsnet.com/wp-content/uploads/2017/02/2017-bushnell-golf-1-990x556.jpg';
}
function imgChange4() {
  document.getElementById('myImage').src='  http://www.golfwrx.com/wp-content/uploads/2013/11/tee-putting-drilkl.jpg';
}
