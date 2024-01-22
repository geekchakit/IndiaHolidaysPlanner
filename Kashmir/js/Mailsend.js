function SendEnquery() {
  $("#myModal").modal("show");
}

function PackageEnquiry(PackageName) {
  $("#myModal").modal("show");
  localStorage.setItem("pkgname", PackageName);
}

function SendLead() {
  var PhoneNumber = $("#NumberModal").val();
  var Length = PhoneNumber.trim().length;
  if ($("#NumberModal").val() == "" || Length != 10) {
    $("#ValidatePhoneModel").text("Please give 10 digit number.");
    $("#ValidatePhoneModel").prop("hidden", false);
  } else {
    if ($("#NoRobot").val() != "" && $("#NoRobot").val() == "4") {
      $("#ValidatePhoneModel").prop("hidden", true);
      $("#ValidateRobotModel").prop("hidden", true);
      var templateParams = {
        //website: "Kashmir Trip",
        from_name: $("#FullNameModal").val(),
        //email_id: $("#EmailModal").val(),
        contact_no: $("#NumberModal").val(),
        package_name: localStorage.getItem("pkgname"),
        //startdate: $("#DateModal").val(),
        //adult: $("#AdultModal").val(),
        // group:$("#GroupPKG").val(),
        message: $("#MessageModal").val(),
        website: "Kashmir",
      };
      //    console.log(templateParams);
      emailjs
        .send(
          "service_67t7hhj",
          "template_thv6rqb",
          templateParams,
          "nmhVg3RXzbcSkzs_u"
          // "service_v2o5j0l",
          // "template_apvv4kv",
          // templateParams,
          // "3w5lxrQSjLVVLUx6_"
        )
        .then(
          function (response) {
            swal("Good job!", "Your Response Has been submited!", "success");
            $("#FullNameModal").val("");
            //$("#EmailModal").val("");
            $("#NumberModal").val("");
            $("#MessageModal").val("");
            // $("#GroupPKG").val('');
            //$("#AdultModal").val("");
            //$("#DateModal").val("");
            $("#myModal").modal("hide");
            $("#MineBntModal").prop("disabled", false);
            localStorage.setItem(null);
          },
          function (error) {
            swal("Sorry!", "Its not your fault!", "error");
            $("#MineBntModal").prop("disabled", false);
          }
        );
    } else {
      $("#ValidateRobotModel").prop("hidden", false);
      $("#ValidateRobotModel").text("Wrong Answer.");
    }
  }
}

function SendLeadFormLegacy() {
  var PhoneNumber = $("#NumberForm").val();
  var Length = PhoneNumber.trim().length;
  if ($("#NumberForm").val() == "" || Length != 10) {
    $("#ValidatePhone").text("Please give 10 digit number.");
    $("#ValidatePhone").prop("hidden", false);
  } else {
    if ($("#NoRobotForm").val() != "" && $("#NoRobotForm").val() == "4") {
      //alert("True"+$("#NoRobot").val());
      $("#ValidateRobotForm").prop("hidden", true);
      $("#ValidatePhone").prop("hidden", true);
      var templateParams = {
        from_name: $("#FullNameForm").val(),
        //email_id: $("#EmailForm").val(),
        contact_no: $("#NumberForm").val(),
        package_name: "Sent From Form",
        //startdate: $("#DateForm").val(),
        //adult: $("#AdultForm").val(),
        // group:$("#GroupPKG").val(),
        message: $("#MessageForm").val(),
        website: "Kashmir",
      };
      //    console.log(templateParams);
      emailjs
        .send(
          "service_67t7hhj",
          "template_thv6rqb",
          templateParams,
          "nmhVg3RXzbcSkzs_u"
          // "service_v2o5j0l",
          // "template_apvv4kv",
          // templateParams,
          // "3w5lxrQSjLVVLUx6_"
        )
        .then(
          function (response) {
            swal("Good job!", "Your Response Has been submited!", "success");
            $("#FullNameForm").val("");
            //$("#EmailForm").val("");
            $("#NumberForm").val("");
            $("#MessageForm").val("");
            // $("#GroupPKG").val('');
            //$("#AdultForm").val("");
            //$("#DateForm").val("");
            $("#MineBntForm").prop("disabled", false);
            localStorage.setItem(null);
          },
          function (error) {
            swal("Sorry!", "Its not your fault!", "error");
            $("#MineBntForm").prop("disabled", false);
          }
        );
    } else {
      $("#ValidateRobotForm").text("Wrong Answer.");
      $("#ValidateRobotForm").prop("hidden", false);
    }
  }
}

function SendLeadForm() {
  var PhoneNumber = $("#NumberForm").val();
  var Length = PhoneNumber.trim().length;
  if ($("#NumberForm").val() == "" || Length != 10) {
    $("#ValidatePhone").text("Please give 10 digit number.");
    $("#ValidatePhone").prop("hidden", false);
  } else {
    if ($("#NoRobotForm").val() != "" && $("#NoRobotForm").val() == "4") {
      $("#ValidateRobotForm").prop("hidden", true);
      $("#ValidatePhone").prop("hidden", true);
      const data = {
        name: $("#FullNameForm").val(),
        message: $("#MessageForm").val(),
        mobileNumber: $("#NumberForm").val(),
        website: "Kashmir",
        package: "Sent From Form",
      };

      fetch("http://localhost:5000/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        console.log(response);
        swal("Good job!", "Your Response Has been submited!", "success");
        $("#FullNameForm").val("");
        $("#NumberForm").val("");
        $("#MessageForm").val("");
        $("#MineBntForm").prop("disabled", false);
        localStorage.setItem(null);
      });

    } else {
      $("#ValidateRobotForm").text("Wrong Answer.");
      $("#ValidateRobotForm").prop("hidden", false);
    }
  }
}

function CloseModal() {
  $("#myModal").modal("hide");
}
