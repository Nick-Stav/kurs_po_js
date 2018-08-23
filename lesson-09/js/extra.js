let age = document.getElementById('age');

let user = {
	surname: 'shpakov',
	name: 'nikita',
	userAge: age.value,
	show: function showUser(surname, name) {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.userAge);
	}
}
 
user.show();


age.addEventListener('change', () => {
	user.userAge = age.value;
	user.show();
});
 

