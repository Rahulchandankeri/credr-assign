/*  
Write a program which takes two strings as input from the user (string1 and string2) this 
program should print two strings as output (op1 and op2)

  i) op1 should contain all the characters which are present in string1 but NOT present in string2
  ii) op2 should contain all the characters which are present in string2 but NOT present in string1

  Example1: string1 = ‘ABC’, string2 = ‘BC’ then op1(output) should be ‘A’ and op2 should be null
  Example2: string1 = ‘BC’, string2= ‘BANGALORE’ op1 should be ‘C’ and op2 should be ANGLORE’ 
  */
const outputScreen = document.getElementById("#output");

function uncommonStr(str1, str2) {
  let output1 = "";
  let output2 = "";
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      output1 += str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      output2 += str2[i];
    }
  }
  let outputStr = `Output 1 is ${output1},  Output 2 is ${output2 || "null"}`;
  outputScreen.innerHTML = outputStr;
  console.log(outputStr);
  return [output1, output2];
}
uncommonStr("ABC", "BC");
uncommonStr("BC", "BANGALORE");
