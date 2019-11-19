import MaterialInput from "./material-input";

let materialInputName = new MaterialInput(
    document.getElementById("material-input-name"),
    {
        activeClass: "material-input_active"
    }
);

let materialInputEmail = new MaterialInput(
    document.getElementById("material-input-email"),
    {
        activeClass: "material-input_active"
    }
);

let materialInputPhone = new MaterialInput(
    document.getElementById("material-input-phone"),
    {
        activeClass: "material-input_active",
        phone: true
    }
);

let materialInputDelivery = new MaterialInput(
    document.getElementById("material-input-delivery"),
    {
        activeClass: "material-input_active",
        date: true
    }
);

let materialTextArea = new MaterialInput(
    document.getElementById("material-textarea"),
    {
        activeClass: "material-textarea_active",
        textarea: true
    }
);

let logInName = new MaterialInput(
    document.getElementById("modal-logIn__name"),
    {
        activeClass: "material-input_active",
    }
);

let logInPassword = new MaterialInput(
    document.getElementById("modal-logIn__password"),
    {
        activeClass: "material-input_active",
    }
);

let signUpName = new MaterialInput(
    document.getElementById("modal-signUp__name"),
    {
        activeClass: "material-input_active",
    }
);

let signUpEmail = new MaterialInput(
    document.getElementById("modal-signUp__email"),
    {
        activeClass: "material-input_active",
    }
);

let signUpPassword = new MaterialInput(
    document.getElementById("modal-signUp__password"),
    {
        activeClass: "material-input_active",
    }
);

let signUpPasswordRepeat = new MaterialInput(
    document.getElementById("modal-signUp__password-repeat"),
    {
        activeClass: "material-input_active",
    }
);
