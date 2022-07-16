
$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
   $.getJSON("https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json", 
     function (data) {
    var tableData = '';
        var mydata=data.cookies 
             // ITERATING THROUGH OBJECTS
             $.each(mydata, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
                   tableData += '<tr>';
                   tableData += '<td>' + 
                       value.name + '</td>';
                   
                   tableData += '<td>' + 
                       value.price + '</td>';
                   
                   tableData += '<td>' + 
                        value.category + '</td>'; 
                   
                   tableData += '</tr>';
        });
             //INSERTING ROWS INTO TABLE 
             $('#tableBody').append(tableData);

             $('#table').DataTable({
                paging: false,
                searching: false,  
                bInfo: false, 
            });

    });
}); 