var users=[]

function send(){
        var text=document.getElementById('name').value
        var email=document.getElementById('email').value
        var number=document.getElementById('number').value
        var password=document.getElementById('password').value

        // users.push(text)
        // users.push(email)
        // users.push(number)
        // users.push(password)
        // console.log(users)
        localStorage.setItem('name',text)
        localStorage.setItem('email',email)
        localStorage.setItem('number',number)
        localStorage.setItem('password',password)
}
