// logic.ts
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var profilePreview = document.getElementById("profilePreview");
    var profilePictureInput = document.getElementById("profilePicture");
    // Handle image preview
    profilePictureInput.addEventListener("change", function () {
        var _a;
        var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                if (event.target) {
                    profilePreview.src = event.target.result;
                    profilePreview.style.display = "block";
                }
            };
            reader.readAsDataURL(file);
        }
    });
    // Form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        generateResume();
    });
    function generateResume() {
        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Update resume output
        resumeOutput.innerHTML = "\n        <div class=\"resume\">\n          <h2>".concat(name, "</h2>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone:</strong> ").concat(phone, "</p>\n          <img src=\"").concat(profilePreview.src, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%; margin-top: 10px;\">\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>\n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n        </div>\n      ");
    }
});
