const content = document.querySelector("div.post-wrap");

let bar = document.createElement("div")
bar.style.height = "6px"
bar.style.width = "0"
bar.style.maxWidth = "100%"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.transition = ".2s"
bar.style.zIndex = "9999"

document.body.append(bar)

const progressBar = () => {
    const contentHeight = content.scrollHeight;
    const heightWindow = window.innerHeight;

    const currentPosition = content.getBoundingClientRect().top - heightWindow;

    const howManyPercent = (currentPosition * 100) / contentHeight;
    bar.style.width = `${Math.abs(howManyPercent)}%`
}

document.addEventListener("scroll", progressBar);