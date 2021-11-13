//icons onclick blue color
var icons = document.querySelectorAll(".shortcut_icons")
for (i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
    var actives = document.querySelectorAll(".shortcut_icons.selected");
    var selected = "selected";
    for(var i = 0; i < actives.length; i++) {
      if(actives[i] !== this)
      actives[i].classList.remove(selected)
    }
    this.classList.toggle(selected);
  });
}
