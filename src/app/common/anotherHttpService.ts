import { Observable } from "rxjs";

export function anotherHttpHelper(url: string) {
    const http$ = new Observable(observer => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        })
        .catch(err => observer.error(err))
    })
    return http$;
}