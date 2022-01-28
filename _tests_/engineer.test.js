const { TestWatcher } = require("jest");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return an object containing a 'string' when called with the 'new' keyword", () => {
            const obj = new Engineer("Kelly", 2, "kel@tech.com", "kel.gitHub");

            expect(obj.getName()).toEqual("Kelly");
        });
    });
    describe("getId", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Kelly", 2, "kel@tech.com", "kel.gitHub");

            expect(obj.getId()).toEqual(2);
        });
    });
    describe("getEmail", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Kelly", 2, "kel@tech.com", "kel.gitHub");

            expect(obj.getEmail()).toEqual("kel@tech.com");
        })
    })
    describe("getGitHub", () => {
        it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Kelly", 2, "kel@tech.com", "kel.gitHub");

            expect(obj.getGitHub()).toEqual("kel.gitHub");
        })
    })
    describe("getRole", () => {
        it("should return Employee prompt questions", () => {
            const obj = new Engineer("Kelly", 2, "kel@tech.com", "kel.gitHub");
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})