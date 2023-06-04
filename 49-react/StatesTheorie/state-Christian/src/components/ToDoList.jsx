// Importieren der useState-Hook-Funktion aus dem "react"-Modul
import { useState } from "react"
// Importieren der "ToDo"-Komponente aus "./ToDo"
import ToDo from "./ToDo"
// Importieren der "AddToDo"-Komponente aus "./AddTodo"
import AddToDo from "./AddTodo"

// Deklaration der "ToDoList"-Komponente
const ToDoList = () => {
    // Verwenden der useState-Hook-Funktion, um den Zustand "todos" und dessen Aktualisierungsfunktion "setTodos" zu initialisieren
    const [todos, setTodos] = useState([])

    // Rendern der "ToDo"-Komponente für jedes Element im "todos"-Array
    // Jedes Element wird übergeben als "todo" prop mit dem Wert von "todo.beschreibung" und als "key" prop mit dem Indexwert
    // Beachte, dass der Index als "key" verwendet wird, was nicht ideal ist, aber für eine einfache Liste ohne eindeutige IDs funktioniert
    return (
        <>
            {
                todos.map((todo, index) => <ToDo todo={todo.beschreibung} key={index} />)
            }
            {/* Rendern der "AddToDo"-Komponente und Übergeben der "setTodos"-Funktion als "add" prop */}
            <AddToDo add={setTodos} />
        </>
    )
}

// Exportieren der "ToDoList"-Komponente als Standardexport
export default ToDoList