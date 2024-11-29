function sendMail(name,pronouns,artist_name,dob,addr,country,email,contact,disabilities,discipline,durres,residency_date,fileurl,file_link){
 

    //Date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

        
    let parms = {
        submitdate: today,
        name: name,
        pronouns: pronouns,
        artist_name: artist_name,
        dob: dob,
        addr: addr,
        country: country,
        email: email,
        contact: contact,
        disabilities: disabilities,
        discipline: discipline,
        durres: durres,
        residency_date: residency_date,
        fileurl: fileurl,
        file_link: file_link
    }

    emailjs.send("service_894pdzk","template_0qvxjdg",parms).then(alert("Email Sent !!!"))
}