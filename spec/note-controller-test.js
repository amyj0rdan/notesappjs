(function(exports) {

  function testCanBeInstantiated() {
    var noteController = new NoteController();

    assert.isTrue("NoteController can be instantiated", noteController instanceof NoteController)
  }

  function testTakesANoteListArgument(){
    var noteList = "";
    var noteController = new NoteController(noteList);

    assert.isTrue("NoteController constructor accepts an argument", noteController.noteList === "")
    assert.isTrue("NoteController constructor accepts an argument", noteController.noteList === noteList)

  }

  function testInnerHTMLOfElementChanges() {
    var noteList = new NoteList();
    noteList.store("Fave drink: prosecco");
    var noteController = new NoteController(noteList);

    var elementDouble = function() {
      this.innerHTML = ""
    }

    noteController.updateDOM(elementDouble);

    assert.isTrue("NoteController changes the inner HTML of an element", elementDouble.innerHTML === "<ul><li><div><a href='#notes/0'>Fave drink: prosecco</a></div></li></ul>")
  }

  testCanBeInstantiated();
  testTakesANoteListArgument();
  testInnerHTMLOfElementChanges();

})(this);
