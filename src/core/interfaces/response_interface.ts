export interface ResponseInterface<T> {
  message: string;
  data?: T;
  status: number;
}
