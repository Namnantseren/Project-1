import './Left.css/style.css'

export default function left() {
    return(
        <div class="left">
            <p class="font13 flex">Home</p>
            <div>
                <p class="font11 flex">PUBLIC</p>
                <div >
                    <div class="flex first1">
                        <img src="../earth-png.webp" alt="" />
                        <p class="font13 quest">Questions</p>
                    </div>
                    <p class="font13">Tags</p>
                    <p class="font13">Users</p>
                    <p class="font13">Companies</p>
                </div>
            </div>
            <div class="flex push">
                <p class="font13">COLLECTIVES</p>
                <p class="warning font11">i</p>
            </div>
            <div class="earth flex">
                <img src="../earth-png.webp" alt="" />
                <p class="font13 expo">Explore Collection</p>
            </div>
        </div>
    )
}