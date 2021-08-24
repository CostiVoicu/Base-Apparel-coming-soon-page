

button.addEventListener('click', event => {
    var button = document.getElementById('button');
    var border_form = document.getElementById('form');
    var email_address = document.getElementById('form').value.indexOf('@');
    var error_text = document.getElementById('error_text');
    var error_sign = document.getElementById('error');
    if (email_address != -1){
        error_sign.style.display = 'none';
        error_text.style.display = 'none';
        border_form.style.borderColor = '';
    }
    else{
        error_sign.style.display = 'block';
        error_text.style.display = 'block';
        border_form.style.borderColor = 'red';
    }    
});