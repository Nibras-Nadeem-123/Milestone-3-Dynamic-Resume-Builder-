var _a;
(_a = document.querySelector('button[type="submit"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    event.preventDefault();
    var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
    var description = ((_b = document.getElementById("description")) === null || _b === void 0 ? void 0 : _b.value) || "";
    var phoneNumber = ((_c = document.getElementById("phoneNumber")) === null || _c === void 0 ? void 0 : _c.value) || "";
    var emailAddress = ((_d = document.getElementById("emailAddress")) === null || _d === void 0 ? void 0 : _d.value) || "";
    var address = ((_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.value) || "";
    var education = ((_f = document.getElementById("education")) === null || _f === void 0 ? void 0 : _f.value) || "";
    var institude = ((_g = document.getElementById("institude")) === null || _g === void 0 ? void 0 : _g.value) || "";
    var skills = ((_h = document.getElementById("skills")) === null || _h === void 0 ? void 0 : _h.value) || "";
    var languages = ((_j = document.getElementById("languages")) === null || _j === void 0 ? void 0 : _j.value) || "";
    var hobies = ((_k = document.getElementById("hobies")) === null || _k === void 0 ? void 0 : _k.value) || "";
    var awards = ((_l = document.getElementById("awards")) === null || _l === void 0 ? void 0 : _l.value) || "";
    var summary = ((_m = document.getElementById("summary")) === null || _m === void 0 ? void 0 : _m.value) || "";
    var experience = ((_o = document.getElementById("experience")) === null || _o === void 0 ? void 0 : _o.value) || "";
    var picture = document.getElementById("resumePic");
    var pictureURL = "";
    if ((picture === null || picture === void 0 ? void 0 : picture.files) && picture.files[0]) {
        pictureURL = URL.createObjectURL(picture.files[0]);
    }
    var resumeOutput = "\n            <section>\n            <h1>Contact</h1>\n            <p><b>Phone Number:</b> ".concat(phoneNumber, "</p>\n            <p><b>E-mail Address:</b> ").concat(emailAddress, "</p>\n            <p><b>Address:</b> ").concat(address, "</p>\n            <br/>\n            <h1>SKILLS</h1>\n            <ul>\n                <li>").concat(skills, "</li>\n            </ul>\n            <h1>LANGUAGES</h1>\n            <ul>\n                <li>").concat(languages, "</li>\n            </ul>\n            <h1>HOBIES</h1>\n            <ul>\n                <li>").concat(hobies, "</li>\n            </ul>\n            <h1>AWARDS</h1>\n            <p>").concat(awards, "</p>\n     \n            </section>\n            <div>\n                ").concat(pictureURL ? "<img src=\"".concat(pictureURL, "\" alt=\"\" height=\"100\" width=\"100\" align=\"right\"/>") : '', "\n                <h1>").concat(name, "</h1>\n                <h3>").concat(description, "</h3>\n                <hr/>\n                <h1>SUMMARY</h1>\n                <p>").concat(summary, "</p>\n                <hr/>\n                <h1>EDUCATION</h1>\n                <p>").concat(education, "</p>\n                <hr/>\n                <h1>INSTITUDE</h1>\n                <p>").concat(institude, "</p>\n                <hr/> \n                <h1>EXPERIENCE</h1>\n                <p>").concat(experience, "</p>\n            </div>\n            ");
    document.getElementById("resumeOutput").innerHTML = resumeOutput;
});
