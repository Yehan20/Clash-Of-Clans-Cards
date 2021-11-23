const cards=document.querySelectorAll('.card__inner');
		cards.forEach((card)=>{
			card.addEventListener('click',(e)=>{
				e.stopPropagation() 
			     
			    card.classList.toggle('card__inner__rt');
			    let img; 
			  
			    if(!card.classList.contains('card__inner__rt')){
			    	img=(e.target.children[2]); // other wise element would not be fouund
			    	
	
			    }
			    else{
			    	img=(e.target.nextElementSibling.children[2]);
			    	   
			    	 
                     let loader=Array.from(e.target.nextElementSibling.children[3].children);//loader
                     loader.forEach(load=>{
                     	console.log(load);
                     	let greenBar=(load.children[1].firstElementChild); // gedding each bar of the loder of the card
                     				    	     
                              greenBar.animate([
                              {width:'35%'},
                              {width:`w.style.width`}
                          	],{
                          		duration:850,
                          		animationTimingFunction:'ease-in-out'
                          	 });      
                     });                  
			    }
			 
				img.classList.toggle('img-move');
							 
			})

		})
	