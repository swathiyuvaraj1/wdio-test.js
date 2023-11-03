class SigninPage{

    get logoImg(){ return $('.login_logo__ltgde') }
    get email(){ return $("//label[text()='Email']//following::input[1]")}
    get password(){ return $("//label[text()='Password']//following::input[1]")}
    get loginBtn(){ return $("//button[text()='Login']")}
    get enterValidMsgTxt(){ return $("//p[text()='Please Enter Valid Details']")}
    get invalidCrediantialsMsgTxt(){ return $("//p[text()='Invalid Credentials!']")}
    get homeImg(){ return $('.css-50p7ul')}

}

module.exports = new SigninPage();