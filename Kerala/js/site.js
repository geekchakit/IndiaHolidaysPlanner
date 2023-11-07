function SendContactForm(FormType)
{
  
    if(FormType=="HeaderForm")
    {
      if($('#contactNo').val()=="")
      {
          // alert('if');
        if($('#contactNo').val()!="")
        {
          $('#contactNoval').prop('hidden',true);
        }
        else{
          $('#contactNoval').prop('hidden',false);
        }
      }
      else{
        //  alert('else');
        $('#contactNoval').prop('hidden',true);
        $("#SentFromForm").prop('disabled',true);
        var templateParams = {
          from_name: $("#fullname").val(),
          email_id: $("#mailId").val(),
          contact_no:$("#contactNo").val(),
          startdate:$("#StartDate").val(),
          adult:$("#Adult").val(),
          // group:$("#Group").val(),
          message:$("#message").val(),
          website:"Kerala"
      };
       
      emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
          .then(function(response) {
              swal("Good job!", "Your Response Has been submited!", "success");
              $("#SentFromForm").prop('disabled',false);
          }, function(error) {
              swal("Sorry!", "Its not your fault!", "error");
              $("#SentFromForm").prop('disabled',false);
          });
      }
    }

    else if(FormType=="ContactDiv")
    {
      if($('#contactNoC').val()=="")
      {
        // alert('if');
        if($('#contactNoC').val()!="")
        {
          $('#contactNoCval').prop('hidden',true);
        }
        else{
          $('#contactNoCval').prop('hidden',false);
        }
      }
      else{
        $('#contactNoCval').prop('hidden',true);
        $("#SentResponse").prop('disabled',true);
        $("#SentFromContact").prop('disabled',true);
        var templateParams = {
          from_name: $("#fullnameC").val(),
          email_id: $("#mailIdC").val(),
          contact_no:$("#contactNoC").val(),
          message:$("#messageC").val(),
          website:"Kerala"
      };
       
      emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
          .then(function(response) {
              swal("Good job!", "Your Response Has been submited!", "success");
              $("#SentResponse").prop('disabled',false);
              $("#SentFromContact").prop('disabled',false);
          }, function(error) {
              swal("Sorry!", "Its not your fault!", "error");
              $("#SentResponse").prop('disabled',false);
              $("#SentFromContact").prop('disabled',false);
          });
      }
      
    }
    else{
      // alert('else');
      if(FormType=="BModal")
      {
          // alert('BModal');
         if($('#contactNoBModal').val()=="")
         {
          // alert('if');
          $('#contactNoBModalval').prop('hidden',false);
         }
         else{
          // alert('else');
          $('#contactNoBModalval').prop('hidden',true);
        $("#SentResponse").prop('disabled',true);
        $("#SentFromContact").prop('disabled',true);
        var templateParams = {
          from_name: $("#fullnameBModal").val(),
          email_id: $("#mailIdBModal").val(),
          contact_no:$("#contactNoBModal").val(),
          startdate:$("#StartDateBModal").val(),
          adult:$("#AdultBModal").val(),
          // group:$("#GroupBModal").val(),
          message:$("#messageBModal").val(),
          website:"Kerala"
      };
      //  console.log(templateParams);
      emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
          .then(function(response) {
              swal("Good job!", "Your Response Has been submited!", "success");
              $("#SentResponse").prop('disabled',false);
              $("#SentFromContact").prop('disabled',false);
              $("#myModal").modal("hide");
          }, function(error) {
              swal("Sorry!", "Its not your fault!", "error");
              $("#SentResponse").prop('disabled',false);
              $("#SentFromContact").prop('disabled',false);
          });
         }
      }
    }
    
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  if($(window).width() < 739)
  {
    $(".mobileCall").prop('hidden',false);
    $('.pcCall').prop('hidden',true);
  }
  else{
    $(".mobileCall").prop('hidden',true);
    $('.pcCall').prop('hidden',false);
  }
  
  function GoToDiv(ID)
  {
    if($(window).width() > 739)
    {
      $('html, body').animate({
        scrollTop: $("#"+ID).offset().top
      }, 1000);
    }
    else{
      if(ID=="VanarasiPackageDiv")
      {
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/1.5
        }, 1000);
      }
      else if(ID=="KashiBestAttraction")
      {
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/0.4
        }, 1000);
      }
      else
      {
        //Contact Scroll
        var height = $('body').height();
        $('html, body').animate({
          scrollTop: height/0.29
        }, 1000);
      }
      
    }
    $('body').removeClass('offcanvas');
    $('body').removeClass('overflow');
   $('.js-gtco-nav-toggle').removeClass('active');
  }

  function SendEnquery()
  {
    $("#myModal").modal("show");
  }

  function PackageEnquiry(PackageName)
  {
    $("#PackageModal").modal("show");
    localStorage.setItem("pkgname",PackageName)
    // $("#PackageEnquirySent").click(function(){
    //   $("#PackageEnquirySent").prop('disabled',true);
    //   var templateParams = {
    //     from_name: $("#fullnamePKG").val(),
    //     email_id: $("#mailIdPKG").val(),
    //     contact_no:$("#contactNoPKG").val(),
    //     package_name:PackageName,
    //     message:$("#messagePKG").val()
    // };
     
    // emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
    //     .then(function(response) {
    //         swal("Good job!", "Your Response Has been submited!", "success");
    //         $("#fullnamePKG").val('');
    //         $("#mailIdPKG").val('');
    //         $("#contactNoPKG").val('');
    //         $("#messagePKG").val('');
    //         $("#PackageModal").modal("hide");
    //         $("#PackageEnquirySent").prop('disabled',false);
    //     }, function(error) {
    //         swal("Sorry!", "Its not your fault!", "error");
    //         $("#PackageEnquirySent").prop('disabled',false);
    //     });
    // })
  }
  $("#PackageEnquirySent").click(function(){
    if($('#contactNoPKG').val()=="")
    {
      // alert('if')
      $('#contactNoPKGval').prop('hidden',false);
    }
    else{
      //  alert('else');
      $('#contactNoPKGval').prop('hidden',true);
        $("#PackageEnquirySent").prop('disabled',true);
    // alert(localStorage.getItem('pkgname'));
    var templateParams = {
      from_name: $("#fullnamePKG").val(),
      email_id: $("#mailIdPKG").val(),
      contact_no:$("#contactNoPKG").val(),
      package_name:localStorage.getItem('pkgname'),
      startdate:$("#StartDatePKG").val(),
      adult:$("#AdultPKG").val(),
      // group:$("#GroupPKG").val(),
      message:$("#messagePKG").val(),
      website:"Kerala"
  };
   
  emailjs.send('service_67t7hhj', 'template_thv6rqb', templateParams,'nmhVg3RXzbcSkzs_u')
      .then(function(response) {
          swal("Good job!", "Your Response Has been submited!", "success");
          $("#fullnamePKG").val('');
          $("#mailIdPKG").val('');
          $("#contactNoPKG").val('');
          $("#messagePKG").val('');
          // $("#GroupPKG").val('');
          $("#AdultPKG").val('');
          $("#StartDatePKG").val('');
          $("#PackageModal").modal("hide");
          $("#PackageEnquirySent").prop('disabled',false);
          localStorage.setItem(null);
      }, function(error) {
          swal("Sorry!", "Its not your fault!", "error");
          $("#PackageEnquirySent").prop('disabled',false);
      });
    }
  })
  