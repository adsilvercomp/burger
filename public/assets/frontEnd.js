//make an ajax call to the backend using the correct route.


$( ".devour" ).click(function() {
    alert( "This is working" );

    var devouredStatus = {
        devoured = true
    }

    $.ajax("/update/" + id,{
        type: 'PUT',
        data: 'devoured',
      }).then(
          function(){
            alert("it is working");
              console.log("changed devoured to", devouredStatus);
              location.reload();
          }
      );
  });

