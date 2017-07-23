// 100 doors in a row are all initially closed. You make
// 100 passes by the doors. The first time through, you
// visit every door and toggle the door (if the door is
// closed, you open it; if it is open, you close it).
// The second time you only visit every 2nd door (door
// #2, #4, #6, ...). The third time, every 3rd door
// (door #3, #6, #9, ...), etc, until you only visit
// the 100th door.

// Question: What state are the doors in after the last
// pass? Which are open, which are closed?

// [Source http://rosettacode.org]

function tonOfDoors () {
  var doors = (new Array(100)).fill(0)

  for (var j = 1; j <= doors.length; j++) {
  	for (var y = 1; y <= doors.length; y++) {
  		if (j % y === 0) {
  			if (doors[j - 1] === 0) {
  				doors[j - 1] = 1
  			} else { doors[j - 1] = 0 }
  		}
  	}
  }
  return doors
}
