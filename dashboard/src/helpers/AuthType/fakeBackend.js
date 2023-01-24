import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "mail@myloginemail.mail",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios);

  mock.onPost(url.POST_FAKE_REGISTER).reply((config) => {
    const user = JSON.parse(config["data"]);
    users.push(user);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-fake-login").reply((config) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      (usr) => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          resolve([200, validUser[0]]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });     
};

export default fakeBackend;
