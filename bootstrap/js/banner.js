//esse codigo js é para conserta o problema de quando abrir o hamburguinho o menu ficar dentro do banner
//vamos cliar um evento pra quando clicar no menu o banner ir mais para baixo 

$('#collapse-menu').on('show.bs.collapse', function(){
    $('.banner').css('transform', 'translate(-50%, 10%)')
});

$('#collapse-menu').on('hide.bs.collapse', function(){
    $('.banner').css('transform', 'translate(-50%, -50%)')
});;