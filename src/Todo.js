
class Todo
{
 
  
    constructor(id, data){
       
        this.id = id;
        this.data = data;
        this.editingMode = false;
        this.savedMode = true;
        this.empCount = 0;
    }

    setData = (data) =>{
        this.data = data;
    }

    setEditingMode = (editingMode) => {
       if(editingMode){
           this.editingMode = editingMode;
           this.savedMode = !editingMode;
       }
    }
    
    incrimentEmp = () =>{
        this.empCount++;
    }

    decrimentEmp = () =>{
        this.empCount--;
    }



}

export default Todo;