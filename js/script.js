var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Attributes of 20'];

/* set up XMLHttpRequest */
var url = "../data/Books.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
var excelData;
var d = []
// oReq.onload = function (e) {
// 	var arraybuffer = oReq.response;

// 	/* convert data to binary string */
// 	var data = new Uint8Array(arraybuffer);
// 	var arr = new Array();
// 	for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
// 	var bstr = arr.join("");

// 	/* Call XLSX */
// 	var workbook = XLSX.read(bstr, { type: "binary" });

// 	/* DO SOMETHING WITH workbook HERE */
// 	var first_sheet_name = workbook.SheetNames[0];
// 	/* Get worksheet */
// 	var worksheet = workbook.Sheets[first_sheet_name];
// 	excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
// 	console.log(excelData)
// 	for (var i = 0; i < 20; i++) {
// 		d[i] = { axis: excelData[i].Col1, value: excelData[i].Col2 }
// 	}
// 	//Options for the Radar chart, other than default
// 	var mycfg = {
// 		w: w,
// 		h: h,
// 		maxValue: 0.6,
// 		levels: 6,
// 		ExtraWidthX: 300
// 	}

// 	//Call function to draw the Radar chart
// 	//Will expect that data is in %'s
// 	RadarChart.draw(".chart", [d], mycfg);
// 	////////////////////////////////////////////
// 	/////////// Initiate legend ////////////////
// 	////////////////////////////////////////////

// 	var svg = d3.selectAll('.bodychart')
// 		.selectAll('svg')
// 		.append('svg')
// 		.attr("width", w + 300)
// 		.attr("height", h)

// 	//Create the title for the legend
// 	var text = svg.append("text")
// 		.attr("class", "title")
// 		.attr('transform', 'translate(90,0)')
// 		.attr("x", w - 70)
// 		.attr("y", 10)
// 		.attr("font-size", "12px")
// 		.attr("fill", "#404040")
// 		.text("What % of Attributes serves in this product");

// 	//Initiate Legend	
// 	var legend = svg.append("g")
// 		.attr("class", "legend")
// 		.attr("height", 100)
// 		.attr("width", 200)
// 		.attr('transform', 'translate(90,20)')
// 		;
// 	//Create colour squares
// 	legend.selectAll('rect')
// 		.data(LegendOptions)
// 		.enter()
// 		.append("rect")
// 		.attr("x", w - 65)
// 		.attr("y", function (d, i) { return i * 20; })
// 		.attr("width", 10)
// 		.attr("height", 10)
// 		.style("fill", function (d, i) { return colorscale(i); })
// 		;
// 	//Create text next to squares
// 	legend.selectAll('text')
// 		.data(LegendOptions)
// 		.enter()
// 		.append("text")
// 		.attr("x", w - 52)
// 		.attr("y", function (d, i) { return i * 20 + 9; })
// 		.attr("font-size", "11px")
// 		.attr("fill", "#737373")
// 		.text(function (d) { return d; })
// 		;
// }

// oReq.send();

function ChangePage(className){
	var clusterTotal = document.getElementsByClassName('Cluster')
	for(var i=0;i<clusterTotal.length;i++){
		clusterTotal[i].style.display="None";
	}
	var cluster=document.getElementsByClassName(className)
	for(var i=0;i<cluster.length;i++){
		cluster[i].style.display="";
	}
}

//Data



