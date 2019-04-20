window.addEventListener('load', function() {
  var noteList = new NoteList();
  noteList.store("Favourite band: Young Fathers")
  noteList.store("Favourite band: Toots and Maytals")
  var app = new NoteController(noteList);
  app.updateDOM(document.getElementById('app'));
  app.makeURLChangeShowSingleNote();
});
