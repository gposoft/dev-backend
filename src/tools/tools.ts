export type Status = "success" | "error";

export type DataResponse<T> = {
  status: Status;
  data: T | null;
  error: string | null;
};


export function response<T>({ status = "success", data = null, error = null }: { status?: Status; data?: T | null; error?: string | null } ): DataResponse<T> {
  return {
    status: status as Status,
    data: data as T,
    error,
  };
}

export function wait(seconds: number): Promise<void> {
  const milliseconds = seconds * 1000;
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
