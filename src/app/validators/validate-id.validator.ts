import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { TodoListService } from "../services";

export function validateId(todoListService: TodoListService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const controlValue = control.value

        return todoListService.getItemsAsync().pipe(map(
            items => {
                const idExists = !!items.find(item => item.id === controlValue)

                return idExists ? { "invalidId": true } : null
            }
        ));
    }
}