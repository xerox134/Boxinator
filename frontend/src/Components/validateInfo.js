
export default function validateInfo(values) {
    let errors = {
    }

    if(!values.name.trim()){
        errors.name="Name Required"
    } 
    
    if(!values.weight.trim()){
        errors.weight="weight Required"
    } else if(values.weight<=0){
        errors.weight='weight number cant be negative or 0!'
    }  
    


  return errors
}
