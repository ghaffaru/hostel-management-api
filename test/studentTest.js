const chai = require("chai");

const chaiHttp = require("chai-http");

const app = require("../index");

const should = chai.should();

const Student = require("../models/Student");

chai.use(chaiHttp);

let admin_details = {
  email: "admin@admin.com",
  password: "12345678"
};

let student = {
  first_name: "Ghaffaru",
  last_name: "Mudashiru",
  middlename: "Abdul",
  phone: 233241992669,
  email: "mudashiruagm@gmail.com",
  date_of_birth: "2000-10-10",
  year: 2020,
  room: "5e6927f0a3220461c4b02bdf",
  program: "BSc Computer Engineering",
  level: 400,
  amount: 1233
};

describe("Students", function() {
  beforeEach(done => {
    Student.remove({}, err => {
      console.log(err);
      done();
    });
  });

  describe("REGISTER", function() {
    it("admin should register a student", done => {
      chai
        .request(app)
        .post("/api/admin/login")
        .send(admin_details)
        .end((err, res) => {
          res.should.have.status(200);
          console.log(err);
          res.body.should.have.property("token");

          let token = res.body.token;

          chai
            .request(app)
            .post("/api/student/register")
            .set("Authorization", "Bearer " + token)
            .send(student)
            .end((err, res) => {
              console.log(err);
              res.should.have.status(201);
            });

          done();
        });
    });
  });

  describe("GET STUDENTS", function() {
    it("it should return all students", done => {
      chai
        .request(app)
        .post("/api/admin/login")
        .send(admin_details)
        .end((err, res) => {
          res.should.have.status(200);
          console.log(err);
          res.body.should.have.property("token");

          let token = res.body.token;

          chai
            .request(app)
            .get("/api/students")
            .set("Authorization", "Bearer " + token)
            .end((err, res) => {
              res.should.have.status(200);
             
            });

            done();
        });
    });
  });
});
