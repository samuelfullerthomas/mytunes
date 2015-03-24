// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('ended', this.dequeue, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  enqueue: function(){
    if (this.length === 1){
      this.playFirst()
    }
  },
  dequeue: function(){
    this.shift();
    if (this.length !== 0){
      this.playFirst();
    }
  },
});