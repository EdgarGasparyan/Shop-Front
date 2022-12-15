import React from "react";

const ConnectUs = () => {
  return (
    <>
	 {/*style={{height: '60vh'}}*/}
      <div className="wh-100 mb-5" >
        <div className="d-flex justify-content-center align-items-center mt-4">
		  
          <div className="row">
			 <h2 className="h1-responsive font-weight-bold text-center my-4">
          Կամ մեզ հետ
        </h2>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-3">
                <div className="form-floating mb-3 mt-3 ">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom shadow-none"
                    id="Name"
                    placeholder="Անուն"
                    name="name"
                  />
                  <label for="name">Անուն.</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3 mt-3 ">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom shadow-none"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  <label for="email">Էլ Հասցե.</label>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="form-floating mb-3 mt-3 ">
                  <textarea
                    className="form-control md-textarea border-0 border-bottom shadow-none"
                    type="text"
                    id="message"
                    name="message"
                    rows="10"
                    placeholder="Ձեր նամակը."
                  ></textarea>
                  <label for="massage">Ձեր նամակը.</label>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center ">
              <button
                className="btn btn-outline-dark me-4"
                style={{ width: 160 }}
                //  onClick={valid}
              >
                <span>Ուղարկել</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Կամ մեզ հետ
        </h2>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label for="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label for="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label for="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <a
                className="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>
        </div>
      </section>*/}
    </>
  );
};

export default ConnectUs;
