//EFEITOS IMAGENS AO ESCROLAR A PAGINA
		window.onscroll = () =>{
			var sValue = (window.pageYOffset / 2000)+1;
			var appValue = (window.pageYOffset / 600);
			document.querySelector('.logoSP').style.transform = 'scale('+sValue+')';
			document.querySelector('.mobile').style.backgroundPositionX = '-'+appValue+'em';
			document.querySelector('.prime-ninja .os').style.transform = 'rotate('+window.pageYOffset/10+'deg)'
			document.querySelector('.prime-ninja .shuriken').style.transform = 'rotate(-'+window.pageYOffset/10+'deg)'
		}

		
		//CONTADOR REGRESSIVO 
		setInterval(function(){
			var contar = new Date(), dias = 7 - contar.getDay(), horas = 24 - contar.getHours(), minutos = 60 - contar.getMinutes(), segundos = 60 - contar.getSeconds();
			if(dias < 10){ dias = '0'+dias }
			if(horas < 10){ horas = '0'+horas }
			if(minutos < 10){ minutos = '0'+minutos }
			if(segundos < 10){ segundos = '0'+segundos }

			document.querySelector('.counter').innerHTML = '<span>'+dias+'</span><span>'+horas+'</span><span>'+minutos+'<br></span><span>'+segundos+'</span>';
		},0)
		
		//LINKS PLAY/APPSTORE
		document.querySelector('.download').addEventListener('click', () =>{

		    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		    if (/Android/i.test(userAgent)) {
		        window.open('https://play.google.com/store/apps/details?id=br.com.kabum.webviewapp&hl=en&gl=US')
		    }
		    if (/iPad|iPhone|iPod/.test(userAgent)) {
		        window.open('itms-apps://apple.com/app/1411546631')
		    }
		    if (/Chrome|Firefox/i.test(userAgent)) {
		        window.open('https://kabum.com.br/')
		    }
		})
		//CARROSSEL PRODUTOS
		document.querySelectorAll('.carrossel div').forEach( produto =>{
			produto.addEventListener('click',(e) =>{
				e.target.scrollIntoView({ inline:'center', behavior:'smooth', block:'nearest',})
			})
		})


		//CARROSSEL VIDEOS
		var vids = document.querySelector(".vids"), slide = document.querySelector(".vids div"), pBtn = document.querySelector(".prev"), nBtn = document.querySelector(".next");
		nBtn.addEventListener("click", () => {
		  var larguraSlide = slide.clientWidth;
		  vids.scrollLeft += larguraSlide;
		});

		pBtn.addEventListener("click", () => {
		  var larguraSlide = slide.clientWidth;
		  vids.scrollLeft -= larguraSlide;
		});
		

		//VIDEO IFRAME 
		document.querySelectorAll('.vids .carrossel button').forEach(play =>{
			play.addEventListener('click',() =>{
				document.querySelector('#video').style.display = 'block';
				document.querySelector('#video iframe').setAttribute('src','https://www.youtube.com/embed/QB7ACr7pUuE?autoplay=1')
			})
		})

		//BOTÃO FECHAR VIDEO NO MODAL
		document.querySelector('#video span').addEventListener('click',() =>{
			document.querySelector('#video').style.display = 'none';
				document.querySelector('#video iframe').setAttribute('src','#')
		})


		//AUMENTAR FAQ (FADEOUT)
		var fadeHeight = document.querySelector('.fade').clientHeight;
		document.querySelector('.fade button').addEventListener('click', () =>{
			document.querySelector('.fade').style.marginBottom = fadeHeight-fadeHeight+'px'
			document.querySelector('.fade').style.marginTop = fadeHeight-fadeHeight+'px'
			document.querySelector('.fade').style.height = fadeHeight-fadeHeight+'px';
			document.querySelector('.fade button').remove()
		})
		

		//TEXTO PARA CADA DUVIDA DO FAQ
		fetch('css/lorem.txt').then(reponse =>{
			return reponse.text()
		}).then(lorem =>{

		document.querySelectorAll('details').forEach(dummy =>{
			dummy.innerHTML = dummy.innerHTML+'<p>'+lorem+'</p>'
			})
		})

		//DATA RODAPÉ
		var data = new Date(); data.getDate(); 
		var ano = data.getFullYear()
		document.querySelector('footer span').innerHTML = '&copy;'+ano;
		

		//MENU HAMBURGER MOBILE
		document.querySelector('.mobile-header span').addEventListener('click',function(){
		document.querySelector('.mobile-header span').classList.toggle('open');
		document.querySelector('#mobile ul').classList.toggle('hamburger');
		})

