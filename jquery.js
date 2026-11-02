$('#btn-content').onclick(function() {
                $('#main-title').text('This element has been manipulated!');
                $('#my-link').attr('href', 'https://www.w3schools.com').text('Go to W3Schools');
});

//the .onclick() jquery event listens to a click event and executes the specified callback function