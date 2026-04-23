let score = 0;
let answer01 = prompt(`What do teenagers do?
    [1] scare the living sh*t outta me
    [2] go to school`);
const ans01 = Number(answer01);
if (ans01 === 1) {
  score = score + 1;
}
let answer02 = prompt(`they could care less ...
        [1] if they win the state championship
        [2] as long as someone'll bleed`);
const ans02 = Number(answer02);
if (ans02 === 2) {
  score = score + 1;
}
let answer03 =
  prompt(`if you darken your clothes, or strike a violent pose ____, but not me
    [1] Maybe they'll leave you alone
    [2] you get a free icecream next time you visit McDonalds`);

const ans03 = Number(answer03);
if (ans03 === 1) {
  score = score + 1;
}
if (score === 3) {
  alert(
    `They're gonna clean up your looks with all the lies in the books to make a citizen outta you. YOU GOT %100`,
  );
} else if (score > 0) {
  alert(`you're never gonna fit in much, kid. you got a few. good try`);
} else {
  alert(
    `dude you gotta hear this song called Teenagers by My Chemical Romance... you missed all of 'em`,
  );
}
