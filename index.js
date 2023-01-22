// Your code here
function greet() {
    var name = prompt ('What is your name?');
    if (name){
        alert('Hello, ' + name)
    } else {
        alert('Hello')
    }

    var age = prompt ('How old are you?');
    age = parseInt(age)

    var birthday = confirm ('Have you had a birthday yet this year?');
   var thisyear = new Date().getFullYear();
   console.log (thisyear);
  var yesBirthday = thisyear - age; 
  console.log (yesBirthday)
  var noBirthday = yesBirthday - 1;
  console.log (noBirthday)

if (birthday) {
    alert ('You were born in the year ' + yesBirthday)
    } else {
    alert ('You were born in the year ' + noBirthday)
   };
}

greet()