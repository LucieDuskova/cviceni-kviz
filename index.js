// Vytvořte si repozitář ze šablony cviceni-kviz. V repozitáři je kostra stránky pro kvízové otázky. Napište JavaScriptový program, který vybere element s třídou question a nastaví jeho obsah na nějakou kvízovou otázku, například

// Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.
// Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. V opačném případě přidejte třídu answer--wrong.

const questionElement = document.querySelector('.question');
questionElement.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const odpoved = prompt('Jaká je správná odpověď?');

const answerTextElement = document.querySelector(".answer__text")
answerTextElement.textContent = odpoved



const answerElement = document.querySelector(".answer")

if (odpoved === "Bell"){
  answerElement.classList.add("answer--correct")
} else{
  answerElement.classList.add("answer--wrong")
}
