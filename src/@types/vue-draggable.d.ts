interface AddedHandler<T> {
  element: T;
  newIndex: string | number;
}
interface MovedHandler<T> {
  element: T;
  newIndex: string | number;
  oldIndex: string | number;
}
interface VueDraggableHandlers<T> {
  added?: AddedHandler<T>;
  moved?: MovedHandler<T>;
  removed?: any
}
