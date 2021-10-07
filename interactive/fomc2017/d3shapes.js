function pathTween(d,pathfunc) {
  if (pathfunc == undefined){
    pathfunc = line;
  }

  var interpolate = d3.scale.quantile()
            .domain([0,1])
            .range(d3.range(1, d.length + 1));
  return function(t) {
      return pathfunc(d.slice(0, interpolate(t)));
  };
}
function pathA(){
  var data,pathfunc;
  function worker(selection){
    selection.call(worker.show);
  };
  worker.left = function(selection){
    selection.attr("d", worker.path(data[0]))
  }
  worker.show = function(selection){  
    //console.log(data);
    //console.log(worker.path(data));
    selection.attr("d", worker.path(data))    
  };
  worker.wipeRight = function(transition){
    transition.attrTween('d', function(d,i,a){
      return pathTween(d, pathfunc);
    });    
  }

  worker.path = function(data){
    return pathfunc(data);
  }

  worker.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    return worker;
  };
  worker.pathfunc = function(value) {
    if (!arguments.length) return pathfunc;
    pathfunc = value;
    return worker;
  };
  return worker;
}

function lineA(){
  var x1, x2, y1, y2;
  var strokewidth;

  function worker(selection){
    selection.call(worker.show);
  };
  worker.show = function(selection){  
    selection.attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .attr("stroke-width",strokewidth)    
  };
  worker.first = function(selection){  
    selection.attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x1)
      .attr("y2", y1)     
      .attr("stroke-width",strokewidth)    
  };
  worker.second = function(selection){  
    selection.attr("x1", x2)
      .attr("y1", y2)
      .attr("x2", x2)
      .attr("y2", y2)     
      .attr("stroke-width",strokewidth)    
  };
  worker.thin = function(selection){  
    selection.attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)     
      .attr("stroke-width",0)    
  };
    
  worker.x1 = function(value) {
    if (!arguments.length) return x1;
    x1 = value;
    return worker;
  };
  worker.y1 = function(value) {
    if (!arguments.length) return y1;
    y1 = value;
    return worker;
  };
  worker.x2 = function(value) {
    if (!arguments.length) return x2;
    x2 = value;
    return worker;
  };
  worker.y2 = function(value) {
    if (!arguments.length) return y2;
    y2 = value;
    return worker;
  };
  worker.strokewidth = function(value) {
    if (!arguments.length) return strokewidth;
    strokewidth = value;
    return worker;
  };
  return worker;
}


function circleA(){
	var r, cx, cy;

  var tempx, tempy,tempr;

	function worker(selection){
		selection.call(worker.show);
  };
	worker.center = function(selection){
		selection.attr("cx", cx)
      .attr("cy", cy)      
      .attr("r", 0);      
  }	;
  worker.show = function(selection){  
  	selection.attr("cx", cx)
      .attr("cy", cy)
      .attr("r", r);      
  };
  worker.pos = function(selection){
    if(tempx != undefined)
      selection.attr("cx",tempx);    
    if(tempy != undefined)
      selection.attr("cy",tempy);
    if(tempr != undefined)
      selection.attr("r",tempr);
  } 
  
  worker.r = function(value) {
    if (!arguments.length) return r;
    r = value;
    return worker;
  };  
  worker.cx = function(value) {
    if (!arguments.length) return cx;
    cx = value;
    return worker;
  };
  worker.cy = function(value) {
    if (!arguments.length) return cy;
    cy = value;
    return worker;
  };
  worker.tempx = function(value) {    
    tempx = value;
    return worker;
  };
worker.tempy = function(value) {    
    tempy = value;
    return worker;
  };
  worker.tempr = function(value) {    
    tempr = value;
    return worker;
  };
	return worker;
}

function rectA(){
	var height,
		width,
		x, y;
		
	function worker(selection){
		selection.call(worker.show);
  };
	worker.bottom = function(selection){
		selection.attr("x", x)
      .attr("y",height)      
      .attr("width", width)
      .attr("height", 0);
  }	;
  worker.middle = function(selection){
  	selection.attr("x", x)
      .attr("y",function(d){return .5*d3.functor(height)(d);})
      .attr("width", width)
      .attr("height", 0);
  };
	worker.top = function(selection){
		selection.attr("x", x)
      .attr("y",0)
      .attr("width", width)
      .attr("height", 0);
  };
  worker.left = function(selection){
		selection.attr("x", x)
      .attr("y", y)
      .attr("width", 0)     
      .attr("height", height);
  }	;
  worker.center = function(selection){
  	selection.attr("x", width/2)
      .attr("y", y)
      .attr("width", 0) 
      .attr("height", height);
  };
	worker.right = function(selection){
		selection.attr("x", width)
      .attr("y",0)
      .attr("width", 0)            
      .attr("height", height);
  };
  worker.show = function(selection){  
  	selection.attr("x", 1)
      .attr("y", y)
      .attr("width", width)
      .attr("height", height);	
  };
  
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
	return worker;
}