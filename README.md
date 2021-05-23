# TierRangeFrontEndChallenge
FrontEnd Challenge Tier Range

High level Algo : 

. Check If any row exist ( check object inside array if empty or not) by checking array length.

2. If no row exists , then 1st row would be created with min/max qty along with unique name ( by using qty + units) & one more 2nd row would be created which will hold min value ( min + max of row 1) & max val would be empty.

3. Check row index for the updated row, if it is first row (and max val is less then min value of last row of array) & value less then existing max value of updated row, then create new row with minimum units having max value + 1 of updated row & max value would be some as updated row's max value.

4. If updated row max value is greater than existing value, then just update min value of next row ( max value + 1) & keep max value as it is.

5. ( check if it is first row or not) If updated row min value is less then max value of above row , then modify the above row max value by updated row min value - 1.

6. ( check if it is first row or not) If updated row min value is greater then max value of above row , then add row above updated row which will have min value = max value + 1 of above row & max value = min value -1 of updated row.

7. Check if updated row max val is greater then min value of last row of array, delete all the row below updated row and add new row with min value of ( max+1 of updated row ).
