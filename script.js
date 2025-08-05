

const cvsData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26`;
let cell1 = [];
let cell2 = [];
let cell3 = [];
let rows = [];
let currentCellIndex = 0;
numberCols = 8;
let numCols = 0;
// cvsDatas=[];
let currentRow = [];
let currentCell = '';

for (let i = 0; i < cvsData.length; i++) {

    const char = cvsData[i];
    // console.log(`Current character: ${char}`);
    if (char === ',') {

        currentRow.push(currentCell);
        currentCell = '';

    }
    else if (char === '\n') {

        currentRow.push(currentCell);
        console.log(currentRow);
        // reset row an cell
          currentCell = '';
        currentRow = [];
      

        currentCellIndex = 0;
    } else {
        currentCell += char;
        
        // if (currentCellIndex === 0) {
        //     // cell1 += char;
        //     cell1.push(char);
        // }
        // else if (currentCellIndex === 1) {
        //     // cell2 += char;
        //     cell2.push(char);
        // }
        // else if (currentCellIndex === 2) {
        //     // cell3 += char;
        //     cell3.push(char);
        // }
        // else {
        //     cell4.push(char);
        // }
    }
  
}

// Display the last row
if (currentCell !== '' || currentRow.length > 0)  {
    
     console.log(currentRow);
}


