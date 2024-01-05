const resumeData = {
    "personalInformation": {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1 (555) 123-4567",
      "address": {
        "street": "123 Main Street",
        "city": "Anytown",
        "state": "CA",
        "zipCode": "12345"
      }
    },

    console.log("Using for...in loop:");
    for (const section in resumeData) {
      console.log(section);
    }
  
    console.log("\nUsing forEach:");
    ["education", "workExperience", "skills", "projects", "certifications", "languages"].forEach(section => {
      console.log(section);
    });
  
    console.log("\nUsing for...of loop:");
    for (const section of ["education", "workExperience", "skills", "projects", "certifications", "languages"]) {
      console.log(section);
    }
  
    console.log("\nUsing for loop with indices:");
    const sections = Object.keys(resumeData);
    for (let i = 0; i < sections.length; i++) {
      console.log(sections[i]);
    }
  