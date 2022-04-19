import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Difference between authorization and authentication :
          </h5>
          <p className="card-text">
            Authorization is the process of giving permission to access the
            resources, files, data and information to one user. Authorization is
            usually done once the user is successfully authenticated. In the
            other hand, Authentication is the process of verifying who someone
            is! It determines whether the person is user or not. Authentication
            usually performed before the authorization.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p className="card-text">
            Firebase is a type of real time database.It is a platform by Google
            that provides functionalities and helps with the backend development
            of your Android, iOS, or web and even some products that support
            Unity3D too. I use firebase because of its top functionality such as
            Firebase Database,Firebase Cloud Storage,Firebase Remote Config and
            so on. We can implement Single-Factor/Primary Authentication,
            Two-Factor Authentication (2FA), Single Sign-On (SSO) for
            authentication.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            What other services does firebase provide other than authentication?
          </h5>
          <p className="card-text">
            There are some other services provides by firebase they are Cloud
            Firestore Cloud Functions, Hosting, Cloud Storage,Google
            Analytics,Predictions,Cloud Messaging, Dynamic Links, Remote Config.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
