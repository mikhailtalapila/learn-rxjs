import { Observable } from "rxjs";

export function yetAnotherCourseGetter(url: string) {
    const http$ = new Observable(observer => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            observer.next(data);
            observer.complete();
        })
        .catch(err => observer.error(err));
    })
    return http$;
}