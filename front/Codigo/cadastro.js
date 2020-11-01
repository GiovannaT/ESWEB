// document.getElementById("myForm").submit();

// // async function basiclogin(email, senha) {
// //     const response = await zlFetch.post(loginEndpoint, {
// //         auth: {
// //             username: email,
// //             password: password
// //         },
// //         body: { /*...*/ }
// //     })
// // }

// // Name and Email validation Function.
// // function validation(){
// //     var name = document.getElementById("name").value;
// //     var email = document.getElementById("email").value;
// //     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
// //     if( name ==='' || email ===''){
// //     alert("Please fill all fields...!!!!!!");
// //     return false;
// //     }else if(!(email).match(emailReg)){
// //     alert("Invalid Email...!!!!!!");
// //     return false;
// //     }else{
// //     return true;
// //     }
// //     }

// function submit_by_id() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     if (validation()) // Calling validation function
//     {
//         document.getElementById("form_id").submit(); //form submission
//         alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
//     }
// }

const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});