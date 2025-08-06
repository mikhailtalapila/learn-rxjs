import { Observable } from "rxjs";

export function getSomeCourses3(url: string) {
    const http$ = new Observable(observer => {
        fetch(url)
        .then(resp => resp.json())
        .then(jsonBody => {
            observer.next(jsonBody);
            observer.complete();
        })
        .catch(err => observer.error(err));
    })
    return http$;
}