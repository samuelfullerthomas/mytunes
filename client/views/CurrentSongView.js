// CurrentSongView.js - Defines a backbone view class for the music player.
var CurrentSongView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div id="currentSong"></div>',
  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>'),

  initialize: function() {
    if (this.model.artist !== undefined){
      this.render();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },


  render: function(){
    console.log()
    return this.$el.html(this.template(this.model.attributes));
  }

});
