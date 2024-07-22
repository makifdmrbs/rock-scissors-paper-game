const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoices= document.querySelectorAll('button') // querySelectorAll ile tüm buttonları bir nodelist(dizi gibi statik(sabit) bir yapı)'e ekle diyoruz
let userChoice
let computerChoice
let result

console.log(possibleChoices.length)
possibleChoices.forEach(choice => choice.addEventListener('click', (e) => { 
    /*forEach metodu, dizi üzerinde döngü oluşturur ve her bir eleman için bir fonksiyon çalıştırır.
    choice burada dizideki her bir öğeyi temsil eder.Bu şekilde choice adıyla her bir öğeye referans veriyoruz.
    ---
    choice.addEventListener('click', (e) => {...} 
    eşittir choice.addEventListener('click', function(event ya da kısaca e diyebiliriz)){...})
    ---
    addEventListener metodu, belirtilen olayı (bu durumda click olayı) dinlemek için kullanılır. Yani, choice öğesine tıklanıldığında bu olay tetiklenecektir.
    */
    userChoice = e.target.id /*target özelliği, olayın(e=event) meydana geldiği elementi döndürür(<button id="rock">rock</button>).
    Buda hangi butona tıklandıysa o olacaktır.Bu durumda tıklanılan butonun id'sini döndürmek için değişkenadı.target.id yazarız*/
    
    userChoiceDisplay.innerHTML=userChoice // burada userChoice seçilen buttonun id'si yani paper,rock vs. userChoiceDisplay değişkenine atanan element'te göster
    generateComputerChoice()
    getResult()
})) 

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1
    /* Math.floor() yöntemi bir sayıyı en yakın tamsayıya YUVARLAR.
    Math.random() yöntemi, 0 ile 0.99 arasında rastgele bir virgüllü sayı döndürür. 
    Math.floor(Math.random() * possibleChoices.length) +1 */

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice===userChoice){
        result= 'its a draw!'
    }
    if(computerChoice=='rock' && userChoice=='scissors'){
        result= 'you are lose'
    }
    if(computerChoice=='rock' && userChoice=='paper'){
        result= 'you are win'
    }
    if(computerChoice=='scissors' && userChoice=='paper'){
        result= 'you are lose'
    }
    if(computerChoice=='scissors' && userChoice=='rock'){
        result= 'you are win'
    }
    if(computerChoice=='paper' && userChoice=='rock'){
        result= 'you are lose'
    }
    if(computerChoice=='paper' && userChoice=='scissors'){
        result= 'you are win'
    }
    resultDisplay.innerHTML=result
}