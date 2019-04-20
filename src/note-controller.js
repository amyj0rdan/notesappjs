(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype = {

    updateDOM: function(element){
        element.innerHTML = this.noteListView.createHTML();
    },

    makeURLChangeShowSingleNote: function() {
      var self = this
      window.addEventListener('hashchange', showNoteForCurrentPage);

      function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
      };

      function getNoteFromUrl() {
        var noteID = location.hash.split("#")[1].split("/")[1];
        return self.noteList.show().filter(function(note) { return note.getId() == noteID } )[0]
      };

      function showNote(note) {
        var singleNoteView = new SingleNoteView(note)
        document
        .getElementById('app')
        .innerHTML = singleNoteView.returnDiv()
      };

    },
  }

  exports.NoteController = NoteController;

})(this);
