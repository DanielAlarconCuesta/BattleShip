var areThereShips=true;
const ROWS = 10;
const COLUMNS = 10;



function drawEmptyBoard() {
    //Draw board game and asign onclick
	document.write('<table id="boardTable"></table>');
    var boardTable = document.getElementById("boardTable");
    for (let i=1; i<=ROWS; i++) {
        var row = document.createElement('tr');
        row.id = ""+i;
        for (let j=1; j<=COLUMNS; j++) {
            var column = document.createElement('td');
            column.classList.add('agua');
            column.id = ""+j;
            row.appendChild(column);
            column.addEventListener("click", function() {shoot(i-1, j-1);});
        }
        boardTable.appendChild(row);
    }
}

function colocarBarcos() {
	var boardTable = document.getElementById("boardTable");

        var row = boardTable.childNodes[3-1];

		//Barco 333
			var column = row.childNodes[3-1];
			column.classList.remove('agua');
			column.classList.add('barco-horizontal');

			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-horizontal');

			var column = row.childNodes[5-1];
			column.classList.remove('agua');
			column.classList.add('barco-horizontal');

		//barco 4444
			var row = boardTable.childNodes[5-1];
			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[6-1];
			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[7-1];
			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[8-1];
			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[9-1];
			var column = row.childNodes[4-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

		//barco 55555
			var row = boardTable.childNodes[5-1];
			var column = row.childNodes[10-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[6-1];
			var column = row.childNodes[10-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[7-1];
			var column = row.childNodes[10-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[8-1];
			var column = row.childNodes[10-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');

			var row = boardTable.childNodes[9-1];
			var column = row.childNodes[10-1];
			column.classList.remove('agua');
			column.classList.add('barco-vertical');
}

function shoot(auxRow, auxColumn) {
	//if (areThereShips==true) {
		var boardTable = document.getElementById("boardTable");
		var row = boardTable.childNodes[auxRow];
		var column = row.childNodes[auxColumn];

		if (areThereShips==true) {
			if (column.classList.contains('barco-vertical')) {
				column.classList.remove('barco-vertical');
				column.classList.add('barco-hundido');
				var output="";
				checkColumns(auxRow, auxColumn);

			} else if (column.classList.contains('barco-horizontal')) {
				column.classList.remove('barco-horizontal');
				column.classList.add('barco-hundido');
				var output="";
				checkRows(auxRow, auxColumn);

			} else if (column.classList.contains('agua')) {
				alert("Agua");
			}
		} else alert("You won!");
}

function checkRows(auxRow, auxColumn) {
	var boardTable = document.getElementById("boardTable");
	var counter=0;

	var row = boardTable.childNodes[auxRow];
	for (var i=0; i<COLUMNS; i++) {
		var column = row.childNodes[i];
		if (column.classList.contains('barco-horizontal')) {
			counter++;
			break;
		}
	}
	if (counter>0) alert("Tocado");
	else {
		alert("Hundido");
		aler("Hola");
		areThereShips();

	}
}

function checkColumns(auxRow, auxColumn) {
	var boardTable = document.getElementById("boardTable");
	var counter=0;

	for (var i=0; i<ROWS; i++) {
		var row = boardTable.childNodes[i];
		var column = row.childNodes[auxColumn];
		if (column.classList.contains('barco-vertical')) {
			counter++;
			break;
		}
	}
	if (counter>0) alert("Tocado");
	else {
		alert("Hundido");
	}
}

function areThereShips() {
}
