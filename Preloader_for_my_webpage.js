    	let preloader = document.querySelector('.preloader-block');
    	let c = document.querySelector('#c');
        let p = document.querySelector('#p');
        let progress_b = document.querySelector('.progress-bar');
      
        window.addEventListener('load', function() {
        	let i = 0;
        	let prog = 0;

            setInterval(() => {
            	c.textContent = i;
                i++;
                  
                if(c.textContent >= 93) {
                	return Done_Block();
                }

            }, 200);

            setInterval(() => {
                progress_b.style.width = `${prog}px`;
                prog += 3;
            }, 200);
          
        });   

        function Done_Block() {
        	setTimeout(() => {
               c.classList.add('a');
           	   p.classList.add('p');
        	     progress_b.classList.add('c');
               preloader.classList.add('h');
        	}, 500);

        	setTimeout(() => {
               c.classList.add('a2');
        	     p.classList.add('p2');
        	     progress_b.classList.add('c2');
               preloader.classList.add('h2');
        	}, 1000);

        	setTimeout(() => {
               preloader.classList.add('hide');
        	}, 1500);
        }
