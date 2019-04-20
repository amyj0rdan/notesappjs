
(function(exports) {

  function Note(text, id){
    this.text = text;
    this.id = id
  };

  Note.prototype = {
    noteContent: function () {
      return this.text
    },

    getId: function() {
      return this.id;
    }
  }

  exports.Note= Note;
// exports the note so that it's available to the other files.

})(this);
