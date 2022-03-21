let buttonProcess = document.getElementById("process");

const fkering = (value) => {
  if (value <= 10) {
    return 1;
  } else if (value < 20) {
    return (20 - value) / 10;
  } else {
    return 0;
  }
}

const flembab = (value) => {
  if (value <= 10) {
    return 0;
  } else if (value < 20) {
    return (value - 10) / 10;
  } else if (value <= 40) {
    return 1;
  } else if (value <= 50) {
    return (50 - value) / 10;
  } else {
    return 0;
  }
}

const fbasah = (value) => {
  if (value <= 40) {
    return 0;
  } else if (value < 50) {
    return (value - 40) / 10;
  } else {
    return 1;
  }
}

buttonProcess.addEventListener("click", function process() {
  let value = document.getElementById('value').value;
  const resultKering = fkering(value);
  const resultLembab = flembab(value);
  const resultBasah = fbasah(value);

  console.log(`kering: ${resultKering}`);
  console.log(`lembab: ${resultLembab}`);
  console.log(`basah: ${resultBasah}`);

  let hiddenH1 = document.querySelector(".hidden");
  hiddenH1.style.display = "block";
  let tableHasil = document.getElementById("hasil");
  let i = 15;
  while (tableHasil.childElementCount > 0) {
    tableHasil.deleteRow(i);
    i--;
  }
  let rowHead = document.createElement("tr");
  let headNo = document.createElement("th");
  let headImg = document.createElement("th");
  let headName = document.createElement("th");
  let headNoValue = document.createTextNode("Fungsi Keanggotaan Kering");
  let headImgValue = document.createTextNode("Fungsi Keanggotaan Lembab");
  let headNameValue = document.createTextNode("Fungsgi Keanggotaan Basah");
  headNo.appendChild(headNoValue);
  headImg.appendChild(headImgValue);
  headName.appendChild(headNameValue);
  rowHead.appendChild(headNo);
  rowHead.appendChild(headImg);
  rowHead.appendChild(headName);
  tableHasil.appendChild(rowHead)


  let rowHasil = document.createElement("tr");
  let cellNo = document.createElement("td");
  let cellImg = document.createElement("td");
  let cellName = document.createElement("td");
  let cellNoValue = document.createTextNode(resultKering);
  let cellImgValue = document.createTextNode(resultLembab);
  let cellNameValue = document.createTextNode(resultBasah);
  cellNo.appendChild(cellNoValue);
  cellImg.appendChild(cellImgValue);
  cellName.appendChild(cellNameValue);
  rowHasil.appendChild(cellNo);
  rowHasil.appendChild(cellImg);
  rowHasil.appendChild(cellName);

  tableHasil.appendChild(rowHasil);

})

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener('click', function clear() {
  let inputs = document.getElementsByTagName("input");
  Object.values(inputs).forEach(input => {
    input.value = '';
  })
})