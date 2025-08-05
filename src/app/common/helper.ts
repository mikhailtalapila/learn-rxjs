import { Observable } from "rxjs";

export function getAlternateCourses(url: string) {
    const http$ = new Observable(observer => {
        fetch(url)
        .then((resp) => { return resp.json() })
        .then((data) => {
            observer.next(data);
            observer.complete();
        })
        .catch(err => {
            observer.error(err);
        })
    })
    return http$;
}