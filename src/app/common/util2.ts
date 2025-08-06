import { Observable } from "rxjs";

export function getSomeCoursesOverHere(url: string) {
    const http$ = new Observable(observer => {
        fetch(url)
        .then(res => 
            res.json()
        )
        .then(payload => {
            observer.next(payload);
            observer.complete();
        })
        .catch(err => observer.error(err));
    })
    return http$;
}