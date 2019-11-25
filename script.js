
function carregar (argument) {
	var msg2 = document.getElementById('hora1')
	var msg = document.getElementById('msg')
	var img = document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `Agora Sao ${hora} Horas`
	if (hora >= 0 && hora < 12) {
		 hora1.innerHTML = "BOM DIA"
		img.src = 'manha.png'
		document.body.style.background = '#e2cd9f'
	} else if (hora >= 12 && hora < 18) {
		hora1.innerHTML = "BOA TARDE"
		img.src = 'tarde.png' 
		document.body.style.background = '#b9846f'
	} else {
		hora1.innerHTML = "BOA NOITE "
		img.src = 'noite.png'
		document.body.style.background = '#515154'
	}
	
}