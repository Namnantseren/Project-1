import '../Style/Style.css'

export default function Header() {
    return (
        
        <header class="center">
            <img src="./download.png" alt='stackOverFlow'/>
            <ul class="center">
                <li>about</li>
                <li class="second">Products</li>
                <li class="third">For Teams</li>
            </ul>
            <div class="hoho">
                <input type="text" placeholder='Search...' id='text1'/>
            </div>
            <button class="logBtn mixBtn">Log in</button>
            <button class="signBtn mixBtn">Sign up</button>
        </header>
    )   
}