document.addEventListener('keydown', (event) => {
    let tapkeyboard = event.key.toUpperCase();
    switch (tapkeyboard) {
        case "A" :
            let audioA = new Audio("\\"+tapkeyboard+".mp3")
            audioA.play().then(r => stop());
            break;
        case "S" :
            let audioS = new Audio("\\"+tapkeyboard+".mp3")
            audioS.play().then(r => stop());
            break;
        case "D" :
            let audioD = new Audio("\\"+tapkeyboard+".mp3")
            audioD.play().then(r => stop());
            break;
        case "F" :
            let audioF = new Audio("\\"+tapkeyboard+".mp3")
            audioF.play().then(r => stop());
            break;
        case "G" :
            let audioG = new Audio("\\"+tapkeyboard+".mp3")
            audiog.play().then(r => stop());
            break;
        case "H" :
            let audioH = new Audio("\\"+tapkeyboard+".mp3")
            audioH.play().then(r => stop());
            break;
        case "J" :
            let audioJ = new Audio("\\"+tapkeyboard+".mp3")
            audioJ.play().then(r => stop());
            break;
        case "W" :
            let audioW = new Audio("\\"+tapkeyboard+".mp3")
            audioW.play().then(r => stop());
            break;
        case "E" :
            let audioE = new Audio("\\"+tapkeyboard+".mp3")
            audioE.play().then(r => stop());
            break;
        case "T" :
            let audioT = new Audio("\\"+tapkeyboard+".mp3")
            audioT.play().then(r => stop());
            break;
        case "Y" :
            let audioY = new Audio("\\"+tapkeyboard+".mp3")
            audioY.play().then(r => stop());
            break;
        case "U" :
            let audioU = new Audio("\\"+tapkeyboard+".mp3")
            audioU.play().then(r => stop());
            break;

        default:
            console.log("You won't play piano like that ! ");
    }
})




