let inputName = document.querySelector('#name'),
    inputCompany = document.querySelector('#company'),
    inputMail = document.querySelector('#mail'),
    inputPhone = document.querySelector('#phone'),
    inputSubject = document.querySelector('#subject'),
    inputMessage = document.querySelector('#message'),

    nameLabel = document.querySelector('#nameLabel'),
    nameCompany = document.querySelector('#nameCompany'),
    nameMail = document.querySelector('#nameMail'),
    namePhone = document.querySelector('#namePhone'),
    nameSubject = document.querySelector('#nameSubject'),
    nameMessage = document.querySelector('#nameMessage');


inputName.addEventListener('mouseover', function() {
    nameLabel.style.color = "white";
})
inputCompany.addEventListener('mouseover', function() {
    nameCompany.style.color = "white";
})
inputMail.addEventListener('mouseover', function() {
    nameMail.style.color = "white";
})
inputPhone.addEventListener('mouseover', function() {
    namePhone.style.color = "white";
})
inputSubject.addEventListener('mouseover', function() {
    nameSubject.style.color = "white";
})
inputMessage.addEventListener('mouseover', function() {
    nameMessage.style.color = "white";
})


inputName.addEventListener('mouseout', function() {
    nameLabel.style.color = "#797EA3";
})
inputCompany.addEventListener('mouseout', function() {
    nameCompany.style.color = "#797EA3";
})
inputMail.addEventListener('mouseout', function() {
    nameMail.style.color = "#797EA3";
})
inputPhone.addEventListener('mouseout', function() {
    namePhone.style.color = "#797EA3";
})
inputSubject.addEventListener('mouseout', function() {
    nameSubject.style.color = "#797EA3";
})
inputMessage.addEventListener('mouseout', function() {
    nameMessage.style.color = "#797EA3";
})