//make an ajax call to the backend using the correct route.

console.log("hello");

$(".eat").on("click", function (event) {
    alert("This is working");
    var id = $(this).data("id");
    var status = $(this).data("devoured");
    var eatState = {
        devoured: status
    };
    if(status == true){
        $(list1).remove(id);
        $(list2).append(id);
        console.log("bebimbop");
    }


    /////////////////////////////////

    $.ajax("/update/" + id, {
        type: 'PUT',
        data: null
    }).then(function () {
        alert("it is working");
        console.log("changed the status of devoured to", status);
        location.reload();
    });
});




