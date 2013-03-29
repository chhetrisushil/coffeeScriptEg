(function (window, document, $, APP, Base, undefined) {
    $(document).ready(function () {
        // Initialize the APP.
        var controller = new APP.TodoListController({
            view: new APP.TodoListView(),
            model: new APP.TodoListModel({
                remote: false
            })
        });

        controller.update();
    });
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));