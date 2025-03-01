 
    document.querySelector('button[type="submit"]')?.addEventListener('click', function (event) {
        event.preventDefault()
        
        const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
        const description = (document.getElementById("description") as HTMLInputElement)?.value || "";
        const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement)?.value || "";
        const emailAddress = (document.getElementById("emailAddress") as HTMLInputElement)?.value || "";
        const address =( document.getElementById("address") as HTMLInputElement)?.value || "";
        const education =( document.getElementById("education") as HTMLInputElement)?.value || "";
        const institude = (document.getElementById("institude") as HTMLInputElement)?.value  || "";
        const skills = (document.getElementById("skills") as HTMLInputElement)?.value  || "";
        const languages = (document.getElementById("languages") as HTMLInputElement)?.value  || "";
        const hobies = (document.getElementById("hobies") as HTMLInputElement)?.value  || "";
        const awards = (document.getElementById("awards") as HTMLInputElement)?.value  || "";
        const summary = (document.getElementById("summary") as HTMLInputElement)?.value  || "";
        const experience = (document.getElementById("experience") as HTMLInputElement)?.value  || "";
    
        const picture = document.getElementById("resumePic") as HTMLInputElement;
        let pictureURL = "";
        if (picture?.files && picture.files[0]) {
            pictureURL = URL.createObjectURL(picture.files[0])
        }
    
            const resumeOutput = `
            <section>
            <h1>Contact</h1>
            <p><b>Phone Number:</b> ${phoneNumber}</p>
            <p><b>E-mail Address:</b> ${emailAddress}</p>
            <p><b>Address:</b> ${address}</p>
            <br/>
            <h1>SKILLS</h1>
            <ul>
                <li>${skills}</li>
            </ul>
            <h1>LANGUAGES</h1>
            <ul>
                <li>${languages}</li>
            </ul>
            <h1>HOBIES</h1>
            <ul>
                <li>${hobies}</li>
            </ul>
            <h1>AWARDS</h1>
            <p>${awards}</p>
     
            </section>
            <div>
                ${pictureURL ? `<img src="${pictureURL}" alt="" height="100" width="100" align="right"/>`: ''}
                <h1>${name}</h1>
                <h3>${description}</h3>
                <hr/>
                <h1>SUMMARY</h1>
                <p>${summary}</p>
                <hr/>
                <h1>EDUCATION</h1>
                <p>${education}</p>
                <hr/>
                <h1>INSTITUDE</h1>
                <p>${institude}</p>
                <hr/> 
                <h1>EXPERIENCE</h1>
                <p>${experience}</p>
            </div>
            `
    

         document.getElementById("resumeOutput")!.innerHTML = resumeOutput;
        
    })
 
