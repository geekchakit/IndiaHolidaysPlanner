  function SendEnquery()
  {
    $("#myModal").modal("show");
  }

  function PackageEnquiry(PackageName)
  {
    $("#myModal").modal("show");
    localStorage.setItem("pkgname",PackageName)
  }

  function SendLead(){
    var templateParams = {
      from_name: $("#FullNameModal").val(),
      email_id: $("#EmailModal").val(),
      contact_no:$("#NumberModal").val(),
      package_name:localStorage.getItem('pkgname'),
      startdate:$("#DateModal").val(),
      adult:$("#AdultModal").val(),
      // group:$("#GroupPKG").val(),
      message:$("#MessageModal").val(),
      website:"Rajasthan"
  };
//    console.log(templateParams);
   emailjs.send(
    'service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u'
    // "service_v2o5j0l",
    // "template_apvv4kv",
    // templateParams,
    // "3w5lxrQSjLVVLUx6_"
    )
      .then(function(response) {
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#FullNameModal").val('');
          $("#EmailModal").val('');
          $("#NumberModal").val('');
          $("#MessageModal").val('');
          // $("#GroupPKG").val('');
          $("#AdultModal").val('');
          $("#DateModal").val('');
          $("#myModal").modal("hide");
          $("#MineBntModal").prop('disabled',false);
          localStorage.setItem(null);
      }, function(error) {
          swal("Sorry!", "Its not your fault!", "error");
          $("#MineBntModal").prop('disabled',false);
      });
  }

  function SendLeadForm()
  {
    var templateParams = {
      from_name: $("#FullNameForm").val(),
      email_id: $("#EmailForm").val(),
      contact_no:$("#NumberForm").val(),
      package_name:"Sent From Form",
      startdate:$("#DateForm").val(),
      adult:$("#AdultForm").val(),
      // group:$("#GroupPKG").val(),
      message:$("#MessageForm").val(),
      website:"Rajasthan"
  };
//    console.log(templateParams);
  emailjs.send(
    'service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u'
    // "service_v2o5j0l",
    // "template_apvv4kv",
    // templateParams,
    // "3w5lxrQSjLVVLUx6_"
    )
      .then(function(response) {
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#FullNameForm").val('');
          $("#EmailForm").val('');
          $("#NumberForm").val('');
          $("#MessageForm").val('');
          // $("#GroupPKG").val('');
          $("#AdultForm").val('');
          $("#DateForm").val('');
          $("#MineBntForm").prop('disabled',false);
          localStorage.setItem(null);
      }, function(error) {
          swal("Sorry!", "Its not your fault!", "error");
          $("#MineBntForm").prop('disabled',false);
      });
  }

  function CloseModal(){
    $("#myModal").modal('hide');
  }
  