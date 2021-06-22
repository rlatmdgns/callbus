export function changePriceWon(price) {
  const arrWon = ["원", "만", "억"];
  const wonRegx = /(-?[0-9]+)([0-9]{4})/;
  let won = (price + "").replace(/,/g, "");
  let changeWon = "";

  while (wonRegx.test(won)) {
    won = won.replace(wonRegx, "$1,$2");
  }
  let wonArray = won.split(",")
  let arrCount = wonArray.length - 1;
  for (let j = 0; j < wonArray.length; j++) {
    let tmpWon = getWon(wonArray, j);
    if (arrWon[arrCount] === undefined) {
      alert("금액의 수가 너무 큽니다.");
      break;
    }
    if (tmpWon > 0) {
      changeWon += wonArray[j] + arrWon[arrCount]; //55억0000만0000원  변환 55억 
    }
    arrCount--;
  }
  function getWon(wonArray, j){
    for (let i = 0; i < wonArray[j].length; i++) {
      let tmpPrice = wonArray[j].substring(i, i + 1);
      return 0 + Number(tmpPrice);
    }
  }
  return changeWon;
}
