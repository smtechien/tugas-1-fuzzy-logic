let buttonProcess = document.getElementById("process");

const fuzzySet = [{
    nomor: 1,
    nama: 'Kering',
    fungsi: String.raw`$$ f(n) = \begin{cases} \text{1}, & x \leq 10 \\ \frac{20-x}{20-10}, & 10 < x < 20  \\ 0, & x \geq 20 \end{cases} $$`,
    proses: (value) => {
      if (value <= 10) {
        return String.raw`$$ f(${value}) = \text{1} $$`;
      } else if (value < 20) {
        const result = (20-5)/(20-10);
        return String.raw`$$ \begin{align*} f(${value}) &= \frac{20-${value}}{20-10} \\ &= \frac{${20-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw`$$ f(${value}) = \text{0} $$`;
      }
    }
  },
  {
    nomor: 2,
    nama: 'Lembab',
    fungsi: String.raw`$$ f(n) = \begin{cases} \text{0}, & x \leq 10  \text{ atau } x \geq 50 \\ \frac{x-10}{20-10}, & 10 < x < 20  \\ \text{1}, & 20 \leq x \leq 40 \\ \frac{50-x}{50-40} & 40 < x < 50 \end{cases} $$`,
    proses: (value) => {
      if (value <= 10) {
        return String.raw`$$ f(${value}) = \text{0} $$`;
      } else if (value < 20) {
        const result = (value - 10) / 10;
        return String.raw`$$ \begin{align*} f(${value}) &= \frac{${value}-10}{20-10} \\ &= \frac{${20-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else if (value <= 40) {
        return String.raw`$$ f(${value}) = \text{1} $$`;
      } else if (value < 50) {
        const result = (50 - value) / 10;
        return String.raw`$$ \begin{align*} f(${value}) &= \frac{50-${value}}{50-40} \\ &= \frac{${50-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw`$$ f(${value}) = \text{0} $$`;
      }
    },
  },
  {
    nomor: 3,
    nama: 'Basah',
    fungsi: String.raw`$$ f(n) = \begin{cases} \text{0}, & x \leq 40 \\ \frac{x-40}{50-40}, & 40 < x < 50  \\ 1, & x \geq 50 \end{cases} $$`,
    proses: (value) => {
      if (value <= 40) {
        return String.raw`$$ f(${value}) = \text{0} $$`;
      } else if (value < 50) {
        const result = (value - 40) / 10;
        return String.raw`$$ \begin{align*} f(${value}) &= \frac{${value}-40}{50-40} \\ &= \frac{${value-40}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw`$$ f(${value}) = \text{1} $$`;
      }
    },
  }
];

buttonProcess.addEventListener("click", function process() {
  let value = document.getElementById('value').value;

  let hiddenH1 = document.querySelector(".hidden");
  hiddenH1.style.display = "block";
  let tableHasil = document.getElementById("hasil");
  let i = 3;
  while (tableHasil.childElementCount > 0) {
    tableHasil.deleteRow(i);
    i--;
  }

  let rowHead = document.createElement("tr");
  let headNo = document.createElement("th");
  let headNama = document.createElement("th");
  let headFungsi = document.createElement("th");
  let headProses = document.createElement("th")
  let headNoValue = document.createTextNode("No.");
  let headNamaValue = document.createTextNode("Kategori");
  let headFungsiValue = document.createTextNode("Fungsi Keanggotaan");
  let headProsesValue = document.createTextNode("Hasil");
  headNo.appendChild(headNoValue);
  headNama.appendChild(headNamaValue);
  headFungsi.appendChild(headFungsiValue);
  headProses.appendChild(headProsesValue);
  rowHead.appendChild(headNo);
  rowHead.appendChild(headNama);
  rowHead.appendChild(headFungsi);
  rowHead.appendChild(headProses);
  tableHasil.appendChild(rowHead)


  fuzzySet.forEach(fset => {
    let rowHasil = document.createElement("tr");
    let cellNo = document.createElement("td");
    let cellNama = document.createElement("td");
    let cellFungsi = document.createElement("td");
    let cellProses = document.createElement("td");
    let cellNoValue = document.createTextNode(fset.nomor);
    let cellNamaValue = document.createTextNode(fset.nama);
    let cellFungsiValue = document.createTextNode(fset.fungsi);
    let cellProsesValue = document.createTextNode(fset.proses(value));

    cellNo.appendChild(cellNoValue);
    cellNama.appendChild(cellNamaValue);
    cellFungsi.appendChild(cellFungsiValue);
    cellProses.appendChild(cellProsesValue);

    rowHasil.appendChild(cellNo);
    rowHasil.appendChild(cellNama);
    rowHasil.appendChild(cellFungsi);
    rowHasil.appendChild(cellProses);

    tableHasil.appendChild(rowHasil);
  });


  MathJax.typeset();
})

let buttonClear = document.getElementById("clear");
buttonClear.addEventListener('click', function clear() {
  const input = document.getElementById("value");
  input.value = '';
});