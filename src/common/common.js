export function changePriceWon(price) {
  const arrWon = ["원", "만", "억"];
  const wonRegx = /(-?[0-9]+)([0-9]{4})/;
  let won = (price + "").replace(/,/g, "");
  let changeWon = "";
  while (wonRegx.test(won)) {
    won = won.replace(wonRegx, "$1,$2");
  }
  let arrCount = won.split(",").length - 1;
  for (let j = 0; j < won.split(",").length; j++) {
    let tmpWon = 0;
    if (arrWon[arrCount] === undefined) {
      alert("금액의 수가 너무 큽니다.");
      break;
    }
    for (let i = 0; i < won.split(",")[j].length; i++) {
      let tmpPrice = won.split(",")[j].substring(i, i + 1);
      tmpWon = tmpWon + Number(tmpPrice);
    }
    if (tmpWon > 0) {
      changeWon += won.split(",")[j] + arrWon[arrCount]; //55억0000만0000원  변환 55억 
    }
    arrCount--;
  }
  return changeWon;
}
