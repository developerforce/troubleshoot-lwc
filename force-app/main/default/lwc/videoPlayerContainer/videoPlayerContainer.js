import { LightningElement } from 'lwc';

export default class VideoPlayerContainer extends LightningElement {
    video = 'https://www.w3schools.com/tags/movie.mp4';
    isPlaying = true;

    handlePause(){
        this.template.querySelector('c-video-player').pause();
    }

    handlePlay(){
        this.template.querySelector('c-video-player').play();
    }

    handlePlayerCheck(){
        this.isPlaying = this.template.querySelector('c-video-player').isPlaying();
    }
}