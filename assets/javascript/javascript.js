$(document).ready(function () {
	$("#part_1").hide();
	$('#datetimepicker1').datetimepicker();
});

$("#submit").on("click", function () {
	$("#student_info").hide();
	$("#part_1").show();
	$("#instructions").hide();

});