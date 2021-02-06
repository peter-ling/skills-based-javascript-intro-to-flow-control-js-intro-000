function basicTeenager(age) {
  if (age > 12 && age < 20){
    return `"You are a teenager!"`;
  }

}

function teenager(age) {
  if (age > 12 && age < 20){
    return `"You are a teenager!"`;
  } else {
    return `"You are not a teenager"`;
  }

}

function ageChecker(age) {
  if (age < 13){
    return "You are a kid"
  } else if (age > 19){
    return "You are a grownup";
  } else {
    return "You are a teenager!";
    }


}

function ternaryTeenager(age) {
  return age <= 19 && age >= 13 : true : false;

}

function switchAge(age) {

}
