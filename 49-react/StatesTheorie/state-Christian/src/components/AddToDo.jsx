// Importieren der useState-Hook-Funktion aus dem "react"-Modul
import { useState } from "react"

// Deklaration der "AddToDo"-Komponente
const AddToDo = (props) => {
    // Verwenden der useState-Hook-Funktion, um den Zustand "value" und dessen Aktualisierungsfunktion "setValue" zu initialisieren
    const [value, setValue] = useState('')

    // Rendern der "AddToDo"-Komponente
    return (
        <>
            {/* Ein Eingabefeld wird gerendert und bei Änderungen wird die Aktualisierungsfunktion "setValue" aufgerufen,
            um den Wert des Zustands "value" entsprechend zu aktualisieren */}
            <input onChange={(e) => setValue(e.target.value)} type="text" name="" id="" />

            {/* Ein Button wird gerendert und bei Klick wird die übergebene Funktion "props.add" aufgerufen.
            Die Funktion erhält den vorherigen Zustand "prev" als Argument und fügt ein neues To-Do-Element als Objekt
            mit der Beschreibung aus dem aktuellen Wert des Zustands "value" hinzu. Das neue Element wird an erster Stelle
            im Array "prev" platziert, um die Reihenfolge beizubehalten. */}
            <button onClick={() => props.add(prev => [{ beschreibung: value }, ...prev])}>Add</button>
        </>
    )
}

// Exportieren der "AddToDo"-Komponente als Standardexport
export default AddToDo



// function clickbait(){
//     return 'hahah'
// }

// onClick={clickbait}
// onClick={clickbait()}
// onClick='hahah'
