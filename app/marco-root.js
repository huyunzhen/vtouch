var RootPanel = new Class({
    Extends: VTouchWidget,

    initialize: function(options){
        VTouchWidget.prototype.initialize.call(this, options);

        this.volumePanel = this.add({ type: TrackPanel });
        this.layout = "vertical";
        //this.clipMatrix = this.add({ type: ClipMatrix});
        //this.layout = "vertical";
        //this.clipMatrix.requestUpdate()
       
        /*this.mutePanel = this.add({ type: MuteButtonPanel});
        this.soloPanel = this.add({ type: SoloButtonPanel});
        this.armPanel = this.add({ type: ArmButtonPanel});
        */
       
        /*this.mutePanel = this.root.add({ 
            type: MuteButton,
            bgColor: "#FF0000",
            frontColor: "#FFFF00",
            labelColor: "#00FF00"
        });
        */        
    }
    
});