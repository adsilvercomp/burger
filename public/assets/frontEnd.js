//make an ajax call to the backend using the correct route.

console.log("hello");

$(".eat").on("click", function (event) {
    alert("This is working");
    var id = $(this).data("id");
    var status = $(this).data("devoured");
    var name = $(this).data("burger_name");
    var eatState = {
        devoured: status
    };
    console.log(event);
   


    /////////////////////////////////

    $.ajax("/update/" + id, {
        type: 'PUT',
        data: null
    }).then(function () {
        alert("it is working");
        console.log("changed the status of devoured to", status);
       
        console.log("bebimbop");
        $("#list2").append(id);
        $("#list2").append(name);
        // $("#list2").append(eatState);
        $("#list1").detach(id);
        $("#list1").detach(name);
        location.reload();
        
            
        
    });
});




