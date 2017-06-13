import {AfterViewInit, Component} from '@angular/core';
import {genData} from './data';
declare var Handsontable: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  title = 'app works!';


  data: Array<any> = genData(10);


  colHeaders: Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
    'Favorite food', 'Price', 'Is active'];
  columns: Array<any> = [
    {
      data: 'id'
    },
    {
      data: 'name.first',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'name.last',
      readOnly: true
    },
    {
      data: 'address'
    },
    {
      data: 'product.description',
      source: 'product.options',
      optionField: 'description',
      type: 'autocomplete',
      strict: false,
      visibleRows: 4
    },
    {
      data: 'price',
      type: 'numeric',
      format: '$ 0,0.00'
    },
    {
      data: 'isActive',
      type: 'checkbox',
      checkedTemplate: 'Yes',
      uncheckedTemplate: 'No'
    }
  ];
  colWidths: Array<number> = [null, null, null, null, null, null, 30];
  options: any = {
    stretchH: 'all',
    columnSorting: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    // const container = document.getElementById('hottable1');
    // let hot = new Handsontable(container, {
    //   data: this.data,
    //   rowHeaders: true,
    //   options: this.options,
    //   columns: this.columns,
    //   colHeaders: this.colHeaders
    //
    // });


    const myData = Handsontable.helper.createSpreadsheetData(200, 100);
    const container = document.getElementById('hottable1');

    let hot = new Handsontable(container, {
      data: myData,
      rowHeaders: true,
      colHeaders: true,
      fixedColumnsLeft: 2,
      contextMenu: true,
      manualColumnFreeze: true,
    });

  }

  afterChange(e: any) {
    console.log(e);
  }

  afterOnCellMouseDown(e: any) {
    console.log(e);
  }
}
