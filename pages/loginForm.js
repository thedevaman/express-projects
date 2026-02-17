export default function loginForm()
{
    return `<form action="/submit" method="post">
        <input type="text" name="username" placeholder="Enter username"><br/><br/>
        <input type="password" name="password" placeholder="Enter password"><br><br/>
        <button type="submit">Login</button>
      </form>`;
}