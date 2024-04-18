
function calculateStepCount2d(inputMatrix, outputMatrix) {

    let noSwaps=0;
    for (i=0;i<inputMatrix.length;i++){
    for (j=0;j<inputMatrix[i].length;j++){
    if (inputMatrix[i][j]!=outputMatrix[i][j]){
    for (k=0;k<inputMatrix.length;k++){
    for (l=0;l<inputMatrix[k].length;l++){
    if (inputMatrix[k][l]==outputMatrix[i][j]){
        inputMatrix[k][l]=inputMatrix[i][j];
        inputMatrix[i][j]=outputMatrix[i][j];
           noSwaps+=1;
    }
    }
    }
    }
    }}
   // console.log(noSwaps)
    return noSwaps;
    }
    
    function calculateStepCount(inputMatrix, outputMatrix) {
    const notinOrderIn=[];
    const notinOrderOut=[];
    let noSwaps=0;
    for (i=0;i<inputMatrix.length;i++){
    for (j=0;j<inputMatrix[i].length;j++){
    
    if (inputMatrix[i][j]!=outputMatrix[i][j]){
    
    notinOrderIn.push(inputMatrix[i][j]);
    notinOrderOut.push(outputMatrix[i][j]);
    }
    }
    }
    const lenNoSwap=notinOrderIn.length;
    for (i=0;i<lenNoSwap;i++){
      for (j=i+1;j<lenNoSwap;j++){
        if (notinOrderOut[i]==notinOrderIn[j]){
    
          notinOrderIn[j]=notinOrderIn[i];
          
          notinOrderIn[i]=notinOrderOut[i];
          
          noSwaps+=1;
    
        }
      }
    }
   // console.log(noSwaps)
    return noSwaps;
    }
    console.time('flat1')
    for (p=0;p<6;p++){
        console.log('iiiiiii',p);
    calculateStepCount([[8, 2, 3], [5, 4, 6], [1, 9, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);}
    console.timeEnd('flat1')
    console.time('2d1')
    for (p=0;p<6;p++){
        console.log('iiiii',p);
    calculateStepCount2d([[8, 2, 3], [5, 4, 6], [1, 9, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    }
    console.timeEnd('2d1')
    console.time('flat')
    calculateStepCount([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    calculateStepCount([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    calculateStepCount([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.timeEnd('flat')
    console.time('2d')
    console.log(calculateStepCount2d([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.log(calculateStepCount2d([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.log(calculateStepCount2d([[8, 2, 9], [5, 4, 6], [1, 3, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.timeEnd('2d')
    console.time('flat')
    calculateStepCount([[1, 2, 3], [5, 4, 6], [9, 8, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.timeEnd('flat')
    console.time('2d')
    console.log(calculateStepCount2d([[1, 2, 3], [5, 4, 6], [9, 8, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.timeEnd('2d')
    console.time('flat')
    calculateStepCount([[1, 2, 3], [5, 4, 6], [ 8, 7,9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.timeEnd('flat')
    console.time('2d')
    console.log(calculateStepCount2d([[1, 2, 3], [5, 4, 6], [ 8, 7,9]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.timeEnd('2d')
    console.time('flat1dup')
    calculateStepCount([[8, 2, 3], [5, 4, 6], [1, 9, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.timeEnd('flat1dup')
    console.time('2d1dup')
    console.log(calculateStepCount2d([[8, 2, 3], [5, 4, 6], [1, 9, 7]], [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
    console.timeEnd('2d1dup')