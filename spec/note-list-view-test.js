(function(exports){
  function testEmptyHTMLList() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue("creates empty HTML list for no notes", noteListView.createHTML() === "<ul></ul>");
  }

  testEmptyHTMLList();

  function testSingleHTMLList() {
    var noteList = new NoteList();
    noteList.store("Ummmmmyas!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue("creates a single HTML list item", noteListView.createHTML() === "<ul><li><div><a href='#notes/0'>Ummmmmyas!</a></div></li></ul>")
  }

  testSingleHTMLList();

  function testTwoItemHTMLList() {
    var noteList = new NoteList();
    noteList.store("Ummmmmyas!");
    noteList.store("Ummmmmyassssss!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue("creates a two item HTML list item", noteListView.createHTML() === "<ul><li><div><a href='#notes/0'>Ummmmmyas!</a></div></li><li><div><a href='#notes/1'>Ummmmmyassssss!</a></div></li></ul>")
  }

  testTwoItemHTMLList();

  function testLongNoteHTML() {
    var noteList = new NoteList();
    noteList.store("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
    var noteListView = new NoteListView(noteList);
    assert.isTrue("only returns first 20 characters of note into HTML list item", noteListView.createHTML() === "<ul><li><div><a href='#notes/0'>Lorem Ipsum is simpl</a></div></li></ul>")
  }

  testLongNoteHTML();

})(this);
