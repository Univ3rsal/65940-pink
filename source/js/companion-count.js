(function(){
	var plus = document.querySelector(".field-input--counter-plus-companion");
	var minus = document.querySelector(".field-input--counter-minus-companion");
	var area = document.querySelector(".competition-companions__items");
	var inputCount = document.querySelector(".field-input--counter-human");

	$(plus).data('counter', 1);  
	 
	plus.addEventListener("click", function(){ 

	    var counter = $(this).data('counter');
	    $(this).data('counter', counter + 1);
	    
		var item = document.createElement("div");
		var itemNumber = document.createElement("div");
		var fieldTitleNum = document.createElement("label");
		var fieldInputNum = document.createElement("input");
		var itemName = document.createElement("div");
		var fieldTitleName = document.createElement("label");
		var fieldInputName = document.createElement("input");
		var buttonDelete = document.createElement("button");
		var itemNickname = document.createElement("div");
		var fieldTitleNickname = document.createElement("label");
		var fieldInputNickname = document.createElement("input");
		
		item.classList.add('competition-companions__item');
		area.appendChild(item);
		itemNumber.classList.add('competition-companions__item-number');
		item.appendChild(itemNumber);
		fieldTitleNum.classList.add('field-title');
		fieldTitleNum.classList.add('field-title--color');
		fieldTitleNum.innerHTML = '№';
		itemNumber.appendChild(fieldTitleNum);
		fieldInputNum.classList.add('field-input');
		fieldInputNum.classList.add('field-input--companion-number');
		fieldInputNum.type = "text"; 
		fieldInputNum.disabled = true;
		fieldInputNum.value = counter;
		itemNumber.appendChild(fieldInputNum);
		item.appendChild(itemName);
		itemName.classList.add('competition-companions__item-name');
		item.appendChild(itemName);
		fieldTitleName.classList.add('field-title');
		fieldTitleName.classList.add('field-title--color');
		fieldTitleName.for = "companion-name-" + counter;
		fieldTitleName.innerHTML = 'Имя: *';
		itemName.appendChild(fieldTitleName);
		fieldInputName.classList.add('field-input');
		fieldInputName.classList.add('field-input--companion-name');
		fieldInputName.type = "text";
		fieldInputName.id = "companion-name-" + counter;
		fieldInputName.name = "companion-name-" + counter;
		fieldInputName.placeholder = "Введите ваше имя";
		fieldInputName.required = true;
		itemName.appendChild(fieldInputName);
		buttonDelete.classList.add('competition-companions__btn');
		buttonDelete.innerHTML = "Удалить";
		item.appendChild(buttonDelete);
		itemNickname.classList.add('competition-companions__item-nickname');
		item.appendChild(itemNickname);
		fieldTitleNickname.classList.add('field-title');
		fieldTitleNickname.classList.add('field-title--color');
		fieldTitleNickname.for = "companion-nickname";
		fieldTitleNickname.innerHTML = 'Прозвище:';
		itemNickname.appendChild(fieldTitleNickname);
		fieldInputNickname.classList.add('field-input');
		fieldInputNickname.classList.add('field-input--companion-nickname');
		fieldInputNickname.type = "text";
		fieldInputNickname.id = "companion-nickname-" + counter;
		fieldInputNickname.name = "companion-nickname-" + counter;
		fieldInputNickname.placeholder = "Ну как же без этого!";
		fieldInputNickname.required = true;
		itemNickname.appendChild(fieldInputNickname);

		buttonDelete.addEventListener("click", function(){
			area.removeChild(item);
			inputCount.value = parseInt(inputCount.value) - 1 + " " + "чел";
		});
		
	});
	
	minus.addEventListener("click", function(){
		$(plus).data('counter', 1);
		area.lastChild.remove();
	});	
})();