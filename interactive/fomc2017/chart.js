function logit(x){
  return Math.log(x/(1-x));
}
function logistic(x){
  return 1/(1+Math.exp(x));
}
function arcsinScale(x){
  return Math.asin(2*x-1)/math.pi+.5;
}
function sinScale(x){
  return (Math.sin(math.pi*(x-.5))+1)/2;
}
function minimalChart(height,width) {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      //width = width,
      //aspectRatio = 16/9,
      //height = height,
      aspectRatio = width/height,
      offset = {x: 0, y: 0},
      xlabel = 'x',
      ylabel = 'y';

  var x = d3.scale.linear();
  
  var y = d3.scale.linear();    

  var xAxis = d3.svg.axis();

  var yAxis = d3.svg.axis();
    
  function worker(selection) {
    xAxis.scale(x).orient("bottom");
    yAxis.scale(y).orient("left");

//   x.range([0, width]);
//   y.range([height, 0])    

    selection.each(function(d, i) {
      var me = d3.select(this)
        .append("g")
          .attr("class", "chart")
          .attr("transform", "translate("+offset.x +", " + offset.y +")");

      me.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0, " + worker.height() + ")")
          .call(xAxis)
        .append("text")
          .attr("y", 20)    
          .attr("dx", ".71em")
          .attr("dy", ".71em")
          .style("text-anchor", "start")
          .text(xlabel);   

      me.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text(ylabel); 
    });
  }

  worker.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return worker;
  };

  worker.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return worker;
  };
  worker.aspect = function(value) {
    if (!arguments.length) return aspectRatio;
    aspectRatio = value;
    height = width/aspectRatio;
    return worker;
  };
  worker.margin = function(value) {
    if (!arguments.length) return margin;
    margin = value;
    width = width - margin.left - margin.right;
    height = width/aspectRatio - margin.top - margin.bottom;      
    return worker;
  };
  worker.x = function(value) {
    if (!arguments.length) return x;
    x = value;
    return worker;
  };
  worker.y = function(value) {
    if (!arguments.length) return y;
    y = value;
    return worker;
  };
  worker.xAxis = function(value) {
    if (!arguments.length) return xAxis;
    xAxis = value;
    return worker;
  };
  worker.yAxis = function(value) {
    if (!arguments.length) return yAxis;
    yAxis = value;
    return worker;
  };
  worker.offset = function(value) {
    if (!arguments.length) return offset;
    offset = value;
    return worker;
  };
  worker.xlabel = function(value) {
    if (!arguments.length) return xlabel;
    xlabel = value;
    return worker;
  };
  worker.ylabel = function(value) {
    if (!arguments.length) return ylabel;
    ylabel = value;
    return worker;
  };

  return worker;
}
function basicChart() {
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
  	 	width = size.width - margin.left - margin.right,
  	 	aspectRatio = 16/9,
    	height = size.width/aspectRatio - margin.top - margin.bottom,
    	offset = {x: 0, y: 0},
    	xlabel = 'x',
    	ylabel = 'y';

  var x = d3.scale.linear();
  
  var y = d3.scale.linear();    

  var xAxis = d3.svg.axis();

  var yAxis = d3.svg.axis();
    
  function worker(selection) {
    xAxis.scale(x).orient("bottom");
    yAxis.scale(y).orient("left");

  	x.range([0, width]);
  	y.range([height, 0])    

  	selection.each(function(d, i) {
  		var me = d3.select(this)
  			.append("g")
  				.attr("class", "chart")
  				.attr("transform", "translate("+offset.x +", " + offset.y +")");

  		me.append("g")
    			.attr("class", "x axis")
    			.attr("transform", "translate(0, " + height + ")")
    			.call(xAxis)
 				.append("text")
    			.attr("y", 20)    
    			.attr("dx", ".71em")
    			.attr("dy", ".71em")
    			.style("text-anchor", "start")
          .attr('class','label')
    			.text(xlabel);   

    	me.append("g")
    			.attr("class", "y axis")
    			.call(yAxis)
  			.append("text")
    			.attr("transform", "rotate(-90)")
 			   .attr("y", 6)
    			.attr("dy", ".71em")
    			.style("text-anchor", "end")
          .attr('class','label')
    			.text(ylabel); 
    });
  }

  worker.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return worker;
  };

  worker.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return worker;
  };
  worker.aspect = function(value) {
    if (!arguments.length) return aspectRatio;
    aspectRatio = value;
    height = Math.min(size.width,width/aspectRatio);

    return worker;
  };
  worker.margin = function(value) {
    if (!arguments.length) return margin;
    margin = value;
    width = size.width - margin.left - margin.right;
    height = size.width/aspectRatio - margin.top - margin.bottom;      
    return worker;
  };
  worker.x = function(value) {
    if (!arguments.length) return x;
    x = value;
    return worker;
  };
  worker.y = function(value) {
    if (!arguments.length) return y;
    y = value;
    return worker;
  };
  worker.xAxis = function(value) {
    if (!arguments.length) return xAxis;
    xAxis = value;
    return worker;
  };
  worker.yAxis = function(value) {
    if (!arguments.length) return yAxis;
    yAxis = value;
    return worker;
  };
  worker.offset = function(value) {
    if (!arguments.length) return offset;
    offset = value;
    return worker;
  };
  worker.xlabel = function(value) {
    if (!arguments.length) return xlabel;
    xlabel = value;
    return worker;
  };
	worker.ylabel = function(value) {
    if (!arguments.length) return ylabel;
    ylabel = value;
    return worker;
  };

  return worker;
}

function axisChart(chart, axis){
	if(axis == undefined)
		axis = "x";

var width, height,
	x, y,
	offset = chart.offset(),
	shrink =.1;

	if(axis=="x"){
		width = chart.width();
		height = chart.height()*shrink;
		x = chart.x();
		y = d3.scale.linear()
    .range([height, 0]);    
	}
	if(axis=="y"){
		height = chart.height();
		width = chart.width()*shrink;
		y = chart.y();
		x = d3.scale.linear()
    .range([0, width]);
  
	}

	function worker(selection) {		
		selection.each(function(d, i) {
  		var me = d3.select(this);  		
  		me.append('g')
  				.attr("class","axischart")
  				.attr("transform", "translate("+offset.x +", " + (chart.height()-offset.y-height) + ")")
    });
  }

	worker.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return worker;
  };

  worker.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return worker;
  };
  worker.x = function(value) {
    if (!arguments.length) return x;
    x = value;
    return worker;
  };
  worker.y = function(value) {
    if (!arguments.length) return y;
    y = value;
    return worker;
  };
	worker.offset = function(value) {
    if (!arguments.length) return offset;
    offset = value;
    return worker;
  };
  return worker;
}

function axisMap(mapFunc,domainpt){
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
  	 	width = size.width - margin.left - margin.right,
  	 	aspectRatio = 160/9,
    	height = size.width/aspectRatio - margin.top - margin.bottom,
    	offset = {x: 0, y: 0};

  var x1 = d3.scale.linear(),
  		x2 = d3.scale.linear();
  
  var y = d3.scale.linear();    

  var xAxis1, xAxis2;

  var mapFunc = mapFunc,
  	dpt = domainpt;

  function worker(selection) {
		xAxis1 = d3.svg.axis()
    	.scale(x1)
    	.orient("bottom");

  	xAxis2 = d3.svg.axis()
    	.scale(x2)
    	.orient("bottom");
  	
		var xd = x1.domain().slice(0);
		xd.push(dpt);
		xd = xd.map(mapFunc);
		//console.log(xd)
		//console.log([d3.min(xd),d3.max(xd)]);

  	x1.range([0, width]);
  	x2.range([0, width])
  		.domain([d3.min(xd),d3.max(xd)]);
  	y.range([height, 0])    

  	selection.each(function(d, i) {
  		var me = d3.select(this)
 				.append("g")
  				.attr("class", "axismap")
  				.attr("transform", "translate("+offset.x +", " + offset.y +")");

  		me.append("g")
    			.attr("class", "x axis")    			
    			.call(xAxis1)
    		.append("g")
    			.attr("class", "x axis")
    			.attr("transform", "translate(0, " + height + ")")
    			.call(xAxis2); 

      var gridline = d3.svg.line()
        .x(function(d) { return sinScale(d.y)*x1(d.x) + (1-sinScale(d.y))*x2(mapFunc(d.x));})
        .y(function(d) { return y(d.y);})
        .interpolate("basis");

      var ticks = x1.ticks();
      var dx = (ticks[1]-ticks[0])/2;
      var tl = ticks.length+0   ;
      for (var i=0; i<tl-1; i++){
        ticks.push(ticks[i] + dx);
      }
      var data,steps=4;

      ticks.forEach(function(x0){
        data =[];
        for(var i=0; i<steps;i++)
          data.push({x:x0,y:i/(steps-1)});
        //data = [{x:x0,y:0}, {x:x0,y:1}];
        me.append("path")
          .attr("d",gridline(data))
          .attr("stroke","steelblue")
          .attr("stroke-width",.5)
          .attr("fill","none  ");             
      });
      //console.log(ticks);
    });
  }

  worker.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return worker;
  };

  worker.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return worker;
  };
  worker.aspect = function(value) {
    if (!arguments.length) return aspectRatio;
    aspectRatio = value;
    return worker;
  };
  worker.margin = function(value) {
    if (!arguments.length) return margin;
    margin = value;
    return worker;
  };
  worker.x1 = function(value) {
    if (!arguments.length) return x1;
    x1 = value;
    return worker;
  };
  worker.x2 = function(value) {
    if (!arguments.length) return x2;
    x2 = value;
    return worker;
  };
  worker.y = function(value) {
    if (!arguments.length) return y;
    y = value;
    return worker;
  };
  worker.xAxis1 = function(value) {
    if (!arguments.length) return xAxis1;
    xAxis1 = value;
    return worker;
  };
  worker.xAxis2 = function(value) {
    if (!arguments.length) return xAxis2;
    xAxis2 = value;
    return worker;
  };
  worker.offset = function(value) {
    if (!arguments.length) return offset;
    offset = value;
    return worker;
  };
  worker.mapFunc = function(value,domainpt) {  	
    if (!arguments.length) return mapFunc;   
    mapFunc = value;
    dpt = domainpt;
    return worker;
  };
  
  return worker;
}

function layoutManager(selection, rows, columns){
	var itemCount = 0;
	var curRow=0,
		curCol = 0;
	var curpos={x:0, y:0};
	var spacing={x:0, y:0};
	var rows=rows,
		columns=columns;
	var selection = selection;
	function worker(){

	}
	worker.add = function(obj){
		var w = obj.width(),
			h = obj.height();
		obj.offset({x:+curpos.x,y:+curpos.y});
		obj(selection);
		itemCount += 1;
		curCol += 1;
		curpos.x += w+spacing.x;
		if(curCol=columns){
			curCol=0;
			curRow += 1;
			curpos.y += h+spacing.y;
			curpos.x = 0;
		}
	}

	worker.count = function(value) {
		if (!arguments.length) return itemCount;
    itemCount = value;
    return worker;
  };
  worker.curRow = function(value) {
		if (!arguments.length) return curRow;
    curRow = value;
    return worker;
  };
  worker.curCol = function(value) {
		if (!arguments.length) return curCol;
    curCol = value;
    return worker;
  };
  worker.curpos = function(value) {
		if (!arguments.length) return curpos;
    curpos = value;
    return worker;
  };
  worker.spacing = function(value) {
		if (!arguments.length) return spacing;
    spacing = value;
    return worker;
  };
  worker.rows = function(value) {
		if (!arguments.length) return rows;
    rows = value;
    return worker;
  };
  worker.columns = function(value) {
		if (!arguments.length) return columns;
    columns = value;
    return worker;
  };
  return worker;
}

function binScale(n){
  var range = [0,1],
    n = n
    dx = 1;

  function worker(x){
    var r = range[1]-range[0];
    dx = r / (n-1);    
    return Math.floor((x-range[0])/dx);
  }
  worker.center = function(x,amt){    
    if (amt == undefined)
      amt = 1;
    var r = range[1]-range[0];
    dx = r / (n-1);
    var i = Math.floor((x-range[0])/dx);
    var newx = (i+.5)*dx + range[0];
    return amt*newx + (1-amt)*x;
  }
  worker.dx = function(){
    var r = range[1]-range[0];
    var dx = r / (n-1);    
    return dx;
  }
  worker.range = function(value){
    if(!arguments.length) return range;
    range = value;
    return worker;
  }
  worker.bins = function(value){
   if(!arguments.length) return n;
    n = value;
    return worker; 
  }
  return worker;
}
function dotHistLayout(){

  var bins = {},
    b = binScale(20);
  function worker(){

  }
  worker.range = function(value){
    if(!arguments.length) return b.range();
    b.range(value);
    return worker; 
  }  
  worker.bins = function(value){
    if(!arguments.length) return b.bins();
    b.bins(value);
    return worker; 
  }
  worker.x = function(x){
    return b(x);
  }
  worker.add = function(x){
    var i = b(x);
    if (bins[i] == undefined)
      bins[i] = 0;
    bins[i] = bins[i] + 1;
    return bins[i];
  }
  worker.y = function(x){
    return bins[b(x)];
  }
  worker.data = function(values){
    bins = {};
    return values.map(function(z){
      return {x:b.center(z,.4), y:worker.add(z)};
    });
  }
  worker.bardata = function(values){
    if (!(values == undefined))
      data(values);
    var data=[];    
    
    for(b0 in bins){
      data.push({x:b.dx()*b0+b.range()[0],y:bins[b0]});
    }
    data.dx = b.dx();
    return data;    
  }
  return worker;
}

function datacat(d1,d2){
  for(var i=0;i<d1.length; i++){
    for(k in d2[i]){
      if(k in d1[i])
        k2 = k+"0";
      else
        k2 = k;
      d1[i][k2] = d2[i][k];
    }
  }
  return d1;
}