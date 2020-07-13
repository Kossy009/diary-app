const entryDiv = document.querySelector("#entry-div")
const entryForm = document.querySelector("#entry-form")
const displayMsgBox = document.querySelector("#display-box")
const entryContent = document.querySelector("#entry-content")

let count = 1
const whenSubmit = (event) =>{
    event.preventDefault()
    
        const userInput = document.createElement("div")
        userInput.className = "user-input"
        userInput.textContent = entryDiv.value
        userInput.style.display = "none"
        displayMsgBox.appendChild(userInput)
        entryDiv.value = ""

        const displayMsgButton = document.createElement("button")
        displayMsgButton.className = "display-entry-btn"
        displayMsgButton.textContent = count
        entryContent.appendChild(displayMsgButton)

        displayMsgButton.addEventListener("click", function(){
            const AllEntries = document.querySelectorAll(".user-input")
            AllEntries.forEach((entry) => {
                entry.style.display = "none"
            })
            userInput.style.display = "block"
        })
        count++
    
}

entryForm.addEventListener("submit", whenSubmit)