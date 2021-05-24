import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tierRanges';

  tableArr: any = [];
  //template binding ngModels
  qtyMin : number = 0;
  qtyMax : number = 0;
  isEditMode : boolean = false;
  isDisabled : boolean = false;

  //method which is used to add new item firstly
  createTier(min: number, max: number) {
    this.qtyMin = min;
    this.qtyMax = max;
    var tierObj = {
      unit: min + '-' + max + 'units',
      min: min,
      max: max,
      isEditMode: false
    };
    this.tableArr.push(tierObj);

    var nextRowObj = {
      unit: (max + 1) + '+ units',
      min: (max + 1),
      max: '',
      isEditMode: false
    };
    this.tableArr.push(nextRowObj);
  }

  editMode(index :number) {
    this.tableArr[index].isEditMode = true; 
    this.qtyMin = this.tableArr[index].min;
    this.qtyMax = this.tableArr[index].max;
    this.isDisabled = true;
  }


  modifyTier(rowIndex: number, updatedMin: number, updatedMax: number) {
    this.tableArr[rowIndex].isEditMode = false; 
    var existingMin = this.tableArr && this.tableArr.length > 0 && this.tableArr[rowIndex].min,
      existingMax = this.tableArr && this.tableArr.length > 0 && this.tableArr[rowIndex].max,
      newRow: any = {};
    debugger;
    // current row update with latest input entered by user
    this.tableArr[rowIndex].unit = updatedMin + '-' + updatedMax + 'units';
    this.tableArr[rowIndex].min = updatedMin;
    this.tableArr[rowIndex].max = updatedMax;


    //if max value is more than array's last item's min value, remove all entries and reset array
    if (updatedMax > this.tableArr[this.tableArr.length - 1].min) {
      this.tableArr.length = rowIndex + 1; //Removing all array items from array and keeping only entered one
      newRow.unit = (updatedMax + 1) + '-' + '+ units';
      newRow.min = (updatedMax + 1);
      newRow.max = '';
      this.tableArr.push(newRow);
    }

    //if updated max qty value is less than current Max value

    if (updatedMax < existingMax && this.tableArr.length > rowIndex) {
      // added new row
      newRow.unit = (updatedMax + 1) + '-' + existingMax + 'units';
      newRow.min = updatedMax + 1;
      newRow.max = existingMax;
      this.tableArr.splice(rowIndex + 1, 0, newRow);
    }

    //if updated max qty value is more than current Max value

    else if (updatedMax > existingMax && this.tableArr.length > rowIndex) {
      newRow.unit = (updatedMax + 1) + '-' + this.tableArr[rowIndex + 1].max + 'units';
      newRow.min = updatedMax + 1;
      newRow.max = this.tableArr[rowIndex + 1].max;
      this.tableArr[rowIndex + 1] = newRow;
    }

    //if updated min qty value is less than current Min value
    if (updatedMin < existingMin) {
      newRow.unit = this.tableArr[rowIndex - 1].min + '-' + (updatedMin - 1) + 'units';
      newRow.min = this.tableArr[rowIndex - 1].min;
      newRow.max = updatedMin - 1;
      this.tableArr[rowIndex - 1] = newRow;
    }
    //if updated min qty value is more than current min value
    else if (updatedMin > existingMin) {
      newRow.unit = (this.tableArr[rowIndex - 1].max + 1) + '-' + (updatedMin - 1) + 'units';
      newRow.min = (this.tableArr[rowIndex - 1].max + 1);
      newRow.max = updatedMin - 1;
      this.tableArr.splice(rowIndex, 0, newRow);
    }
    this.isDisabled = false;
  }
}
