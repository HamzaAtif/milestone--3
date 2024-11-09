// logic.ts
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const profilePreview = document.getElementById("profilePreview") as HTMLImageElement;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
  
    // Handle image preview
    profilePictureInput.addEventListener("change", () => {
      const file = profilePictureInput.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            profilePreview.src = event.target.result as string;
            profilePreview.style.display = "block";
          }
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      generateResume();
    });
  
    function generateResume() {
      // Get form data
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
      
      // Update resume output
      resumeOutput.innerHTML = `
        <div class="resume">
          <h2>${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <img src="${profilePreview.src}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; margin-top: 10px;">
          <h3>Experience:</h3>
          <p>${experience}</p>
          <h3>Skills:</h3>
          <p>${skills}</p>
        </div>
      `;
    }
  });
  