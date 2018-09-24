import { HttpErrorResponse } from '@angular/common/http';
export function errorHandler(err: HttpErrorResponse, cb?) {
    const status = err.status;
    const errMsg = err.error;
    if ('string' === typeof errMsg) {
        alert(JSON.parse(err.error).message);
        return;
    }

    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        alert('An error occurred:' + errMsg);
        return;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        alert(`Backend returned code ${status}, body was: ${errMsg}`);
        console.log(errMsg);
    }
    return;
    // if (cb) { cb(); }

}
