//parallax effect script
$('.parallax-window').parallax({imageSrc: 'img/bg.jpg'});

//alert window
p = $('.popup__overlay');
$('#popup__toggle').click(function() {
    p.css('display', 'block')
});
p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css('display', 'none')
    }
});
$('.popup__close').click(function() {
    p.css('display', 'none')
});

//validation form with Ajax
var buttonClick = $('#validationClick');
buttonClick.click(function() {
    var firstName = $('#popup-firstName').val();
    var lastName = $('#popup-lastName').val();
    var patronymic = $('#popup-patronymic').val();
    var phone = $('#popup-phone').val();
    var email = $('#popup-email').val();
    var reasonDescription = $('#popup-reasonDescription').val();
    var futureDescription = $('#popup-futureDescription').val();

    var data1 = {
        "firstName": firstName,
        "lastName": lastName,
        "patronymic": patronymic,
        "phone": phone,
        "email": email,
        "reasonDescription": reasonDescription,
        "futureDescription": futureDescription
    };

    data1 = $(this).serialize() + "&" + $.param(data1);

    $.post('response.php', data1)
        .done(function(data){
          //  data = jQuery.parseJSON(data);
            alert(data);
            if(data.validate)
            {
                $('.form-form').text(data.message);
            }
            else
            {
                $('.erros').text(data.message);
            }
        })
        .fail(function(data){
            alert("Failed: " + JSON.stringify(data));
        });
});
