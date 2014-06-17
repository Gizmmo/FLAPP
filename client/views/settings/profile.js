Template.profile.rendered = function () {
	readyValidation();
	$("#gender").val(this.gender);

	 $(".form-control").change();

	// for(var i = 0; i  < checks.length; i++){
	// 	console.log("hello");
	// 	$(checks[).change();
	// }
};

Template.profile.events({
	'click #save-profile': function () {
		var user = Meteor.user();
		var profile = Profiles.findOne({'userID' : user._id});
		if(!($('#save-profile').prop('disabled'))){
			Meteor.call("updateProfileFirstName", $('#first-name').val());
			Meteor.call("updateProfileLastName", $('#last-name').val());
			Meteor.call("updateProfileUserName", $('#user-name').val());
			Meteor.call("updateProfileAge", $('#age').val());
			Meteor.call("updateProfileGender", $('#gender').val());
		}
	}
});

Template.profile.helpers({
	changeForm : function () {
		$(".form-control").change();
	}
});

