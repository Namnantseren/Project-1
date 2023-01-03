import '../BodyStyle/style.css'

export default function Body() {
    let count = new Array(['1', '2', '3', '4', '5']);
    let repeat = document.getElementById('repeat');

    for(let i =0; i = 2; i++){
        repeat.innerHTML += `<div class="comment">
        <div class="left-comment">
            <p class="midCom">2 votes</p>
            <p class="midCom mt">2 answers</p>
            <p class="midCom mt">83 views</p>
            <p class="midCom mt">+50</p>
        </div>
        <div>
            <p class="upload">Upload App From Firebase App Distribution to Google Play Android</p>
            <div class="lore">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae, molestiae magnam id sit quis facilis vel tempore et numquam quidem cum suscipit corporis! </p>
            </div>
            <div class="question lastGroup">
                <button class="innerBtn">android</button>
                <button class="innerBtn">firebase</button>
                <button class="innerBtn">google-play-console</button>
                <div class="last question">
                    <img src="../Nameless.jpg" alt="" />
                    <p>4,585 asked Dec 16, 2022 at 9:02</p>
                </div>
            </div>
        </div>
    </div>`
    }

    return(
        <div class="midBody">
            <div class="split">
                <div class="shortHand">
                    <div class="allQues">
                        <h2>All Questions</h2>
                        <button class="btn">Ask Question</button>
                    </div>
                    <div class="question">
                        <p>229 questions with bounties</p>
                        <div class="question newest">
                            <div class="borderGray first"><p>Newest</p></div>
                            <div class="borderGray"><p>Active</p></div>
                            <div class="borderGray"><p>Bountied</p></div>
                            <div class="borderGray"><p>Unaswered</p></div>
                            <div class="borderGray lastMore"><p>More</p></div>
                        </div>
                        <button class="borderGray filter">Filter</button>
                    </div>
                    <hr/>
                    <div id="repeat">
                        <div class="comment">
                            <div class="left-comment">
                                <p class="midCom">2 votes</p>
                                <p class="midCom mt">2 answers</p>
                                <p class="midCom mt">83 views</p>
                                <p class="midCom mt">+50</p>
                            </div>
                            <div>
                                <p class="upload">Upload App From Firebase App Distribution to Google Play Android</p>
                                <div class="lore">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae, molestiae magnam id sit quis facilis vel tempore et numquam quidem cum suscipit corporis! </p>
                                </div>
                                <div class="question lastGroup">
                                    <button class="innerBtn">android</button>
                                    <button class="innerBtn">firebase</button>
                                    <button class="innerBtn">google-play-console</button>
                                    <div class="last question">
                                        <img src="../Nameless.jpg" alt="" />
                                        <p>4,585 asked Dec 16, 2022 at 9:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightSS">
                    <div class="rightSide">
                        <div>
                            <p>The Overflow Blog</p>
                        </div>
                        <div>
                            <p>You should be reading academic computer science papers</p>
                            <p>From life without parole to startup CTO (Ep. 522)</p>
                        </div>
                    </div>
                    <div class="rightBotn"></div>
                </div>
            </div>
        </div>
    )
}