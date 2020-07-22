 /*
# Spiral fill
# Calculate the size needed for a square matrix to hold n integers and
# add them to the matrix counter clockwise.

# You will only receive integers > 0 and < 999
# 
#
# Example 
#  spiralfill(10, [1,2,3,4,5,6,7,8,9,10])
#   
#      1   0    0   10
#      2   0    0   9
#      3   0    0   8    
#      4   5    6   7
# Example 
#  spiralfill(4, [1,2,3,4])
# 
#      1 4 
#      2 3 
#
# Es matriz cuadrada si el numero de filas es igual al numero de comlumnas *
*/

function spiralfill(n, array) {
    
  //check invalid N value
  if(n <= 0 || n > 999) {
      return [];
  }
  
  // init NxN Matrix with 0 values
  var matrix = new Array(n);
  
  for(var k=0; k<matrix.length;k++) {
      matrix[k] = new Array(n);
  }
  
  for(var i=0; i<n;i++) {
      for(var j=0; j<n;j++) {
          matrix[i][j] = 0;
      }
  }
  
  console.log('Matrix Zero Values => ', matrix);
  
  //fill matrix anti-clockwise with array values

  let minRow = 0 // min row
  let maxRow = n-1 // max row
  let minCol = 0 // min col
  let maxCol = n-1 // max col
  let q = 0 // index value
  
  while(q < array.length) {
      //left side iteration
      for(var i=minRow; i<=maxRow;i++) {
        if(q >= array.length) {
          break
        }
        matrix[i][minCol] = array[q];
        q++
      }
      
      //bottom side iteration
      for(i=minCol+1; i<=maxCol;i++) {
        if(q >= array.length) {
          break
        }
        matrix[maxRow][i] = array[q]
        q++
      }

      //right side iteration
      for(i=maxRow-1; i>=minRow;i--) {
        if(q >= array.length) {
          break
        }
        matrix[i][maxCol] = array[q]
        q++
      }

      //top side iteration
      for(i=maxCol-1; i>=minCol+1;i--) {
        if(q >= array.length) {
          break
        }
        matrix[minRow][i] = array[q]
        q++
      }

      //update min/max indexes
      minRow++
      minCol++
      maxRow--
      maxCol--
  }
  
  return matrix;
}

console.log(spiralfill(4,[1,2,3,4,5,6,7,8,9,10]))
