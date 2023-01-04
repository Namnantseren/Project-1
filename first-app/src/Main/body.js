import '../BodyStyle/style.css'

export default function Body() {
    // let count = new Array['1', '2', '3', '4', '5'];
    // let repeat = document.getElementById('repeat');

    // for(let i = 0; i = count.length; i++){
    //     repeat.innerHTML += `<div id="repeat">
    //     <div class="comment">
    //         <div class="left-comment">
    //             <p class="midCom">2 votes</p>
    //             <p class="midCom mt">2 answers</p>
    //             <p class="midCom mt">83 views</p>
    //             <p class="midCom mt">+50</p>
    //         </div>
    //         <div>
    //             <p class="upload">Upload App From Firebase App Distribution to Google Play Android</p>
    //             <div class="lore">
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quae, molestiae magnam id sit quis facilis vel tempore et numquam quidem cum suscipit corporis! </p>
    //             </div>
    //             <div class="question lastGroup">
    //                 <button class="innerBtn">android</button>
    //                 <button class="innerBtn">firebase</button>
    //                 <button class="innerBtn">console</button>
    //                 <div class="last question">
    //                     <img src="../Nameless.jpg" alt="" />
    //                     <p>4,585 asked Dec 16, 2022 at 9:02</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // <hr/>`
    // }

    return(
        <div class="midBody">
            <div class="split">
                <div class="shortHand">
                    <div class="allQues">
                        <h2>All Questions</h2>
                        <button class="btn">Ask Question</button>
                    </div>
                    <div class="question left-22">
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
                                    <button class="innerBtn">console</button>
                                    <div class="last question">
                                        <img src="../Nameless.jpg" alt="" />
                                        <p>4,585 asked Dec 16, 2022 at 9:02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="rightSS">
                    <div class="rightSide">
                        <div class="upperOver">
                            <div class="font1 overflow-div">
                                <p class="overflow">The Overflow Blog</p>
                            </div>
                            <div class="question font over">
                                <img src="../pencil-50.png" alt="" />
                                <p>Temporary policy: ChatGPT is banned</p>
                            </div>
                            <div class="question font over">
                                <img src="../pencil-50.png" alt="" />
                                <p>Temporary policy: ChatGPT is banned</p>
                            </div>
                        </div>
                        <div class="font1 underflow-div">
                            <p class="overflow">Featured on Meta</p>
                        </div>
                        <div class="font">
                            <div class="question font over">
                                <img src="../pencil-50.png" alt="" />
                                <p>Navigation and UI research starting soon</p>
                            </div>
                            <div class="question font over">
                                <img src="../pencil-50.png" alt="" />
                                <p>Temporary policy: ChatGPT is banned</p>
                            </div>
                            <div class="question font over">
                                <img src="../pencil-50.png" alt="" />
                                <p>The [choice] tag is being burninated</p>
                            </div>
                    
                        </div>
                    </div>
                    <div class="rightBotn">
                        <div class="font under question">
                            <p class="overflow">Collectives</p>
                            <p class="font see-all">see all</p>
                        </div>
                        <div class="question under-imm">
                            <img src="../google.png" alt="" />
                            <div class="question split-join">
                                <div class="google-collect font-2">
                                    <p class="three">Google Cloud</p>
                                    <p class="font1 five">35k Members</p>
                                </div>
                                <button class="joinBtn">Join</button>
                            </div>
                        </div>
                        <div class="font gg-cloud">
                            <p>Google Cloud provides organizations with leading infrastructure, platform capabilities...</p>
                        </div>
                        <hr/>
                        <div class="question under-imm">
                            <img src="../google.png" alt="" />
                            <div class="question split-join">
                                <div class="google-collect font-2">
                                    <p class="three">Google Cloud</p>
                                    <p class="font1 five">35k Members</p>
                                </div>
                                <button class="joinBtn">Join</button>
                            </div>
                        </div>
                        <div class="font gg-cloud">
                            <p>Google Cloud provides organizations with leading infrastructure, platform capabilities...</p>
                        </div>
                        <hr/>
                        <div class="question under-imm">
                            <img src="../google.png" alt="" />
                            <div class="question split-join">
                                <div class="google-collect font-2">
                                    <p class="three">Google Cloud</p>
                                    <p class="font1 five">35k Members</p>
                                </div>
                                <button class="joinBtn">Join</button>
                            </div>
                        </div>
                        <div class="font gg-cloud">
                            <p>Google Cloud provides organizations with leading infrastructure, platform capabilities...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}