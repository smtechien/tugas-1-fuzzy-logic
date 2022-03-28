let buttonProcess = document.getElementById("process");
let buttonProcess2 = document.getElementById("process2");

const fuzzySet = [{
    nomor: 1,
    nama: 'Kering',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{1}, & x \leq 10 \\ \frac{20-x}{20-10}, & 10 < x < 20  \\ 0, & x \geq 20 \end{cases} $$`,
    proses: (value) => {
      if (value <= 10) {
        return String.raw `$$ f(${value}) = \text{1} $$`;
      } else if (value < 20) {
        const result = (20 - 5) / (20 - 10);
        return String.raw `$$ \begin{align*} f(${value}) &= \frac{20-${value}}{20-10} \\ &= \frac{${20-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw `$$ f(${value}) = \text{0} $$`;
      }
    }
  },
  {
    nomor: 2,
    nama: 'Lembab',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x \leq 10  \text{ atau } x \geq 50 \\ \frac{x-10}{20-10}, & 10 < x < 20  \\ \text{1}, & 20 \leq x \leq 40 \\ \frac{50-x}{50-40} & 40 < x < 50 \end{cases} $$`,
    proses: (value) => {
      if (value <= 10) {
        return String.raw `$$ f(${value}) = \text{0} $$`;
      } else if (value < 20) {
        const result = (value - 10) / 10;
        return String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-10}{20-10} \\ &= \frac{${20-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else if (value <= 40) {
        return String.raw `$$ f(${value}) = \text{1} $$`;
      } else if (value < 50) {
        const result = (50 - value) / 10;
        return String.raw `$$ \begin{align*} f(${value}) &= \frac{50-${value}}{50-40} \\ &= \frac{${50-value}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw `$$ f(${value}) = \text{0} $$`;
      }
    },
  },
  {
    nomor: 3,
    nama: 'Basah',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x \leq 40 \\ \frac{x-40}{50-40}, & 40 < x < 50  \\ 1, & x \geq 50 \end{cases} $$`,
    proses: (value) => {
      if (value <= 40) {
        return String.raw `$$ f(${value}) = \text{0} $$`;
      } else if (value < 50) {
        const result = (value - 40) / 10;
        return String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-40}{50-40} \\ &= \frac{${value-40}}{10} \\ &= ${result} \end{align*}$$`;
      } else {
        return String.raw `$$ f(${value}) = \text{1} $$`;
      }
    },
  }
];

buttonProcess.addEventListener("click", function process() {
  let value = document.getElementById('value').value;

  let hiddenH1 = document.querySelector("#hidden");
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


// Program 2
const fuzzySetCH = [{
    nomor: 1,
    nama: 'Rendah',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{1}, & x \leq 100 \\ \frac{150-x}{50}, & 100 < x /leq 150  \\ 0, & x > 150 \end{cases} $$`,
    proses: (value) => {
      if (value <= 100) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value <= 150) {
        const hasilHitung = (150 - value) / (50);
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{150-${value}}{50} \\ &= \frac{${150-value}}{50} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    }
  },
  {
    nomor: 2,
    nama: 'Sedang',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x < 100  \text{ atau } x > 350 \\ \frac{x-100}{50}, & 100 \leq x < 150  \\ \text{1}, & 150 \leq x \leq 300 \\ \frac{350-x}{50} & 300 < x \leq 350 \end{cases} $$`,
    proses: (value) => {
      if (value < 100) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value < 150) {
        const hasilHitung = (value - 100) / 50;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-100}{50} \\ &= \frac{${value-100}}{50} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value <= 300) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value <= 350) {
        const hasilHitung = (350 - value) / 50;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{350-${value}}{50} \\ &= \frac{${350-value}}{50} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    },
  },
  {
    nomor: 3,
    nama: 'Tinggi',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x < 300 \\ \frac{x-300}{50}, & 300 < x < 350  \\ 1, & x \geq 350 \end{cases} $$`,
    proses: (value) => {
      if (value < 300) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value <= 350) {
        const hasilHitung = (value - 300) / 50;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-300}{50} \\ &= \frac{${value-300}}{50} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    },
  }
];

const fuzzySetSU = [{
    nomor: 1,
    nama: 'Dingin',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{1}, & x < 24 \\ \frac{25-x}{1}, & 24 \leq x < 25  \\ 0, & x \geq 150 \end{cases} $$`,
    proses: (value) => {
      if (value < 24) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value < 25) {
        const hasilHitung = (25 - value) / (1);
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{25-${value}}{1} \\ &= \frac{${25-value}}{1} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    }
  },
  {
    nomor: 2,
    nama: 'Normal',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x \leq 24  \text{ atau } x \geq 28 \\ \frac{x-24}{1}, & 24 < x < 25  \\ \text{1}, & 25 \leq x \leq 27 \\ \frac{28-x}{1} & 27 < x < 28 \end{cases} $$`,
    proses: (value) => {
      if (value <= 24) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value < 25) {
        const hasilHitung = (value - 24) / 1;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-24}{1} \\ &= \frac{${value-24}}{1} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value <= 27) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value < 28) {
        const hasilHitung = (28 - value) / 1;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{28-${value}}{1} \\ &= \frac{${28-value}}{1} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    },
  },
  {
    nomor: 3,
    nama: 'Panas',
    fungsi: String.raw `$$ f(n) = \begin{cases} \text{0}, & x \leq 27 \\ \frac{x-27}{1}, & 27 < x < 28  \\ 1, & x \geq 28 \end{cases} $$`,
    proses: (value) => {
      if (value <= 27) {
        const prosesHitung = String.raw `$$ f(${value}) = \text{0} $$`;
        const hasilHitung = 0;
        return {
          prosesHitung,
          hasilHitung
        };
      } else if (value < 28) {
        const hasilHitung = (value - 27) / 1;
        const prosesHitung = String.raw `$$ \begin{align*} f(${value}) &= \frac{${value}-27}{1} \\ &= \frac{${value-27}}{1} \\ &= ${hasilHitung} \end{align*}$$`;
        return {
          prosesHitung,
          hasilHitung
        };
      } else {
        const prosesHitung = String.raw `$$ f(${value}) = \text{1} $$`;
        const hasilHitung = 1;
        return {
          prosesHitung,
          hasilHitung
        };
      }
    },
  }
];

const tidakBanjir = (value) => {
  return (0.5 - value) / 0.5;
}

const banjir = (value) => {
  return (value - 0.5) / 0.5;
}

buttonProcess2.addEventListener("click", function process() {
  let value12 = document.getElementById('value1-2').value;
  let value22 = document.getElementById('value2-2').value;

  let hiddenH12 = document.querySelector("#hidden2");
  let hiddenH21 = document.querySelector('#hidden21');
  let hiddenH22 = document.querySelector('#hidden22');
  hiddenH12.style.display = "block";
  hiddenH21.style.display = "block";
  hiddenH22.style.display = "block";
  let tableHasilCH = document.getElementById("hasilCH");
  let i = 3;
  while (tableHasilCH.childElementCount > 0) {
    tableHasilCH.deleteRow(i);
    i--;
  }

  let rowHead = document.createElement("tr");
  let headNo = document.createElement("th");
  let headNama = document.createElement("th");
  let headFungsi = document.createElement("th");
  let headProses = document.createElement("th")
  let headNoValue = document.createTextNode("No.");
  let headNamaValue = document.createTextNode("Variabel");
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
  tableHasilCH.appendChild(rowHead)


  fuzzySetCH.forEach(fset => {
    let rowHasil = document.createElement("tr");
    let cellNo = document.createElement("td");
    let cellNama = document.createElement("td");
    let cellFungsi = document.createElement("td");
    let cellProses = document.createElement("td");
    let cellNoValue = document.createTextNode(fset.nomor);
    let cellNamaValue = document.createTextNode(fset.nama);
    let cellFungsiValue = document.createTextNode(fset.fungsi);
    const {prosesHitung} = fset.proses(value12);
    let cellProsesValue = document.createTextNode(prosesHitung);

    cellNo.appendChild(cellNoValue);
    cellNama.appendChild(cellNamaValue);
    cellFungsi.appendChild(cellFungsiValue);
    cellProses.appendChild(cellProsesValue);

    rowHasil.appendChild(cellNo);
    rowHasil.appendChild(cellNama);
    rowHasil.appendChild(cellFungsi);
    rowHasil.appendChild(cellProses);

    tableHasilCH.appendChild(rowHasil);
  });


  MathJax.typeset();

  let tableHasilSU = document.getElementById("hasilSU");
  let j = 3;
  while (tableHasilSU.childElementCount > 0) {
    tableHasilSU.deleteRow(j);
    j--;
  }

  let rowHead2 = document.createElement("tr");
  let headNo2 = document.createElement("th");
  let headNama2 = document.createElement("th");
  let headFungsi2 = document.createElement("th");
  let headProses2 = document.createElement("th")
  let headNoValue2 = document.createTextNode("No.");
  let headNamaValue2 = document.createTextNode("Variabel");
  let headFungsiValue2 = document.createTextNode("Fungsi Keanggotaan");
  let headProsesValue2 = document.createTextNode("Hasil");
  headNo2.appendChild(headNoValue2);
  headNama2.appendChild(headNamaValue2);
  headFungsi2.appendChild(headFungsiValue2);
  headProses2.appendChild(headProsesValue2);
  rowHead2.appendChild(headNo2);
  rowHead2.appendChild(headNama2);
  rowHead2.appendChild(headFungsi2);
  rowHead2.appendChild(headProses2);
  tableHasilSU.appendChild(rowHead2)



  fuzzySetSU.forEach(fset => {
    let rowHasil = document.createElement("tr");
    let cellNo = document.createElement("td");
    let cellNama = document.createElement("td");
    let cellFungsi = document.createElement("td");
    let cellProses = document.createElement("td");
    let cellNoValue = document.createTextNode(fset.nomor);
    let cellNamaValue = document.createTextNode(fset.nama);
    let cellFungsiValue = document.createTextNode(fset.fungsi);
    const {prosesHitung} = fset.proses(value22);
    let cellProsesValue = document.createTextNode(prosesHitung);

    cellNo.appendChild(cellNoValue);
    cellNama.appendChild(cellNamaValue);
    cellFungsi.appendChild(cellFungsiValue);
    cellProses.appendChild(cellProsesValue);

    rowHasil.appendChild(cellNo);
    rowHasil.appendChild(cellNama);
    rowHasil.appendChild(cellFungsi);
    rowHasil.appendChild(cellProses);

    tableHasilSU.appendChild(rowHasil);
  });
  MathJax.typeset(); 

  // proses hitung tsukamoto
  let {hasilHitung: chRendah} = fuzzySetCH[0].proses(value12);
  let {hasilHitung: chSedang} = fuzzySetCH[1].proses(value12);
  let {hasilHitung: chTinggi} = fuzzySetCH[2].proses(value12);
  let {hasilHitung: suDingin} = fuzzySetSU[0].proses(value22);
  let {hasilHitung: suNormal} = fuzzySetSU[1].proses(value22);
  let {hasilHitung: suPanas} = fuzzySetSU[2].proses(value22);

  const rule1 = Math.min(chTinggi, suDingin);
  const rule2 = Math.min(chTinggi, suNormal);
  const rule3 = Math.min(chTinggi, suPanas);
  const rule4 = Math.min(chSedang, suDingin);
  const rule5 = Math.min(chSedang, suNormal);
  const rule6 = Math.min(chSedang, suPanas);
  const rule7 = Math.min(chRendah, suDingin);
  const rule8 = Math.min(chRendah, suNormal);
  const rule9 = Math.min(chRendah, suPanas);

  const resultRule1 = banjir(rule1);
  const resultRule2 = banjir(rule2);
  const resultRule3 = banjir(rule3);
  const resultRule4 = banjir(rule4);
  const resultRule5 = banjir(rule5);
  const resultRule6 = tidakBanjir(rule6);
  const resultRule7 = tidakBanjir(rule7);
  const resultRule8 = tidakBanjir(rule8);
  const resultRule9 = tidakBanjir(rule9);

  const zAkhir = ((rule1 * resultRule1) + (rule2 * resultRule2) + (rule3 * resultRule3) + (rule4 * resultRule4) + (rule5 * resultRule5) + (rule5 * resultRule5) + (rule6 * resultRule6) + (rule7 * resultRule7) + (rule8 * resultRule8) + (rule9 * resultRule9)) / (resultRule1 + resultRule2 + resultRule3  + resultRule4 + resultRule5 + resultRule6 + resultRule7 + resultRule8 + resultRule9);

  let banjirTidak = 'Banjir';
  if (zAkhir < 0.5) {
    banjirTidak = 'Tidak Banjir'
  }

  const hasilZ = document.getElementById('hasilZ');
  let hitungZ = String.raw `$$ \begin{align*} z &= \frac{${rule1*resultRule1} + ${rule2*resultRule2} + ${rule3*resultRule3} + ${rule4*resultRule4} + ${rule5 * resultRule5} + ${rule6 * resultRule6} + ${rule7 * resultRule7} + ${rule8 * resultRule8} + ${rule9 * resultRule9} }{${resultRule1 + resultRule2 + resultRule3 + resultRule4 + resultRule5 + resultRule6 + resultRule7 + resultRule8 + resultRule9}} \\ &= ${zAkhir} \text{ }(${banjirTidak})\end{align*}$$`;
  let hasilZText = document.createTextNode(hitungZ);
  hasilZ.appendChild(hasilZText);
  MathJax.typeset();

})

let buttonClear2 = document.getElementById("clear2");
buttonClear2.addEventListener('click', function clear() {
  const input1 = document.getElementById("value1-2");
  const input2 = document.getElementById("value2-2");
  input1.value = '';
  input2.value = '';
});