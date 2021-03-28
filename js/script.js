const lang = localStorage.getItem('lang'); 

$('.pl').on('click', function() {
   setTranslation('pl');
   localStorage.setItem('lang','pl')
});

$('.ru').on('click', function() {
    setTranslation('ru');
    localStorage.setItem('lang','ru')
});

function setTranslation(locale) {
    $(`[data-${locale}]`).each(function() {
        $(this).text($(this).data(locale));
    }); 
}

if(lang) {
    setTranslation(lang)
}