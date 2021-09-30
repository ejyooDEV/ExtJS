Ext.define('EunjiClassic.view.main.MainContentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-content',

    /**
     * MainContent 내 segmentedbutton 버튼이 로드될 시 bindData 변경 및 store 로드
     * @param {} segmentedbutton 
     */
    onButtonAfterrender: function (segmentedbutton) {
        var vm = this.getViewModel();
        var store = vm.getStore('gridstore');
        // title
        var firstButtonText = segmentedbutton.items.items[0].config.text;
        vm.set('projectType', firstButtonText);
        store.load({
            params: {
                status: firstButtonText
            },
            scope: this
        });

        // 스토어 필터링
        //this.getViewModel().getStore('gridstore').filter('status',firstButtonText); // 스토어 자체에서 필터를 적용할 수 있음.
        //store.clearFilter();
    },

    /**
     * MainContent 내 segmentedbutton 버튼 클릭 시 vm title 변경 및 및 store 로드
     * @param {*} segmentedbutton 
     * @param {*} button 버튼 ele
     * @param {*} isPressed 눌린상태 boolean
     * @param {*} eOpts 
     */
    onButtonChange: function (segmentedbutton, button, isPressed, eOpts) { // 버튼 클릭 시 title 변경
        var vm = this.getViewModel();

        var store = vm.getStore('gridstore');
        var buttonText = button.getText();

        vm.set('projectType', buttonText);// title change
        store.load({
            params: {
                status: buttonText
            },
            //callback: function(records, operation, success) { },
            scope: this
        });
    },
});