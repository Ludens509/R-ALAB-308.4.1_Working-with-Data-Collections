
const cvsData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26`;

// let currentCellIndex = 0;
// numberCols = 4;
// ContainerRows = [];
// let currentRow = [];
// let currentCell = '';
// firstRow = true;

// for (let i = 0; i < cvsData.length; i++) {

//   const char = cvsData[i];
//   // console.log(`Current character: ${char}`);
//   if (char === ',') {

//     currentRow.push(currentCell);
//     //reset the cell after populate the cell in row
//     currentCell = '';

//   }
//   else if (char === '\n') {

//     currentRow.push(currentCell);
//     // console.log(currentRow);

//     if (firstRow) {
//       numCols = currentRow.length;
//       // console.log(`number of ${numCols}`);
//       firstRow = false;
//     }

//     ContainerRows.push([...currentRow]);
//     // console.log(`row ${ContainerRows} :`,currentRow);

//     // reset row & cell
//     currentCell = '';
//     currentRow = [];

//   } else {
//     currentCell += char;

//   }

// }

// // Display the last row
// if (currentCell !== '' || currentRow.length > 0) {

//   // console.log( "table",currentRow);
//   ContainerRows.push([...currentRow]);
//   console.log(ContainerRows);
// }

// ------------------------Part 3--------------------

let currentCellIndex = 0;
let numberCols = 4;
let containerArrays = [];
let currentRow = [];
let currentCell = '';
let firstRow = true;
let cellCounter = 0;
let headers = [];
let newContainerObject = [];



for (let i = 0; i < cvsData.length; i++) {

  const char = cvsData[i];
  // console.log(`Current character: ${char}`);
  if (char === ',') {

    currentRow.push(currentCell);
    currentCell = '';
    cellCounter++;

  }
  else if (char === '\n') {

    currentRow.push(currentCell);
    // console.log(currentRow);

    // ----------------------Part 2--------------------------
    if (firstRow) {
      numCols = currentRow.length;
      // console.log(`number of ${numCols}`);
      firstRow = false;
    }
    // ------------------------Part 3----------------------------
    containerArrays.push([...currentRow]);

    if (containerArrays.length === 1) {
      // console.log("====",containerArrays.length)
      // Store header row in a single array
      headers = currentRow;

    } else {
      // Create object from current row using headers
      let rowObject = {};//object variable

      currentRow.forEach((value, index) => {
        // console.log("current row",currentRow);
        const key = headers[index].toLowerCase();
        rowObject[key] = value;
        // console.log("object",rowObject);
      });
      newContainerObject.push(rowObject);
    }
    // reset row & cell
    currentCell = '';
    currentRow = [];

  } else {
    currentCell += char;

  }


}

// Display the last row
if (currentCell !== '' || currentRow.length > 0) {

  containerArrays.push([...currentRow]);
  console.log("----------------------Part 2--------------------");
  console.log(containerArrays);
  console.log("\n");
  console.log("----------------------Part 3--------------------")
  // MISSING: Create object for last row too!
  if (containerArrays.length > 1) { // If it's not just headers
    let rowObject = {};
    currentRow.forEach((value, index) => {
      const key = headers[index].toLowerCase();
      rowObject[key] = value;
    });
    newContainerObject.push(rowObject);
  }
  console.log(newContainerObject);


  console.log("----------------------Part 4--------------------")
  // Remove the last element from the sorted array.
  newContainerObject = newContainerObject.slice(0, -1);
  console.log("new Array", newContainerObject);

  // Insert the following object at index 1:
   let newObjectInput = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
    let newArray = [...newContainerObject]; // Create copy for demonstration
    newArray.splice(1, 0, newObjectInput); // Insert at index 1, delete 0 items
    console.log("-------After splice(1, 0, newObjectInput)--------");
    console.log(newArray);

    // Add the following object to the end of the array:
     newObjectInput = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
     newArray = [...newContainerObject]; // Create copy for demonstration
    newArray.push(newObjectInput); // push at last row.
    console.log("-------After pushing/concat newObjectInput)--------");
    console.log(newArray);
}