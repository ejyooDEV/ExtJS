Ext.define('EunjiClassic.view.second.ProjectContentController',{
  extend:'Ext.app.ViewController',
  alias: 'controller.project-content',

  onButtonChange:function(btn){
    var vm = this.getViewModel();
    var getThisViewStatus = vm.get('segmentedButtonStatus');
    var btnValue = btn.getValue();
    var thisView = this.getView();
    var subView = this.getView().down(getThisViewStatus);

    if(subView){
        thisView.remove(subView);
        thisView.add({ xtype: btnValue, region: 'center'});
        vm.set('segmentedButtonStatus',btnValue);
    }else{
        return;
    }

    Ext.getApplication().redirectTo(btnValue);
  }
});