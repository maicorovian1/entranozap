


document.getElementById('whatsapp-link').addEventListener('click', function (event) {
    var nome = document.getElementById('name').value;
    var numeroWhatsApp = '+5566999750425';
    var mensagem = encodeURIComponent('Olá, meu nome é ' + nome + '. Gostaria de fazer um orçamento.');


    if (nome.trim() === '') {

        alert('Por favor, preencha seu nome antes de enviar a mensagem.');

        event.preventDefault();
    } else {

        this.href = 'https://wa.me/' + numeroWhatsApp + '?text=' + mensagem;
    }
});
	

