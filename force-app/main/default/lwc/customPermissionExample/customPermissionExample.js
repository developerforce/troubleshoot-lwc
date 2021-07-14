import { LightningElement } from 'lwc';
import hasAdminCustomPermission from '@salesforce/customPermission/isAdmin';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';

export default class CustomPermissionExample extends LightningElement {
    get hasIsAdminCustomPermission(){
        return hasAdminCustomPermission;
    }
    get isSetupEnabled(){
        return hasViewSetup;
    }
}