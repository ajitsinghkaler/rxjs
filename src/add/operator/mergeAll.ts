
import { Observable } from '../../Observable';
import { mergeAll } from '../../internal/patching/operator/mergeAll';

Observable.prototype.mergeAll = mergeAll;

declare module '../../Observable' {
  interface Observable<T> {
    mergeAll: typeof mergeAll;
  }
}
