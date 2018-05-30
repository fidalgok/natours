# Building CSS Grids with floats

set up your grid manually by first creating a row class. Add your width, and margins. Apply clearfix to the rows.

* setup your rows next
  * create a attribute selector to apply base styles to all "col-" classes (things like margins and floats)
  * to calculate row widths you need to calculate the entire width subtracted by the gutter width divided by 2
  * you do these calculations with the calc css method. This lets you mix units to calculate the width of any element.
  * float your columns
  * set margins/gutter on columns
