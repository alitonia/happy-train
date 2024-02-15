console.log("OK")

var slots = [
    "You",
    "are",
    "invited",
    "to"
]

var visibleSlots = []
var currentPhrase = ""
var smokeEventName = "smoke_to_the_air"

var smoke = document.querySelector(".smoke")
var msg = document.querySelector(".message")

msg.addEventListener(smokeEventName, function (e) {
    msg.innerText = e.detail
})

smoke.addEventListener('animationiteration', function (e) {
    if (slots.length > 0) {
        visibleSlots.push(slots.shift())
        currentPhrase = visibleSlots.join(" ")
        var cEvent = new CustomEvent(smokeEventName, {
            detail: currentPhrase
        })
        msg.dispatchEvent(cEvent)
    }
})
