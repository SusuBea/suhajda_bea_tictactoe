class Elem{
    /*megjelenítse az oldalon azt az egyetlen elemet*/ 
    /* this - az osztályon belül az adattagokon végezzük a műveleteket*/

    constructor(szuloElem){
        /*beállítja az adattagokat*/
        this.szuloElem =  szuloElem;
        this.#htmlOsszeallit() /* a this a konkrét osztálypéldányra mutat*/ 

        /*megfogjuk / csinálunk egy változót a html elemkhez*/
        this.divElem = this.szuloElem.children("div:last-child")
        this.pElem = this.divElem.children("p")
        console.log(this.divElem)
        //console.log(this.pElem)
        // this.divElem.on("click", ()=> {
        //     this.setErtek("X");
        // })

        this.divElem.on("click", ()=> {
            this.#esemenyTrigger("elemKivalaszt");
        })
        
    }


    setErtek(ertek){
        this.pElem.html(ertek);
    }

    //f2 a függvény nevére és átállítja mindenhol a nevet
    #htmlOsszeallit(){
        let txt = "<div class='elem'><p></p></div>"
        this.szuloElem.append(txt)


    }

    /*Saját esemény létrehozása
    Az osztály tud elmondani magáról dolgokat
    információkat ad át saját magáról*/
    //sajatEsemeny = event; (googleben: event web api /  custom event: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) 
    
    #esemenyTrigger(esemenyNev){
        const esemenyem = new CustomEvent(esemenyNev, {detail:this})
        window.dispatchEvent(esemenyem); //be kell magolni ezt a 2 sort!!!!!!! ez a fő tudnivaló itt

    }



}

export default Elem;