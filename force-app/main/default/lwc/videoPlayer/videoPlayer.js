import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api videoUrl;
    
    get videoType() {
        return 'video/' + this.videoUrl.split('.').pop();
    }

    @api pause(){
        const player = this.template.querySelector('video');
        if(player){
            player.pause();
        }
    }

    @api play(){
        const player = this.template.querySelector('video');
        if(player){
            player.play();
        }
    }

    @api isPlaying(){
        const player = this.template.querySelector('video');
        return player !== null && player.isPlaying === true;
    }
}