# Tic Tac Toe

## App 

A gyökérkomponens. 
Itt hozzuk létre a program állapotát leíró state-ket. 
Itt kezeljük le a kattintás eseményt. 

### A program állapota

Reactban a program állapotát state-ek segítségével kezeljük. A statek olyan változók, amelyek leírják a program aktuális állapotát, és a  React automatikusan frissíti az oldal azon részét, amely a state-ben megahtározott változóktól függ.  A state-k beállítása a useState hokkal történik. 
A useState hook egy speciális függvény, visszatérési értéke egy lista, melynek két eleme van: a változó és a változót beállító függvény. 
A változó értéke a továbbiakban közvetlenül nem, csak ezen függvényen keresztül módosítható.

Két state-et használ a program: 

    const [lista,setLista] = useState(["X","X"," ","O"," "," "," "," ","O"])
    const [lepes,setLepes] = useState(0)




### katt függvény

Ez a metódus kezeli le az egyes elemekre való kattintás eseményt. 
Beállítja a state-eket az állapotnak megfelelően. 

    function katt(adat){
        console.log("app-ban",adat)
        //lista[adat]="X" így nem változtathatjuk meg a state értékét
        //csak a setterén/beállítófüggvényén keresztül. 
        //1. készíts egy másolatot a változóról. 
        //2. változtasd meg az értékét
        //3. beállítóvüggvényen keresztül változtasd meg az eredeti változót.
        
        const sl=[...lista]
        if (lepes%2==0){
        sl[adat]="X"
        }else{
        sl[adat]="O"
        }    
        setLista([...sl]) //értékadás történi a háttérben: lista=sl

        let slepes=lepes+1
        setLepes(slepes)
        //setLepes(lepes+1) ez jó
        //setLepes(lepes+=1) - ezt nem tehetem meg)

    }

## JatekTer komponens

Végigiterál a listán és létrehozza a 9 Elem komponenst. 
A reactben a props segítségével adunk át adatokat a szülőkomponenstől a gyerek komponensnek. 

props-ok: 
1. lista - a program állapotát jelképező lista. 
2. katt - Az a metódus, ami majd az elemre való kattintást lekezeli. Ezt nem itt használjuk fel, hanem majd az Elem komponensben, a JatekTer csak "átvezeti" az információt. 

##  Elem komponens

Feladata egyetlen DIV megjelenítése, amire kattinthatunk, és amibe belekerül majd a megfelelő jel.
props-ok: 
1. adat - a konkrét jelet jelenti, értéke a listából jön. 
2. index - az adott komponens helye a listában.  
3. katt - a főkomponens metódusa, ezt kell meghívni kattintáskor. 

