import { React } from "react";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row border">
        <div className="col auth-banner ">
          <h2 className="auth-title ">Zwallet</h2>
          {/* <Image /> */}
          <div className="auth-phone-group text-center">
            <img src="/assets/png-phone2.png" alt="" className=" auth-phone1" />
            <img src="/assets/png-phone.png" alt="" className=" auth-phone2" />
          </div>
          <h2 className="auth-title ">App that Covering Banking Needs.</h2>
          <p className="auth-text mt-5">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage
          </p>
        </div>
        <div className="col-5 auth-form border">
          <h2 className="auth-form-title">
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <p className="auth-form-subtitle mt-4">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form action="" className="form">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <p>Forgot password</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
