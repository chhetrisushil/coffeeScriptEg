(function (window, document, $, APP, Base, undefined) {
    $(document).ready(function () {
        // Dummy Data to work with in the app.
        var dummyData = [
                {task: 'Start working on Models for TODO APP', status: 'Inprogress', priority: 'High', tag: 'Story'},
                {task: 'Start working on Views for TODO APP', status: 'Start', priority: 'High', tag: 'Story'},
                {task: 'Start working on Controller for TODO APP', status: 'Start', priority: 'High', tag: 'Story'}
            ];

        //Create Collection Object
        var todoCollection = new APP.TodoListCollection({
            model: APP.TodoListModel,
            data: dummyData
        });
        console.log(todoCollection);
        // Create View Object to Set the view
        var todoView = new APP.TodoListView();

        // Initialize the APP.
        var controller = new APP.TodoListController({
            view: todoView,
            collection: todoCollection
        });

        controller.update();
    });
})(this, this.document, jQuery, (this.APP || (this.APP = {})), (this.Base || (this.Base = {})));