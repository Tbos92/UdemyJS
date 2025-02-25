function simpleNestedForLoop() {
  for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`);
    for (let j = 1; j <= 3; j++) {
      console.log(`   j is ${j}`);
    }
  }
}

// Nested loops are good for "traversing" across nested arrays

/* i here loops over the seatingChart array such that i = 0 would be
the first subarray, i = 1 would be the 2nd subarray, etc. To loop over
the subarrays then you would need a nested loop. To do so, loop over
seatingChart[i] */

function loopOverSeatingChart() {
  const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"],
  ];

  for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`);

    for (let j = 0; j < row.length; j++) {
      console.log(`   ${row[j]}`);
    }
  }
}

loopOverSeatingChart();
