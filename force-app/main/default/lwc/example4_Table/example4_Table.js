import { LightningElement } from 'lwc';

export default class Example4_Table extends LightningElement {       
  totalRows = 400;
  cellsInRow = 10;
  totalDivs = 50;
  border = "1px solid #000";
  padding ="10px";

  randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for(let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  renderedCallback() {
    var tbl = document.createElement("table");
    tbl.style.border = this.border;
    tbl.style.padding = this.padding;

    for(let r = 0; r < this.totalRows; r++) {
      var row = document.createElement("tr");
      row.style.border = this.border;
      row.style.padding = this.padding;
      // create cells in row
      for(let c = 0; c < this.cellsInRow; c++) {
        var cell = document.createElement("td");
        cell.style.border = this.border;
        cell.style.padding = this.padding;
        var firstDiv = document.createElement("div");
        var lastDiv= firstDiv;
        for(let d = 0; d < this.totalDivs; d++) {
          var newDiv = document.createElement("div");
          lastDiv.appendChild(newDiv);
          lastDiv = newDiv;
        }
        var cellText = document.createTextNode(this.randomString(Math.random() * 10));
        lastDiv.appendChild(cellText);
        cell.appendChild(firstDiv);
        row.appendChild(cell);
      }           
      tbl.appendChild(row); 
    }
    this.template.querySelector('.container').appendChild(tbl); 
  }
}