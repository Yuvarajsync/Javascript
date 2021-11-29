function validate() {
    userName();
    fatherNameValidate();
    address();
    email();
    dob();
    phone();
    state();
    pinnumber();
    paddress();
    checkfile();
}

// validate username
function userName() {
    // validate User name
    var username = document.getElementById("name");
    var nameerror = document.getElementById("nameerror");

    //username regex
    var regx = /^[A-Za-z]+$/;
    var uservalue = username.value;

    if (uservalue.trim() != "") {
        if (regx.test(uservalue)) {
            username.style.borderColor = "gray";
            nameerror.innerHTML = "";
        }
        else {
            console.log("else " + username.value);
            username.style.borderColor = "red";
            nameerror.style.color = "red";
            nameerror.innerHTML = "Enter valid name";
        }
    }
    else {
        username.style.borderColor = "red";
        nameerror.style.color = "red";
        nameerror.innerHTML = "Name is required";
    }

}
// validate fathers name
function fatherNameValidate() {
    //validate Father's name
    var fusername = document.getElementById("fname");
    var fnameerror = document.getElementById("fnameerror");

    //father regex
    var fregx = /^[A-Za-z]+$/;
    var fuservalue = fusername.value;

    if (fuservalue.trim() != "") {
        if (fregx.test(fuservalue)) {
            fusername.style.borderColor = "gray";
            fnameerror.innerHTML = "";
        }
        else {
            fusername.style.borderColor = "red";
            fnameerror.style.color = "red";
            fnameerror.innerHTML = "Letters only allowed!";
        }
    }
    else {
        fusername.style.borderColor = "red";
        fnameerror.style.color = "red";
        fnameerror.innerHTML = "Name is required";
    }
}
// Validate current address
function address() {
    // address line 1 
    var address = document.getElementById("address");
    var addrerror = document.getElementById("addrerror");

    var aregx = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var addressval = address.value;

    if (addressval.trim() != "") {
        if (aregx.test(addressval)) {
            address.style.borderColor = "gray";
            addrerror.innerHTML = "";
        }
        else {
            console.log("else " + addressval);
            address.style.borderColor = "red";
            addrerror.style.color = "red";
            addrerror.innerHTML = "Enter valid Address!";
        }
    }
    else {
        address.style.borderColor = "red";
        addrerror.style.color = "red";
        addrerror.innerHTML = "Address required!";
    }

    //   address line 2
    var address2 = document.getElementById("address2");
    var address2error = document.getElementById("line2error");

    var a2regx = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var address2val = address2.value;

    if (address2val.trim() != "") {
        if (a2regx.test(address2val)) {
            address2.style.borderColor = "gray";
            address2error.innerHTML = "";
        }
        else {
            address2.style.borderColor = "red";
            address2error.style.color = "red";
            address2error.innerHTML = "Enter valid address";
        }
    }
    else {
        address2.style.borderColor = "red";
        address2error.style.color = "red";
        address2error.innerHTML = "Address line2 required!";
    }


    //  City validate
    var city = document.getElementById("city");
    var cityerror = document.getElementById("cityerror");

    var cregex = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var cityval = city.value;

    if (cityval.trim() != "") {
        if (cregex.test(cityval)) {
            city.style.borderColor = "gray";
            cityerror.innerHTML = "";
        }
        else {
            city.style.borderColor = "red";
            cityerror.style.color = "red";
            cityerror.innerHTML = "Enter valid city name";
        }
    }
    else {
        city.style.borderColor = "red";
        cityerror.style.color = "red";
        cityerror.innerHTML = "City name required!";
    }
}
// validate email address
function email() {
    var mail = document.getElementById("mail");
    var mailerror = document.getElementById("emailerror");

    var eregex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})/;
    var emailval = mail.value;

    if (emailval.trim() != "") {
        if (eregex.test(emailval)) {
            mail.style.borderColor = "gray";
            mailerror.innerHTML = "";
        }
        else {
            mail.style.borderColor = "red";
            mailerror.style.color = "red";
            mailerror.innerHTML = "Enter valid email address";
        }
    }
    else {
        mail.style.borderColor = "red";
        mailerror.style.color = "red";
        mailerror.innerHTML = "Email is required!";
    }
}
// validate date of birth
function dob() {
    var dob = document.getElementById("dob");
    var doberror = document.getElementById("doberror");

    var dregex = /^([0-9]{2})\/([[0-9]{2})\/([0-9]{4})$/;
    var dobval = dob.value;
    if (dobval.trim() != "") {
        if (dregex.test(dobval)) {
            dob.style.borderColor = "gray";
            doberror.innerHTML = "";
        }
        else {
            dob.style.borderColor = "red";
            doberror.style.color = "red";
            doberror.innerHTML = "Enter valid DOB!";
        }
    }
    else {
        dob.style.borderColor = "red";
        doberror.style.color = "red";
        doberror.innerHTML = "DOB is required!";
    }
}
// validate phone number
function phone() {
    var phone = document.getElementById("phone");
    var phoneerror = document.getElementById("phoneerror");

    var pregex = /^([6-9][0-9]{9})$/;
    var phoneval = phone.value;
    if (phoneval.trim() != "") {
        if (pregex.test(phoneval)) {
            phone.style.borderColor = "gray";
            phoneerror.innerHTML = "";
        }
        else {
            phone.style.borderColor = "red";
            phoneerror.style.color = "red";
            phoneerror.innerHTML = "Enter valid Number!";
        }
    }
    else {
        phone.style.borderColor = "red";
        phoneerror.style.color = "red";
        phoneerror.innerHTML = "phone number required!";
    }
}
// validate state value
function state() {
    var state = document.getElementById("state");
    var stateerror = document.getElementById("stateerror");

    var sregex = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var stateval = state.value;
    if (stateval.trim() != "") {
        if (sregex.test(stateval)) {
            state.style.borderColor = "gray";
            stateerror.innerHTML = "";
        }
        else {
            state.style.borderColor = "red";
            stateerror.style.color = "red";
            stateerror.innerHTML = "select valid state value!";
        }
    }
    else {
        state.style.borderColor = "red";
        stateerror.style.color = "red";
        stateerror.innerHTML = "State is required!";
    }
}
// validate ZIP CODE number
function pinnumber() {
    var pin = document.getElementById("pin");
    var pinerror = document.getElementById("pinerror");

    var piregex = /^([0-9]{6})$/;
    var pinval = pin.value;
    if (pinval.trim() != "") {
        if (piregex.test(pinval)) {
            pin.style.borderColor = "gray";
            pinerror.innerHTML = "";
        }
        else {
            pin.style.borderColor = "red";
            pinerror.style.color = "red";
            pinerror.innerHTML = "Enter Valid Zip code";
        }
    }
    else {
        pin.style.borderColor = "red";
        pinerror.style.color = "red";
        pinerror.innerHTML = "ZIP Code required!";
    }
}
// Check permenent address
function paddress() {
    // address line 1 
    var paddress = document.getElementById("paddress1");
    var paddrerror = document.getElementById("paddresserror");

    var paregx = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var paddressval = paddress.value;

    if (paddressval.trim() != "") {
        if (paregx.test(paddressval)) {
            paddress.style.borderColor = "gray";
            paddrerror.innerHTML = "";
        }
        else {
            paddress.style.borderColor = "red";
            paddrerror.style.color = "red";
            paddrerror.innerHTML = "Enter valid Address!";
        }
    }
    else {
        paddress.style.borderColor = "red";
        paddrerror.style.color = "red";
        paddrerror.innerHTML = "Address required!";
    }

    //   address line 2
    var paddress2 = document.getElementById("paddress2");
    var paddress2error = document.getElementById("paddress2error");

    var pa2regx =/^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var paddress2val = paddress2.value;

    if (paddress2val.trim() != "") {
        if (pa2regx.test(paddress2val)) {
            paddress2.style.borderColor = "gray";
            paddress2error.innerHTML = "";
        }
        else {
            paddress2.style.borderColor = "red";
            paddress2error.style.color = "red";
            paddress2error.innerHTML = "Enter valid address";
        }
    }
    else {
        paddress2.style.borderColor = "red";
        paddress2error.style.color = "red";
        paddress2error.innerHTML = "Address line2 required!";
    }


    //  City validate
    var pcity = document.getElementById("pcity");
    var pcityerror = document.getElementById("pcityerror");

    var pcregex = /^([a-zA-Z]+)\s?([a-zA-Z]+)\s?([a-zA-Z]{1,100})?/;
    var pcityval = pcity.value;

    if (pcityval.trim() != "") {
        if (pcregex.test(pcityval)) {
            pcity.style.borderColor = "gray";
            pcityerror.innerHTML = "";
        }
        else {
            pcity.style.borderColor = "red";
            pcityerror.style.color = "red";
            pcityerror.innerHTML = "Enter valid city name";
        }
    }
    else {
        pcity.style.borderColor = "red";
        pcityerror.style.color = "red";
        pcityerror.innerHTML = "City name required!";
    }

    // Pin number validation
    var ppin = document.getElementById("ppin");
    var ppinerror = document.getElementById("ppinerror");

    var ppiregex = /^([0-9]{6})$/;
    var ppinval = ppin.value;
    if (ppinval.trim() != "") {
        if (ppiregex.test(ppinval)) {
            ppin.style.borderColor = "gray";
            ppinerror.innerHTML = "";
        }
        else {
            ppin.style.borderColor = "red";
            ppinerror.style.color = "red";
            ppinerror.innerHTML = "Enter Valid Zip code";
        }
    }
    else {
        ppin.style.borderColor = "red";
        ppinerror.style.color = "red";
        ppinerror.innerHTML = "Enter Zip code";
    }
}
// Check if permenent addres is equal to current address
function fill() {
    //get first address
    var caddr = document.getElementById("address").value;
    var caddr2 = document.getElementById("address2").value;
    var ccity = document.getElementById("city").value;
    var cstate = document.getElementById("state").value;
    var cpin = document.getElementById("pin").value;

    // get permenent addres box
    var paddr = document.getElementById("paddress1");
    var padd2 = document.getElementById("paddress2");
    var pcity = document.getElementById("pcity");
    var pstate = document.getElementById("pstate");
    var ppin = document.getElementById("ppin");

    // GEt checkbox status:
    var mode = document.getElementById("paddress");
    if (mode.checked) {
        paddr.value = caddr;
        padd2.value = caddr2;
        pcity.value = ccity;
        pstate.value = cstate;
        ppin.value = cpin;
    }
    else {
        paddr.value = "";
        padd2.value = "";
        pcity.value = "";
        pstate.value = "";
        ppin.value = "";
    }
}

function checkfile()
{
    var val = document.getElementById("img");
    var imgerro = document.getElementById("imgerror");

    var path = val.value;
    if(path.trim()!="")
    {
        val.style.color="green";
        imgerro.innerHTML="";
    }
    else
    {
        val.style.color="red";
        imgerro.style.color="red";
    }
}