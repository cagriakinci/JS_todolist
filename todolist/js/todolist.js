const ADDBTN = document.querySelector('#liveToastBtn');
ADDBTN.addEventListener('submit', newElement);

function newElement() {
    const TASK = document.querySelector('#task');
    const LIST = document.querySelector('#list');
    const liDOM = document.createElement('li');

    if (TASK.value && TASK.value.trim()){ // değer var mı kontrol ediyor ve boşluk karakteri attırmıyor.
        liDOM.innerHTML = `${TASK.value}`;
        let gorevTut = `${TASK.value}`;
        let task = liDOM.innerHTML;
        liDOM.setAttribute("id", `${TASK.value}`);
        LIST.append(liDOM);
        localStorage.setItem('task', task);
        TASK.value = '';
        $('#liveToast').toast('show');
        const spanDOM = document.createElement('span');
        spanDOM.innerHTML = `<span class="close">X</span>`;
        liDOM.append(spanDOM);
        // li öğesini none etme kodu (silme)
        if(spanDOM.addEventListener("click", function(){
            let gorevIdGetir = document.getElementById(`${gorevTut}`);
            gorevIdGetir.style.display = "none";        
        })){}
        console.log(liDOM)
        // Üzerine tıklandığında checked yapma kodu
        if(liDOM.addEventListener("click", function(){
            let gorevIdGetir = document.getElementById(`${gorevTut}`);
            gorevIdGetir.classList.add("checked");
        })){}

    } else {
        $('#liveToast1').toast('show');
    }
    
}