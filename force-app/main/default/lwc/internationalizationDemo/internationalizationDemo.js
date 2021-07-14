import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import USER_ID from '@salesforce/user/Id';

export default class InternationalizationDemo extends LightningElement {
    get currentUserId(){
        return USER_ID;
    }

    locale = LOCALE;

    date = new Date(2021, 7, 7);
    formattedDate = new Intl.DateTimeFormat(LOCALE).format(this.date);

    number = 123456.78;
    formattedNumber = new Intl.NumberFormat(LOCALE, {
        style: 'currency',
        currency: CURRENCY,
        currencyDisplay: 'symbol'
    }).format(this.number);

}