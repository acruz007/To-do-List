$(function() {

    // Add eventlistener to the add button
    $('#addItem').on("click", ()=> {
        // lets get the value of the input element
        var myTodo = $('#myTodo').val()
        // lets clear the input field since we have the value
        $('#myTodo').val("")
        // Only proceed if we have an item
        if ( myTodo !== "" ) {
            // lets create our li element
            todo = $("<li>")
            // lets append the span tag with the checkmark and the value of myTodo
            todo.append("<span class='item'>&#x2713;</span>").append(myTodo)
            // lets add the li to the ul
            $('#todos').prepend(todo)
        }
    })

    // lets handle what happens when you click on an item in the uncompleted list
    $('#todos').on("click", ".item", function() {
        // lets have a reference to its parent
        var $this = $(this).parent('li')
        // Lets remove from the uncompleted list and add the checked class
        $this.remove().addClass("checked")
        // lets swap out the checkmark for an X and then add the class 'remove' and remove the class "item"
        $(this).html("&#10007;").addClass('remove').removeClass('item')
        // and lets place it in the completed section
        $('#completedTodos').append($this)
    })

    // Lets remove from the uncompleted list
    $('#completedTodos').on("click", ".remove", function() { 
        $(this).parent('li').remove()
    })

})