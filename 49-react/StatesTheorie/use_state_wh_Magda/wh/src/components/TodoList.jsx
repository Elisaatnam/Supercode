import { useState } from "react"
import Todo from "./Todo"
// useState ist ein hook, was und ermöglicht Zustandsvariablen in funktionalen Komponenten zu verwenden

const TodoList = () => {

    // "todos" ist eine Zustandsvariable, die eine Liste von todos speichert. 

    const [todos, setTodos] = useState([]) // Der Anfangswert ist ein leeres Array []. 
    // Später können wir die setTodos-Funktion verwenden, um den Wert von todos zu aktualisieren und neue Todos hinzuzufügen oder vorhandene Todos zu ändern.

    const [value, setValue] = useState("") // Der Anfangswert ist ein leerer String.
    // Ähnlich wie bei todos können wir die setValue-Funktion verwenden, um den Wert von value zu aktualisieren, wenn der Benutzer etwas in das Eingabefeld eingibt.


    const addTodo = ()=> {
        // { beschreibung: value } --> hier wird ein neues Todo-Objekt erstellt //* das Objekt hat ein Attribut "beschreibung", dessen Wert der aktuelle Wert von value ist.(Zeile 11)

        setTodos(prevTodo =>[{ beschreibung: value},...prevTodo])

        // In React ist "prev" ein Parameter, der in der Funktion übergeben wird, die von der useState-Hook zurückgegeben wird. Die useState-Hook wird verwendet, um den Zustand einer Komponente in React zu verwalten. Sie gibt ein Array mit zwei Elementen zurück: den aktuellen Zustand und eine Funktion, um den Zustand zu aktualisieren.

        // Die Funktion, die zum Aktualisieren des Zustands verwendet wird, kann entweder einen neuen Wert übernehmen oder eine Funktion, die den neuen Wert basierend auf dem vorherige

        // Wert berechnet. Wenn Sie die Funktion verwenden, um den neuen Wert zu berechnen, erhalten Sie den vorherigen Wert (also den aktuellen Zustand) als Argument. Dieser vorherige Wert wird als "prev" bezeichnet.

        setValue("") //*  Nachdem das neue Todo zur Liste hinzugefügt wurde, setzen wir den Wert von value auf einen leeren String.

        //! Zusammengefasst fügt die addTodo-Funktion ein neues Todo-Objekt zur Liste der Todos hinzu, basierend auf dem aktuellen Wert des Eingabefelds, und leert dann das Eingabefeld für die nächste Eingabe.
    }


    const addEvent = (e) => { // "e" bezieht sich auf das DOM
        setValue(e.target.value)
        // hat den aktuellen Wert des Eingabefelds (e.target.value) und den Zustand value speichert, indem die setValue-Funktion aufgerufen wird.
        console.log(e.target)
    }


    return (
        <>
            <input onChange={addEvent} 
             // (e) => setValue(e.target.value), hat den aktuellen Wert des Eingabefelds (e.target.value) und den Zustand value speichert, indem die setValue-Funktion aufgerufen wird.
            value={value} // Hier verwenden wir den Wert der Zustandsvariable value
            type="text" />
            <button onClick={addTodo}>Add</button> {/* funktion wird erst nach einem cklick ausgeführt */}

            {todos.map((todo,i) =>
                <Todo 
                    key={i}
                    todo={todo.beschreibung}
                />
            )}

        </>
    )
}

export default TodoList



/* <button onClick={addTodo()}>Add</button> funktion wird sofort aufgerufen */