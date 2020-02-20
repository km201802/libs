function Table(path){
  this.path = path;
  this.id = "table";
  //create table element
  this.tab = document.createElement("table");
  this.tab.id = this.id;
  if(!this.path){
    document.body.appendChild(this.tab);
  }else{
    document.getElementById(this.path).appendChild(this.tab);
  }
  this.table = document.getElementById(this.id);
  //create columns
  this.newColumn = function(list){
    this.col = document.createElement("tr");
    this.table.appendChild(this.col);
    for(var i=0; i<list.length; i++){
      //create rows
      this.row = document.createElement("th");
      this.row.innerHTML = list[i];
      this.col.appendChild(this.row);
    }
  }
  this.border = function(){
    this.nodes = n.childNodes;
    this.table.style.border = "1px solid black";
    for(var i=0; i<this.nodes.length; i++){
      this.nodes[i].style.border = "1px solid black";
    }
  }
}

var table = new Table();
try{
  table.newColumn(["Name", "Value"]);
  table.newColumn(["carro", "12"]);
  table.border();
}catch(e){
  console.log(e.message);
  console.log("error #2");
}

