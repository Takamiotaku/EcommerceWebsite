import Logo from "./logo"
export default function Account(){
return(
    <div>
        <Logo/>
    <h1>Account Page!</h1>
    <input type="text" placeholder="username" />
    <br/>
    <input type="pasword" placeholder="password" />
    <br/>
    <input type="button" value="log in!" />
    </div>
)
}