import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

let Res_num = document.getElementById("reservation-number");
let Check_List = {};
document.addEventListener("submit", (event) => {
	event.preventDefault();
	let User_name = document.getElementsByName("user-name")[0].value;
	let User_phone = document.getElementsByName("user-phone")[0].value;
	Check_List.name = User_name;
	Check_List.phone = User_phone;
	Res_num.innerHTML = "";
	for (let i = 0; i < RESERVATION_LIST.length; i++) {
		if (
			User_name == RESERVATION_LIST[i].name &&
			User_phone == RESERVATION_LIST[i].phone
		) {
			return (Res_num.innerHTML = RESERVATION_LIST[i].number);
		}
	}
	if (Res_num.innerHTML == "") {
		alert("일치하는 내역이 없습니다");
		Res_num.innerHTML = "일치하는 내역이 없습니다";
	}
});
