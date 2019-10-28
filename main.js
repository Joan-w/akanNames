/**The html form captures users the DOB and passess it off to the formual which outputs
 * the exact day of the week.accordion
 * If else statements will aid in matching day of the week with the pre-noted names
 */

 //get to calculate the day
let dayWeek = () =>{
var century = parseInt(document.getElementById(century));
var year = parseInt(document.getElementById(year));
var month = parseInt(document.getElementById(month));
var day = parseInt(document.getElementById(day));

//day of the week
dayWeek = (((century/4) - (2 * century - 1)) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) %7;
return(dayWeek);

}
//actual formula
let getName = () =>{
    day = dayWeek();
    readGender();
} 

//array declaration
var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday",];

//gender acknowledgement
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
        case gender = "male":
            switch (day){
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[0]+ "" + "Your Akan name is" + maleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[1]+ "" + "Your Akan name is" + maleNames[1];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[2]+ "" + "Your Akan name is" + maleNames[2];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[3]+ "" + "Your Akan name is" + maleNames[3];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[4]+ "" + "Your Akan name is" + maleNames[4];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[5]+ "" + "Your Akan name is" + maleNames[5];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[6]+ "" + "Your Akan name is" + maleNames[6];
                    break;
                default:
            }

            break;
        case gender = "female":
            switch (day){
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[0]+ "" + "Your Akan name is" + femaleNames[0];
                    break;
                case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[1]+ "" + "Your Akan name is" + femaleNames[1];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[2]+ "" + "Your Akan name is" + femaleNames[2];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[3]+ "" + "Your Akan name is" + femaleNames[3];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[4]+ "" + "Your Akan name is" + femaleNames[4];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[5]+ "" + "Your Akan name is" + femaleNames[5];
                    break;
                case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a " + weekDays[6]+ "" + "Your Akan name is" + femaleNames[6];
                    break;
                default:
    }
    break;
    default:
}