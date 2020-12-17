import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import PICTURE_FIELD from '@salesforce/schema/Property__c.Picture__c';

//this is example
export default class PropertySummary extends LightningElement {
    @api recordId;
    propertyName;
    pictureURL;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PICTURE_FIELD] })
    wiredRecord({ error, data }) {
        if (data) {
            this.propertyName = getFieldValue(data, NAME_FIELD);
            this.pictureURL = getFieldValue(data, PICTURE_FIELD);
        } else if (error) {
            // Handle error. Details in error.message.
        }
    }
}