$(document).ready(function () {

    console.log($('h3.hx').text());

    $('p').text('Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Quem num gosta di mim que vai caçá sua turmis!Quem manda na minha terra sou euzis!');

    $('#calc').click(function () {

        $('p').css('border', '3px dashed red');
    });

    $.ajax({
        type: "GET",
        url: "https://www.boredapi.com/api/activity",
        dataType: "json",
        success: function (result, status, xhr) {
            /*
            console.log(status);
            console.log(result);
            console.log(xhr);
            */
            $('p').text(result.activity);
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error 
                    + " " + xhr.status + " " 
                    + xhr.statusText);
        }
    });
});

