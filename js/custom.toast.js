function showToast() {
    littleToast = document.getElementById("liveToast");
    littleToast.classList.remove("hide");
    littleToast.classList.add("show");
}

function hideToast() {
    littleToast = document.getElementById("liveToast");
    littleToast.classList.remove("show");
    littleToast.classList.add("hide");
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

const animateToast = async () => {
    showToast();
    await sleep(5000);
    hideToast();
}

