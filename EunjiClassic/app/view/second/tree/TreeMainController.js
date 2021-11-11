Ext.define('EunjiClassic.view.second.tree.TreeMainController',{
  extend:'Ext.app.ViewController',
  alias:'controller.treemain',
  

  dragDropEvent: function(data,before,after){
    var vm = this.getViewModel();
    var nodeList = [];
    var leftstore = vm.get('leftstore');
    var rightstore = vm.get('rightstore');
    //var ids = storeRecords.map(row => row.id); // id만 추출

    Ext.each(data.records, function(record){
        var json        = new Object;
        json.id         = record.get("id");
        json.parentId   = record.get("parentId");
        
        nodeList.push(json);
    });
    console.log(after);
    Ext.Ajax.request({
        url:"https://localhost:5001/projectTreeList/moveUpdateTreeNode",
        method: 'POST',
        jsonData: {
            nodeList : Ext.encode(nodeList),
            changeMode : after.mode
        },
        success: function(oper, request){
            leftstore.reload();
            rightstore.reload();                
        },
        failure: function(result, request){
            console.log("실패");
        }
    });

    if(before.mode == after.mode){
        if(before == "left"){
            leftstore.sync();
            rightstore.reload();  
        } else{
            rightstore.sync();
            leftstore.reload();
        }
    }else{
        if(after.mode == "left"){
            leftstore.sync();
            rightstore.reload();
        }else{
            rightstore.sync();
            leftstore.reload();
        }
    }
/*
    var parentChildren = data.records[0].parentNode.childNodes;
    var dropFirstRecord = data.records[0].id;
    var parentChildrenIds = parentChildren.map(row => row.id);

    var firstRecordIndex = parentChildrenIds.indexOf(dropFirstRecord);
    var startIndex = parentChildren[firstRecordIndex-1].data.index;
    */

},



  dropDepthCheck: function(data,dropHandlers){ // depth가 다를 경우 이동 불가 처리 코드
      var _records = data.records;
      var flag = false;

      if(data.records[0].data.id != "root"){//for문 대신 select를 사용하여 해결할 수 있음.
          for (var i = 0; i < _records.length - 1; i++) {
              for (var j = i + 1; j < _records.length; j++) {
                  if (_records[i].data.depth != _records[j].data.depth) {
                      flag = true;
                  }
              }
          }
      }

      if (flag) 
          dropHandlers.cancelDrop();
  },

  setExpanded: function(id,expanded){
      var json = new Object;
      json.id = id;
      json.expanded = expanded;
      Ext.Ajax.request({
          url: "https://localhost:5001/projectTreeList/setExpanded",
          method: "POST",
          jsonData: Ext.encode(json),
          success: function(result,request){},
          failure: function(result,request){},
      });
  }
});