// addEventListener("load", (event) => {});
// onload = (event) => {
//   rPaint();
// };


// function rPaint() {
//   const mySection = $i("button");
//   mySection.style.background = q();
//
//   const myClass = $c("red");
//   for (let i = myClass.length-1; i >= 0; i--) {
//     myClass[i].style.background = q();
//   }
//
//   // for (let i = 0; i < Temporary.length; i++) {
//   //   if (Temporary[i]!="a") {
//   //     Temporary[i]="a";
//   //     myTel.value=Temporary;
//   //   }
//   // }
  // const myTel=$i("tel");
//   const myBut=$i("submit");
//   let Temporary2= "000000000000".split("");
//   myTel.value = Temporary2[0]+Temporary2[1]+
//     "("+Temporary2[2]+Temporary2[3]+Temporary2[4]+")"+
//     "-"+Temporary2[5]+Temporary2[6]+Temporary2[7]+
//     "-"+Temporary2[8]+Temporary2[9]+
//     "-"+Temporary2[10]+Temporary2[11];
//
//   myTel.addEventListener("keyup", function() {
//     let Temporary = myTel.value;
//     let Temporary1= Temporary.split("");
//     for (const letter in Temporary) {
//     //   if (Temporary.hasOwnProperty(letter)) {
//         // myBut.value = myTel.value;
//
//         // myBut.value = Temporary1[0]+Temporary1[1]+
//         //   " ("+Temporary1[2]+Temporary1[3]+Temporary1[4]+") ";
//         //   if (letter>=5) {
//         //      myTel.value=myBut.value;
//         //   }
//           myBut.value = Temporary1[0]+Temporary1[1]+
//             " ("+Temporary1[2]+Temporary1[3]+Temporary1[4]+") "+
//             " "+Temporary1[5]+Temporary1[6]+Temporary1[7]+
//             " "+Temporary1[8]+Temporary1[9]+
//             " "+Temporary1[10]+Temporary1[11];
//           if (letter>=11) {
//              myTel.value=myBut.value;
//           }
//       }
//     // }
//
//   });
  // myTel.addEventListener("change", function() {
  //   let Temporary = myTel.value;
  //     myBut.value = myTel.value;
  // });

// }

console.log("pass");
window.addEventListener("load", () => {
  const pInput = $i("tel");
  $el(pInput,disallowNonNumericInput);
  $bl(pInput,formatTel);
  /////////////////////////////////////////////////////////
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  };

  // Scroll to top on click
  scrollToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  ////////////////////////////////////////////////////////////
  // pInput.addEventListener("keydown", disallowNonNumericInput);
  // pInput.addEventListener("keyup", formatTel);
});

const disallowNonNumericInput = (evt) => {
  if (evt.ctrlKey) { return; }
  if (evt.key.length > 1) { return; }
  if (/[0-9.]/.test(evt.key)) { return; }
  evt.preventDefault();
}

const formatTel = (evt) => {
  const digits = evt.target.value.replace(/\D/g,'').substring(0,12);
  // console.log(digits);
  const cCode = digits.substring(0,2);
  // console.log(cCode);
  const aCode = digits.substring(2,5);
  // console.log(aCode);
  const prefix = digits.substring(5,8);
  // console.log(prefix);
  const suffix = digits.substring(8,10);
  // console.log(suffix);
  const suffixend = digits.substring(10,12);
  // console.log(suffixend);

  if(digits.length > 10) {evt.target.value = `+${cCode} (${aCode}) ${prefix}-${suffix}-${suffixend}`;}
  else if(digits.length > 8) {evt.target.value = `+${cCode} (${aCode}) ${prefix}-${suffix}`;}
  else if(digits.length > 5) {evt.target.value = `+${cCode} (${aCode}) ${prefix}`;}
  else if(digits.length > 2) {evt.target.value = `+${cCode} (${aCode}`;}
  else if(digits.length > 0) {evt.target.value = `+${cCode}`;}
};
