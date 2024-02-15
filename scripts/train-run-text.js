console.log("OK")

var slots = [
    "Mời",
    "mọi người",
    "đến tham dự",
    "lễ chụp ảnh của Chi"
]

var visibleSlots = []
var currentPhrase = ""
var smokeEventName = "smoke_to_the_air"
var finishEventName = "no_more_smoke_needs"

var smoke = document.querySelector(".smoke")
var msg = document.querySelector(".message")
var moreMsg = document.querySelector(".additional-info-message")

msg.addEventListener(smokeEventName, function (e) {
    msg.innerHTML = e.detail.join(' ')
})

moreMsg.addEventListener(finishEventName, function (e) {
    if (moreMsg.classList.contains("hidden-1")) {
        moreMsg.classList.remove('hidden-1')
    } else if (moreMsg.classList.contains("hidden-2")) {
        moreMsg.classList.remove('hidden-2')
    } else if (moreMsg.classList.contains("hidden-3")) {
        moreMsg.classList.remove('hidden-3')
    } else {
        moreMsg.classList.remove('hidden-4')
    }
})

smoke.addEventListener('animationiteration', function (e) {
    if (slots.length > 0) {
        visibleSlots.push(slots.shift())
        currentPhrase = visibleSlots.join(" ")
        var cEvent = new CustomEvent(smokeEventName, {
            detail: visibleSlots
        })
        msg.dispatchEvent(cEvent)
    } else {
        var cEvent = new CustomEvent(finishEventName, {
            detail: currentPhrase
        })
        moreMsg.dispatchEvent(cEvent)
    }
})
