import { LightningElement } from 'lwc';
import BOTANICAL_LOGO from '@salesforce/contentAssetUrl/botanicalsLogo';
import SVG_EXAMPLE from '@salesforce/resourceUrl/svgDemoFile';

export default class AssetFileExample extends LightningElement {
    botanicalsLogoUrl = BOTANICAL_LOGO;
    svgLogo = `${SVG_EXAMPLE}#svgExample`;
}