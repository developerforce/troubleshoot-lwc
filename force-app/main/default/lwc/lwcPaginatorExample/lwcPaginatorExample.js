import { LightningElement, wire } from 'lwc';
import getData from '@salesforce/apex/lwcPaginatorExample.getData';
import getCount from '@salesforce/apex/lwcPaginatorExample.getCount';

const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name',  },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'CreatedDate', fieldName: 'CreatedDate', type: 'date' },
];
const DEFAULT_RECORDS_DISPLAY = 2;

export default class LwcPaginatorExample extends LightningElement {
    
    data = [];//data to be displayed on the data table
    columns = columns;
    rowOffset = 0;
    totalRecords;
    recordsPerPage = DEFAULT_RECORDS_DISPLAY;
    currentPage = 1;

    connectedCallback(){ 
        getCount({}).then(result => {
            this.totalRecords = result;
            this.handleLoad();
        }).catch(error => {});
    }

    handleLoad(){
        getData({ 
            rowsToFetch : this.recordsPerPage, 
            offset : this.rowOffset
        }).then(result => {
            this.data = result;
        }).catch(error => {
            console.error('error: '+JSON.stringify(error));
        });
    }

    handleFirst(){
        this.currentPage = 1;
        this.rowOffset = 0;
        this.handleLoad();
    }

    handlePrevious(){
        this.rowOffset -= this.recordsPerPage;
        this.handleLoad();
    }
    
    handleNext(){
        this.rowOffset += this.recordsPerPage;
        this.handleLoad();
    }
    
    handleLast(){
        this.currentPage = Math.ceil(this.totalRecords / this.recordsPerPage);
        this.rowOffset = (this.currentPage - 1) * this.recordsPerPage;
        this.handleLoad();
    }
}