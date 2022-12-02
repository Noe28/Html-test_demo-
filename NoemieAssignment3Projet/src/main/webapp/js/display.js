const url = "http://localhost:8081/demoU3/lectures2"; //ou lecture?
$(document).ready(function() {


    // get with ajax example
    $('#lectures2').click(function (e) {
        $('#lectures2_table tr').remove();
        e.preventDefault();
        $.ajax({
            url: url,
            type: 'GET',

            crossOrigin: true,
            success: function(data){
                let value = JSON.stringify(data);
                var trHTML = '';
                $.each(data, function (i, item) {
                    trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>'  + item.email + '</td><td>' + item.address + '</td></tr>';
                });
                $('#lectures2_table').append(trHTML);
                $('#lectures2_table').show();
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

    // fetch example http GET ::

//$('#lectures2').click(function (e) {
//$('#lectures2_table tr').remove();
//       e.preventDefault();
//       fetch(url).
//       then(response => response.json())
//       .then(data => {
//       		 var trHTML = '';
//                $.each(data, function (i, item) {
//                    trHTML += '<tr><td>' + item.id + '</td><td>' + item.subject + '</td><td>' + item.author + '</td><td>' + item.preface + '</td></tr>';
//                });
//                $('#lectures2_table').append(trHTML);
//                $('#lectures2_table').show();
//       })
//});


    //post with fetch example
    $("#addLectureForm").submit(function(event) {
        event.preventDefault();
        request = {
            id : $('#id').val(),
            name : $('#name').val(),
            
            email : $('#email').val(),
            address : $('#address').val(),

        }
        fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(request)})
            .then(handleErrors)
            .then(response => response.json())
            .then(data => {
                var trHTML = '';
                
				trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>'  +  item.email +  '</td><td>' + item.address + '</td></tr>';

                $('#lectures2_table').append(trHTML);

            })
            .catch((error) => {
                window.alert(error);
            });


    });


    function handleErrors(response) {
        if (!response.ok) {
            throw new Error('Something went wrong: ' + response.status);
        }
        return response;
    }

    $('#addLecture').click(function (e) {
        e.preventDefault();
        const form = document.getElementById('addLectureForm');

        if (form.style.display === 'none') {
            /* 👇️ this SHOWS the lectureForm*/
            form.style.display = 'block';
        } else {
            /* 👇️ this HIDES the form*/
            form.style.display = 'none';
        }
    });
});