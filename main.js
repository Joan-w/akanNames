var century = parseInt(document.getElementById(century));
var year = parseInt(document.getElementById(year));
var month = parseInt(document.getElementById(month));
var day = parseInt(document.getElementById(day));

var maleNames = ["", "", "", "", "", "", ""];
var femaleNames = ["", "", "", "", "", "", ""];

let readGender = () =>{
    var gend = document.getElementsByName("gender");
    if (gender[0].checked == true) {
        var gender = "male";
    } else if (gender[1].checked == true){
        var gender = "female";   
    } else{
        alert("Please choose your gender");
    }
    switch(gender){
        case gender = "Male":
            switch (day){
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[0]+ "" + "Your Akan name is" + maleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[1]+ "" + "Your Akan name is" + maleNames[1];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[2]+ "" + "Your Akan name is" + maleNames[2];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[3]+ "" + "Your Akan name is" + maleNames[3];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[4]+ "" + "Your Akan name is" + maleNames[4];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[5]+ "" + "Your Akan name is" + maleNames[5];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[6]+ "" + "Your Akan name is" + maleNames[6];
                    break;
                default:
            }

            break;
        case gender = "Female":
            switch (day){
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[0]+ "" + "Your Akan name is" + maleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[1]+ "" + "Your Akan name is" + maleNames[1];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[2]+ "" + "Your Akan name is" + maleNames[2];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[3]+ "" + "Your Akan name is" + maleNames[3];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[4]+ "" + "Your Akan name is" + maleNames[4];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[5]+ "" + "Your Akan name is" + maleNames[5];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + days_array[6]+ "" + "Your Akan name is" + maleNames[6];
                    break;
                default:
    }
    break;
    default:
}